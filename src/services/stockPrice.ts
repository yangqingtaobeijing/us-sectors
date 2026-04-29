import type { PriceData } from '../types'

const API_KEY = '2baa491ec3804f86a76c0000f86be6ba'
const CACHE_PREFIX = 'us_sectors_price_'
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

interface CacheEntry {
  data: Record<string, PriceData>
  timestamp: number
}

function getCacheKey(sectorId: string): string {
  return CACHE_PREFIX + sectorId
}

function getCache(sectorId: string): Record<string, PriceData> | null {
  try {
    const raw = localStorage.getItem(getCacheKey(sectorId))
    if (!raw) return null
    const entry: CacheEntry = JSON.parse(raw)
    if (Date.now() - entry.timestamp > CACHE_DURATION) {
      localStorage.removeItem(getCacheKey(sectorId))
      return null
    }
    return entry.data
  } catch {
    return null
  }
}

function setCache(sectorId: string, data: Record<string, PriceData>): void {
  try {
    const entry: CacheEntry = { data, timestamp: Date.now() }
    localStorage.setItem(getCacheKey(sectorId), JSON.stringify(entry))
  } catch {
    // localStorage full — ignore
  }
}

export async function fetchSectorPrices(
  sectorId: string,
  symbols: string[]
): Promise<Record<string, PriceData>> {
  // Check cache first
  const cached = getCache(sectorId)
  if (cached) return cached

  const result: Record<string, PriceData> = {}

  // Batch fetch: Twelve Data supports up to 8 symbols per batch
  const batchSize = 8
  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize)
    // BRK.B needs special handling for Twelve Data
    const apiSymbols = batch.map(s => s === 'BRK.B' ? 'BRK.B' : s)

    try {
      const url = `https://api.twelvedata.com/quote?symbol=${apiSymbols.join(',')}&apikey=${API_KEY}`
      const response = await fetch(url)
      const data = await response.json()

      if (batch.length === 1) {
        // Single symbol returns object directly
        const sym = batch[0]
        if (data && data.close) {
          result[sym] = {
            price: parseFloat(data.close),
            change: parseFloat(data.change || '0'),
            changePercent: parseFloat(data.percent_change || '0'),
            timestamp: Date.now(),
          }
        }
      } else {
        // Multiple symbols returns keyed object
        for (const sym of batch) {
          const apiSym = sym === 'BRK.B' ? 'BRK.B' : sym
          const item = data[apiSym]
          if (item && item.close) {
            result[sym] = {
              price: parseFloat(item.close),
              change: parseFloat(item.change || '0'),
              changePercent: parseFloat(item.percent_change || '0'),
              timestamp: Date.now(),
            }
          }
        }
      }

      // Respect rate limit: 8 requests/min
      if (i + batchSize < symbols.length) {
        await new Promise(resolve => setTimeout(resolve, 800))
      }
    } catch {
      // API failure — continue without prices
      console.warn(`Failed to fetch prices for batch starting at ${i}`)
    }
  }

  if (Object.keys(result).length > 0) {
    setCache(sectorId, result)
  }

  return result
}
