export type MoatType = '品牌' | '网络效应' | '转换成本' | '规模经济' | '专利' | '技术领先' | '生态系统' | '数据优势' | '内容库' | '牌照' | 'IP' | '成本优势' | '资源壁垒' | '自然垄断' | '特许经营' | '成瘾性' | '渠道' | '双寡头' | '人才' | '会员模式' | '技术壁垒' | '地段' | '资本优势' | '研发管线'
export type MarketCap = 'Mega' | 'Large' | 'Mid'

export interface FinancialData {
  marketCap: string       // e.g. "3.0万亿"
  revenue: string         // 年营收
  netIncome: string       // 净利润
  pe: number              // PE
  grossMargin: number     // 毛利率 %
  netMargin: number       // 净利率 %
  roe: number             // ROE %
  freeCashFlow: string    // 自由现金流
  eps: number             // 每股收益
  dividendYield: number   // 股息率 %
}

export interface Company {
  symbol: string
  name: string
  nameCn: string
  sectorId: string
  subIndustry: string
  weight: number
  marketCapCategory: MarketCap
  moats: MoatType[]
  description: string
  competitiveAdvantage: string
  financials: FinancialData
}

export interface Sector {
  id: string
  name: string
  nameCn: string
  etf: string
  icon: string
  color: string
  description: string
  subIndustries: string[]
  companies: Company[]
}

export interface PriceData {
  price: number
  change: number
  changePercent: number
  timestamp: number
}
