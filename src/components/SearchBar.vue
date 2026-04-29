<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { allCompanies } from '../data/companies'
import { CIK_MAP } from '../data/ciks'

const router = useRouter()
const query = ref('')
const isOpen = ref(false)
const selectedIndex = ref(0)

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return allCompanies
    .filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.nameCn.includes(q) ||
      c.symbol.toLowerCase().includes(q)
    )
    .slice(0, 5)
})

const externalSites = computed(() => {
  const q = query.value.trim()
  const upper = q.toUpperCase()
  const cik = CIK_MAP[upper]
  const secUrl = cik
    ? `https://www.sec.gov/edgar/browse/?CIK=${String(cik).padStart(10, '0')}`
    : `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=${upper}`
  return [
    { icon: '🔍', name: 'Finviz', url: `https://finviz.com/quote.ashx?t=${upper}` },
    { icon: '📊', name: 'Yahoo Finance', url: `https://finance.yahoo.com/quote/${upper}` },
    { icon: '📰', name: 'Seeking Alpha', url: `https://seekingalpha.com/symbol/${upper}` },
    { icon: '🐂', name: '富途牛牛', url: `https://www.futunn.com/stock/${upper}-US` },
    { icon: '🏛️', name: 'SEC EDGAR', url: secUrl },
  ]
})

watch(query, () => {
  isOpen.value = query.value.trim().length > 0
  selectedIndex.value = 0
})

function goToCompany(symbol: string) {
  query.value = ''
  isOpen.value = false
  router.push(`/company/${symbol}`)
}

const totalItems = computed(() => results.value.length + (results.value.length < 5 ? externalSites.value.length : 0))

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, totalItems.value - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
  } else if (e.key === 'Enter') {
    const idx = selectedIndex.value
    if (idx < results.value.length) {
      goToCompany(results.value[idx].symbol)
    } else {
      const ext = externalSites.value[idx - results.value.length]
      if (ext) window.open(ext.url, '_blank')
    }
  } else if (e.key === 'Escape') {
    isOpen.value = false
  }
}

function isSelected(index: number) {
  return index === selectedIndex.value
}

function handleBlur() {
  setTimeout(() => { isOpen.value = false }, 200)
}
</script>

<template>
  <div class="relative">
    <div class="relative">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        v-model="query"
        type="text"
        placeholder="Search ticker or name, jump to external if not found..."
        class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB]/20 focus:border-[#1A56DB] transition-all"
        @keydown="handleKeydown"
        @focus="isOpen = query.trim().length > 0"
        @blur="handleBlur"
      />
    </div>

    <div
      v-if="isOpen && totalItems > 0"
      class="absolute top-full mt-1 w-80 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50"
    >
      <!-- Internal results -->
      <div
        v-for="(company, i) in results"
        :key="company.symbol"
        class="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors"
        :class="isSelected(i) ? 'bg-blue-50' : 'hover:bg-slate-50'"
        @mousedown.prevent="goToCompany(company.symbol)"
        @mouseenter="selectedIndex = i"
      >
        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0" :style="{ backgroundColor: '#1A56DB' }">
          {{ company.symbol.slice(0, 2) }}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm text-slate-900 truncate">{{ company.name }}</div>
          <div class="text-xs text-slate-400">{{ company.symbol }} · {{ company.nameCn }}</div>
        </div>
      </div>

      <!-- Divider if both sections exist -->
      <div v-if="results.length > 0" class="border-t border-slate-100">
        <div class="px-4 py-1.5 text-xs text-slate-400 bg-slate-50">Not in dataset? Jump to external</div>
      </div>

      <!-- External site links -->
      <a
        v-for="(site, i) in externalSites"
        :key="site.name"
        :href="site.url"
        target="_blank"
        rel="noopener"
        class="flex items-center gap-2 px-4 py-2.5 cursor-pointer transition-colors"
        :class="isSelected(results.length + i) ? 'bg-blue-50 text-[#1A56DB]' : 'text-slate-600 hover:bg-slate-50'"
        @mouseenter="selectedIndex = results.length + i"
      >
        <span class="text-base w-6 text-center">{{ site.icon }}</span>
        <span class="text-sm">{{ site.name }}</span>
        <svg class="w-3 h-3 text-slate-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      </a>
    </div>
  </div>
</template>
