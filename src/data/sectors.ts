export interface SectorMeta {
  id: string
  name: string
  nameCn: string
  etf: string
  icon: string
  color: string
  description: string
  subIndustries: string[]
}

export const sectorsMeta: SectorMeta[] = [
  {
    id: 'technology',
    name: 'Technology',
    nameCn: '信息技术',
    etf: 'XLK',
    icon: '💻',
    color: '#6366F1',
    description: '涵盖软件、半导体、硬件与设备等高科技公司，是美股市值最大、创新最活跃的板块。AI、云计算、芯片设计是当前核心驱动力。',
    subIndustries: ['软件', '半导体', '硬件与设备', '半导体设备'],
  },
  {
    id: 'communication',
    name: 'Communication Services',
    nameCn: '通讯服务',
    etf: 'XLC',
    icon: '📡',
    color: '#EC4899',
    description: '包括社交媒体、搜索引擎、流媒体、电信运营商和游戏公司。广告收入和用户增长是核心驱动力，具有强网络效应。',
    subIndustries: ['社交媒体', '互联网服务', '流媒体', '电信', '媒体娱乐', '有线电视/电信', '游戏'],
  },
  {
    id: 'consumer-discretionary',
    name: 'Consumer Discretionary',
    nameCn: '非必需消费品',
    etf: 'XLY',
    icon: '🛒',
    color: '#F59E0B',
    description: '涵盖电商、汽车、餐饮、家居零售、旅游等周期性消费行业。与经济周期高度相关，消费者信心和可支配收入是关键变量。',
    subIndustries: ['电商/云计算', '电动汽车', '家居零售', '餐饮', '服饰鞋类', '在线旅游', '折扣零售', '汽车'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    nameCn: '医疗保健',
    etf: 'XLV',
    icon: '🏥',
    color: '#10B981',
    description: '包括制药、生物科技、医疗器械、医疗保险和生命科学工具。人口老龄化和创新药物研发是长期增长引擎，具有较强防御性。',
    subIndustries: ['制药', '医疗保险', '医疗器械', '生命科学工具', '生物科技'],
  },
  {
    id: 'financials',
    name: 'Financials',
    nameCn: '金融',
    etf: 'XLF',
    icon: '🏦',
    color: '#1A56DB',
    description: '涵盖银行、保险、支付、资管和投行。利率环境、信贷周期和监管政策是核心影响因素，具有明显的周期性特征。',
    subIndustries: ['综合金融', '银行', '支付', '投行', '投行/资管', '资管', '券商', '支付/金融服务'],
  },
  {
    id: 'industrials',
    name: 'Industrials',
    nameCn: '工业',
    etf: 'XLI',
    icon: '🏭',
    color: '#78716C',
    description: '包括航空航天、国防、工程机械、铁路运输、物流等。基础设施投资、国防预算和全球贸易是主要驱动力。',
    subIndustries: ['航空航天', '工程机械', '国防航空', '铁路运输', '多元化工业', '国防', '农业机械', '物流', '多元化制造'],
  },
  {
    id: 'energy',
    name: 'Energy',
    nameCn: '能源',
    etf: 'XLE',
    icon: '⛽',
    color: '#EA580C',
    description: '涵盖综合石油、勘探生产、油田服务、炼油和管道运输。原油价格和全球能源供需格局是决定性因素，高度周期性。',
    subIndustries: ['综合石油', '勘探生产', '油田服务', '炼油', '天然气管道', '炼油/化工'],
  },
  {
    id: 'consumer-staples',
    name: 'Consumer Staples',
    nameCn: '必需消费品',
    etf: 'XLP',
    icon: '🛍️',
    color: '#0891B2',
    description: '包括食品饮料、日化、烟草和零售超市。需求刚性，抗周期性强，是经典防御板块，适合追求稳定分红的投资者。',
    subIndustries: ['日化', '仓储零售', '大卖场', '饮料', '饮料+零食', '烟草', '零食', '食品'],
  },
  {
    id: 'utilities',
    name: 'Utilities',
    nameCn: '公用事业',
    etf: 'XLU',
    icon: '⚡',
    color: '#FBBF24',
    description: '涵盖电力、天然气、水务和环保公司。受监管的垄断性业务模式，现金流稳定，高股息，是利率敏感型板块。AI 数据中心用电需求是新增长点。',
    subIndustries: ['电力', '核电', '电力/天然气', '环保'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    nameCn: '房地产',
    etf: 'XLRE',
    icon: '🏢',
    color: '#7C3AED',
    description: '以 REITs（房地产投资信托）为主，涵盖数据中心、通信铁塔、物流仓储、购物中心和自助仓储。高分红，对利率敏感。',
    subIndustries: ['物流地产', '通信铁塔', '数据中心', '零售净租赁', '购物中心', '自助仓储', '医疗地产', '博彩/休闲地产'],
  },
  {
    id: 'materials',
    name: 'Materials',
    nameCn: '材料',
    etf: 'XLB',
    icon: '🧱',
    color: '#B45309',
    description: '包括工业气体、化工、涂料、矿业和造纸。大宗商品价格和全球制造业景气度是核心驱动因素，周期性较强。',
    subIndustries: ['工业气体', '涂料', '铜矿', '钢铁', '化工', '造纸包装', '特种化学'],
  },
]
