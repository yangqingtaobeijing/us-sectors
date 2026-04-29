<script setup lang="ts">
import { sectorsMeta } from '../data/sectors'
import { allCompanies } from '../data/companies'
import SectorCard from '../components/SectorCard.vue'
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-slate-900 mb-3">美股 11 大板块全景</h2>
      <p class="text-slate-500 text-lg">
        按 GICS 标准分类，覆盖
        <span class="font-semibold text-[#1A56DB]">{{ allCompanies.length }}+</span>
        家核心上市公司的板块分析与竞争壁垒解读
      </p>
    </div>

    <!-- Sector Grid -->
    <div class="grid grid-cols-3 gap-5">
      <SectorCard
        v-for="sector in sectorsMeta"
        :key="sector.id"
        :sector="sector"
      />
    </div>

    <!-- Bottom Stats -->
    <div class="mt-12 grid grid-cols-4 gap-6">
      <div class="bg-white rounded-xl border border-slate-200 p-5 text-center">
        <div class="text-3xl font-bold text-[#1A56DB] mb-1">11</div>
        <div class="text-sm text-slate-500">GICS 板块</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-5 text-center">
        <div class="text-3xl font-bold text-[#10B981] mb-1">{{ allCompanies.length }}</div>
        <div class="text-sm text-slate-500">代表性公司</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-5 text-center">
        <div class="text-3xl font-bold text-[#F59E0B] mb-1">5</div>
        <div class="text-sm text-slate-500">护城河类型</div>
      </div>
      <div class="bg-white rounded-xl border border-slate-200 p-5 text-center">
        <div class="text-3xl font-bold text-[#EC4899] mb-1">100%</div>
        <div class="text-sm text-slate-500">中文解读</div>
      </div>
    </div>
  </div>
</template>
