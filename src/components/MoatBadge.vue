<script setup lang="ts">
defineProps<{ moat: string }>()

const moatColors: Record<string, string> = {
  '品牌': '#6366F1',
  '网络效应': '#EC4899',
  '转换成本': '#F59E0B',
  '规模经济': '#10B981',
  '专利': '#EF4444',
  '技术领先': '#8B5CF6',
  '生态系统': '#06B6D4',
  '数据优势': '#14B8A6',
  '内容库': '#F97316',
  '牌照': '#0891B2',
  'IP': '#D946EF',
  '成本优势': '#22C55E',
  '资源壁垒': '#A855F7',
  '自然垄断': '#0EA5E9',
  '特许经营': '#EAB308',
  '成瘾性': '#DC2626',
  '渠道': '#2563EB',
  '双寡头': '#7C3AED',
  '人才': '#DB2777',
  '会员模式': '#059669',
  '技术壁垒': '#7C3AED',
  '地段': '#CA8A04',
  '资本优势': '#1D4ED8',
  '研发管线': '#9333EA',
}
</script>

<template>
  <span
    class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
    :style="{
      color: moatColors[moat] || '#64748B',
      backgroundColor: (moatColors[moat] || '#64748B') + '15',
    }"
  >
    {{ moat }}
  </span>
</template>
