import { technologyCompanies } from './technology'
import { communicationCompanies } from './communication'
import { consumerDiscretionaryCompanies } from './consumer-discretionary'
import { healthcareCompanies } from './healthcare'
import { financialsCompanies } from './financials'
import { industrialsCompanies } from './industrials'
import { energyCompanies } from './energy'
import { consumerStaplesCompanies } from './consumer-staples'
import { utilitiesCompanies } from './utilities'
import { realEstateCompanies } from './real-estate'
import { materialsCompanies } from './materials'
import type { Company } from '../../types'

export const companiesBySector: Record<string, Company[]> = {
  'technology': technologyCompanies,
  'communication': communicationCompanies,
  'consumer-discretionary': consumerDiscretionaryCompanies,
  'healthcare': healthcareCompanies,
  'financials': financialsCompanies,
  'industrials': industrialsCompanies,
  'energy': energyCompanies,
  'consumer-staples': consumerStaplesCompanies,
  'utilities': utilitiesCompanies,
  'real-estate': realEstateCompanies,
  'materials': materialsCompanies,
}

export const allCompanies: Company[] = Object.values(companiesBySector).flat()

export function getCompanyBySymbol(symbol: string): Company | undefined {
  return allCompanies.find(c => c.symbol === symbol)
}

export function getCompaniesBySector(sectorId: string): Company[] {
  return companiesBySector[sectorId] || []
}
