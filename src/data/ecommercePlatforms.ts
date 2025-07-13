export interface EcommercePlatform {
  id: string;
  name: string;
  logo: string;
  type: 'B2B' | 'B2C' | '综合';
  headquarters: string;
  mainMarkets: string[];
  description: string;
  website: string;
  foundedYear: number;
  monthlyVisitors: string;
  sellerFees: {
    commission: string;
    listingFee: string;
    monthlyFee: string;
  };
  entryRequirements: {
    businessLicense: boolean;
    minimumSales: string;
    productRequirements: string;
    approvalTime: string;
  };
  suitableCategories: string[];
  trafficInfo: {
    globalRanking: string;
    monthlyVisitors: string;
    activeUsers: string;
  };
  advantages: string[];
  disadvantages: string[];
  paymentMethods: string[];
  shippingOptions: string[];
  customerService: string;
  marketingTools: string[];
  analyticsTools: string[];
  mobileApp: boolean;
  apiSupport: boolean;
  multiLanguage: boolean;
  currencySupport: string[];
  userDistribution: Record<string, number>; // 新增：用户市场分布
}

export const ecommercePlatforms: EcommercePlatform[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '/logos/amazon.svg',
    type: '综合',
    headquarters: '美国西雅图',
    mainMarkets: ['美国', '加拿大', '英国', '德国', '法国', '意大利', '西班牙', '日本', '澳大利亚', '印度', '墨西哥', '巴西'],
    description: '全球最大的电商平台，提供B2B和B2C服务，拥有庞大的客户群体和完善的物流体系。',
    website: 'https://www.amazon.com',
    foundedYear: 1994,
    monthlyVisitors: '25亿+',
    sellerFees: {
      commission: '8-15%',
      listingFee: '$0.99/件',
      monthlyFee: '$39.99/月（专业卖家）'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '无',
      productRequirements: '高质量产品，符合平台标准',
      approvalTime: '1-2周'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '图书', '运动户外', '美妆护肤', '食品饮料', '玩具游戏'],
    trafficInfo: {
      globalRanking: '#1',
      monthlyVisitors: '25亿+',
      activeUsers: '3亿+'
    },
    advantages: ['全球最大流量', '完善的物流体系', '强大的品牌影响力', '丰富的营销工具', '优质的客户服务'],
    disadvantages: ['竞争激烈', '费用较高', '政策严格', '审核时间长'],
    paymentMethods: ['信用卡', '借记卡', 'PayPal', 'Amazon Pay', '分期付款'],
    shippingOptions: ['FBA', 'FBM', '国际物流', '本地配送'],
    customerService: '24/7客服支持，多语言服务',
    marketingTools: ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display', 'Amazon DSP', '优惠券', '秒杀活动'],
    analyticsTools: ['Amazon Analytics', 'Brand Analytics', 'Search Analytics', 'Advertising Analytics'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'INR', 'MXN', 'BRL'],
    userDistribution: { 
      '美国': 25, '德国': 12, '英国': 10, '日本': 8, '加拿大': 6,
      '法国': 6, '意大利': 5, '西班牙': 5, '澳大利亚': 4, '印度': 4,
      '墨西哥': 3, '巴西': 3, '荷兰': 2, '比利时': 2, '瑞典': 2,
      '挪威': 2, '丹麦': 2, '芬兰': 2, '瑞士': 2, '奥地利': 2,
      '其他': 10 
    }
  },
  {
    id: 'ebay',
    name: 'eBay',
    logo: '/logos/ebay.svg',
    type: '综合',
    headquarters: '美国圣何塞',
    mainMarkets: ['美国', '英国', '德国', '澳大利亚', '加拿大', '法国', '意大利', '西班牙'],
    description: '全球知名的C2C和B2C电商平台，以拍卖和固定价格销售为主，覆盖全球190多个国家和地区。',
    website: 'https://www.ebay.com',
    foundedYear: 1995,
    monthlyVisitors: '1.5亿+',
    sellerFees: {
      commission: '2.9-12.35%',
      listingFee: '$0.30/件',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '合法商品，符合平台政策',
      approvalTime: '1-3天'
    },
    suitableCategories: ['收藏品', '电子产品', '服装', '家居用品', '汽车配件', '运动用品', '玩具', '珠宝'],
    trafficInfo: {
      globalRanking: '#15',
      monthlyVisitors: '1.5亿+',
      activeUsers: '1.8亿+'
    },
    advantages: ['门槛低', '全球覆盖', '拍卖模式', '灵活的定价策略', '个人卖家友好'],
    disadvantages: ['竞争激烈', '买家保护政策严格', '费用结构复杂', '假货风险'],
    paymentMethods: ['PayPal', '信用卡', '借记卡', 'Apple Pay', 'Google Pay'],
    shippingOptions: ['全球物流', '本地配送', '国际快递', 'eBay Global Shipping'],
    customerService: '在线客服，电话支持，社区论坛',
    marketingTools: ['Promoted Listings', 'eBay Ads', '优惠券', '促销活动', '社交媒体推广'],
    analyticsTools: ['Seller Hub', 'Traffic Reports', 'Sales Reports', 'Performance Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'CHF', 'SEK', 'NOK'],
    userDistribution: { 
      '美国': 30, '英国': 15, '德国': 12, '澳大利亚': 8, '加拿大': 8,
      '法国': 6, '意大利': 6, '西班牙': 5, '荷兰': 3, '比利时': 3,
      '瑞典': 2, '挪威': 2, '丹麦': 2, '芬兰': 2, '瑞士': 2,
      '奥地利': 2, '其他': 4 
    }
  },
  {
    id: 'etsy',
    name: 'Etsy',
    logo: '/logos/etsy.svg',
    type: 'B2C',
    headquarters: '美国布鲁克林',
    mainMarkets: ['美国', '英国', '加拿大', '澳大利亚', '德国', '法国'],
    description: '专注于手工艺品、复古商品和独特设计的电商平台，深受创意工作者和手工爱好者欢迎。',
    website: 'https://www.etsy.com',
    foundedYear: 2005,
    monthlyVisitors: '4亿+',
    sellerFees: {
      commission: '6.5%',
      listingFee: '$0.20/件',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '手工艺品、复古商品、独特设计',
      approvalTime: '1-2天'
    },
    suitableCategories: ['手工艺品', '珠宝首饰', '服装配饰', '家居装饰', '文具用品', '美容护肤', '食品饮料', '宠物用品'],
    trafficInfo: {
      globalRanking: '#50',
      monthlyVisitors: '4亿+',
      activeUsers: '9600万+'
    },
    advantages: ['独特定位', '创意社区', '低门槛', '高利润率', '忠实客户群'],
    disadvantages: ['市场规模有限', '竞争激烈', '季节性明显', '物流挑战'],
    paymentMethods: ['信用卡', '借记卡', 'PayPal', 'Apple Pay', 'Google Pay'],
    shippingOptions: ['全球物流', '本地配送', '定制包装', '追踪服务'],
    customerService: '在线客服，卖家支持中心，社区论坛',
    marketingTools: ['Etsy Ads', 'Promoted Listings', '社交媒体集成', '邮件营销', '优惠券'],
    analyticsTools: ['Shop Stats', 'Traffic Analytics', 'Sales Reports', 'Search Analytics'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
    userDistribution: { 
      '美国': 45, '英国': 20, '加拿大': 12, '澳大利亚': 8, '德国': 6,
      '法国': 5, '荷兰': 2, '比利时': 2 
    }
  },
  {
    id: 'walmart',
    name: 'Walmart',
    logo: '/logos/walmart.svg',
    type: 'B2C',
    headquarters: '美国阿肯色州',
    mainMarkets: ['美国', '加拿大', '墨西哥', '智利'],
    description: '全球最大的零售商，在线电商平台提供广泛的商品类别，拥有强大的供应链和物流网络。',
    website: 'https://www.walmart.com',
    foundedYear: 1962,
    monthlyVisitors: '1.2亿+',
    sellerFees: {
      commission: '6-15%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '年销售额$100万+',
      productRequirements: '高质量产品，符合Walmart标准',
      approvalTime: '2-4周'
    },
    suitableCategories: ['电子产品', '家居用品', '服装鞋帽', '食品饮料', '健康美容', '玩具游戏', '运动户外', '汽车用品'],
    trafficInfo: {
      globalRanking: '#20',
      monthlyVisitors: '1.2亿+',
      activeUsers: '2.3亿+'
    },
    advantages: ['强大品牌影响力', '优质客户群', '完善物流体系', '多渠道销售', '强大的供应链'],
    disadvantages: ['门槛高', '竞争激烈', '政策严格', '费用较高'],
    paymentMethods: ['信用卡', '借记卡', 'Walmart Pay', '现金', '分期付款'],
    shippingOptions: ['免费配送', '次日达', '店内自提', '国际物流'],
    customerService: '24/7客服，电话支持，在线聊天',
    marketingTools: ['Sponsored Products', 'Walmart Connect', '优惠券', '促销活动', '会员计划'],
    analyticsTools: ['Seller Center', 'Analytics Dashboard', 'Performance Reports', 'Inventory Management'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'CAD', 'MXN', 'CLP'],
    userDistribution: { 
      '美国': 70, '加拿大': 15, '墨西哥': 10, '智利': 5 
    }
  },
  {
    id: 'newegg',
    name: 'Newegg',
    logo: '/logos/newegg.svg',
    type: 'B2C',
    headquarters: '美国加利福尼亚州',
    mainMarkets: ['美国', '加拿大', '中国'],
    description: '专注于电子产品和电脑配件的电商平台，在科技产品领域具有强大的专业优势。',
    website: 'https://www.newegg.com',
    foundedYear: 2001,
    monthlyVisitors: '5000万+',
    sellerFees: {
      commission: '8-12%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '年销售额$50万+',
      productRequirements: '电子产品，正品保证',
      approvalTime: '2-3周'
    },
    suitableCategories: ['电脑配件', '电子产品', '游戏设备', '办公用品', '网络设备', '存储设备', '外设设备'],
    trafficInfo: {
      globalRanking: '#200',
      monthlyVisitors: '5000万+',
      activeUsers: '8000万+'
    },
    advantages: ['专业定位', '技术客户群', '高质量产品', '专业服务', '技术社区'],
    disadvantages: ['品类有限', '竞争激烈', '技术要求高', '季节性明显'],
    paymentMethods: ['信用卡', '借记卡', 'PayPal', '分期付款', '企业账户'],
    shippingOptions: ['免费配送', '快速配送', '国际物流', '专业包装'],
    customerService: '技术客服，在线支持，电话服务',
    marketingTools: ['Sponsored Products', 'Email Marketing', '技术博客', '产品评测', '社区营销'],
    analyticsTools: ['Seller Portal', 'Sales Analytics', 'Inventory Reports', 'Performance Metrics'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'CAD', 'CNY'],
    userDistribution: { 
      '美国': 75, '加拿大': 20, '中国': 5 
    }
  },
  {
    id: 'alibaba',
    name: 'Alibaba.com',
    logo: '/logos/alibaba.com.svg',
    type: 'B2B',
    headquarters: '中国杭州',
    mainMarkets: ['中国', '美国', '欧洲', '东南亚', '南美', '中东'],
    description: '全球最大的B2B电商平台，专注于企业间的贸易，为全球买家和卖家提供连接服务。',
    website: 'https://www.alibaba.com',
    foundedYear: 1999,
    monthlyVisitors: '2亿+',
    sellerFees: {
      commission: '3-8%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '年销售额$10万+',
      productRequirements: '高质量产品，符合平台标准',
      approvalTime: '1-2周'
    },
    suitableCategories: ['工业设备', '原材料', '服装面料', '电子产品', '家居用品', '美妆原料', '食品原料', '包装材料'],
    trafficInfo: {
      globalRanking: '#50',
      monthlyVisitors: '2亿+',
      activeUsers: '1.5亿+'
    },
    advantages: ['全球B2B领先', '供应商资源丰富', '贸易保障', '多语言支持', '专业服务'],
    disadvantages: ['竞争激烈', '质量控制挑战', '文化差异', '物流复杂'],
    paymentMethods: ['信用证', '银行转账', '支付宝', 'Trade Assurance', '分期付款'],
    shippingOptions: ['国际物流', '海运', '空运', '快递', '多式联运'],
    customerService: '多语言客服，贸易顾问，在线支持',
    marketingTools: ['P4P广告', '展位推广', '关键词优化', '产品展示', '贸易展会'],
    analyticsTools: ['数据纵横', '流量分析', '询盘管理', '客户分析'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'EUR', 'CNY', 'GBP', 'JPY', 'KRW'],
    userDistribution: { 
      '中国': 30, '美国': 15, '印度': 10, '巴西': 8, '俄罗斯': 6,
      '德国': 5, '英国': 5, '法国': 4, '意大利': 4, '西班牙': 3,
      '日本': 3, '韩国': 3, '其他': 4 
    }
  },
  {
    id: 'rakuten',
    name: 'Rakuten',
    logo: '/logos/rakuten.svg',
    type: '综合',
    headquarters: '日本东京',
    mainMarkets: ['日本', '美国', '台湾', '法国', '德国', '英国'],
    description: '日本最大的电商平台，提供B2B和B2C服务，拥有完善的生态系统和忠诚度计划。',
    website: 'https://www.rakuten.com',
    foundedYear: 1997,
    monthlyVisitors: '3亿+',
    sellerFees: {
      commission: '3-15%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '年销售额$10万+',
      productRequirements: '高质量产品，符合平台标准',
      approvalTime: '1-2周'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '美妆护肤', '食品饮料', '图书', '运动户外', '母婴用品'],
    trafficInfo: {
      globalRanking: '#30',
      monthlyVisitors: '3亿+',
      activeUsers: '1.2亿+'
    },
    advantages: ['日本市场领先', '生态系统完善', '忠诚度计划', '本地化服务', '技术先进'],
    disadvantages: ['国际化程度有限', '语言障碍', '文化差异', '竞争激烈'],
    paymentMethods: ['信用卡', '借记卡', 'Rakuten Pay', '银行转账', '分期付款'],
    shippingOptions: ['全球物流', '本地配送', '快速配送', '追踪服务'],
    customerService: '多语言客服，在线支持，电话服务',
    marketingTools: ['Rakuten Marketing', 'Sponsored Products', '优惠券', '会员积分', '促销活动'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['JPY', 'USD', 'EUR', 'GBP', 'TWD'],
    userDistribution: { 
      '日本': 60, '美国': 15, '台湾': 10, '法国': 5, '德国': 5,
      '英国': 5 
    }
  },
  {
    id: 'allegro',
    name: 'Allegro',
    logo: '/logos/allegro.svg',
    type: '综合',
    headquarters: '波兰华沙',
    mainMarkets: ['波兰', '捷克', '斯洛伐克', '匈牙利'],
    description: '波兰最大的电商平台，提供C2C和B2C服务，在波兰市场占据主导地位。',
    website: 'https://www.allegro.pl',
    foundedYear: 1999,
    monthlyVisitors: '2亿+',
    sellerFees: {
      commission: '3-8%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '合法商品，符合平台政策',
      approvalTime: '1-2天'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '汽车配件', '运动用品', '图书', '收藏品', '珠宝'],
    trafficInfo: {
      globalRanking: '#100',
      monthlyVisitors: '2亿+',
      activeUsers: '8000万+'
    },
    advantages: ['波兰市场领先', '本地化服务', '低门槛', '用户信任', '完善的支付系统'],
    disadvantages: ['市场范围有限', '语言障碍', '国际化程度低', '技术相对落后'],
    paymentMethods: ['信用卡', '借记卡', '银行转账', '现金', '分期付款'],
    shippingOptions: ['本地配送', '国际物流', '快递服务', '自提点'],
    customerService: '在线客服，电话支持，社区论坛',
    marketingTools: ['Promoted Listings', '优惠券', '促销活动', '社交媒体推广'],
    analyticsTools: ['Seller Analytics', 'Sales Reports', 'Traffic Analysis', 'Performance Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['PLN', 'CZK', 'HUF', 'EUR'],
    userDistribution: { 
      '波兰': 80, '捷克': 10, '斯洛伐克': 5, '匈牙利': 5 
    }
  },
  {
    id: 'mercado-libre',
    name: 'Mercado Libre',
    logo: '/logos/mercado-libre.svg',
    type: '综合',
    headquarters: '阿根廷布宜诺斯艾利斯',
    mainMarkets: ['阿根廷', '巴西', '墨西哥', '智利', '哥伦比亚', '秘鲁', '乌拉圭', '委内瑞拉'],
    description: '拉丁美洲最大的电商平台，提供B2B和B2C服务，在拉美市场占据主导地位。',
    website: 'https://www.mercadolibre.com',
    foundedYear: 1999,
    monthlyVisitors: '4亿+',
    sellerFees: {
      commission: '4-16%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '合法商品，符合平台政策',
      approvalTime: '1-3天'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '汽车配件', '运动用品', '美妆护肤', '食品饮料', '图书'],
    trafficInfo: {
      globalRanking: '#25',
      monthlyVisitors: '4亿+',
      activeUsers: '1.5亿+'
    },
    advantages: ['拉美市场领先', '本地化服务', '完善的支付系统', '物流网络', '用户信任'],
    disadvantages: ['市场范围有限', '经济不稳定', '物流挑战', '竞争激烈'],
    paymentMethods: ['Mercado Pago', '信用卡', '借记卡', '银行转账', '现金'],
    shippingOptions: ['Mercado Envíos', '本地配送', '国际物流', '自提点'],
    customerService: '多语言客服，在线支持，电话服务',
    marketingTools: ['Mercado Ads', 'Promoted Listings', '优惠券', '促销活动', '社交媒体推广'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['ARS', 'BRL', 'MXN', 'CLP', 'COP', 'PEN', 'UYU', 'VES'],
    userDistribution: { 
      '巴西': 35, '阿根廷': 25, '墨西哥': 20, '智利': 8, '哥伦比亚': 6,
      '秘鲁': 3, '乌拉圭': 2, '委内瑞拉': 1 
    }
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: '/logos/flipkart.svg',
    type: 'B2C',
    headquarters: '印度班加罗尔',
    mainMarkets: ['印度', '新加坡', '阿联酋'],
    description: '印度最大的电商平台，提供B2C服务，在印度市场占据主导地位。',
    website: 'https://www.flipkart.com',
    foundedYear: 2007,
    monthlyVisitors: '3亿+',
    sellerFees: {
      commission: '5-15%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '年销售额₹100万+',
      productRequirements: '高质量产品，符合平台标准',
      approvalTime: '1-2周'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '美妆护肤', '食品饮料', '图书', '运动户外', '母婴用品'],
    trafficInfo: {
      globalRanking: '#35',
      monthlyVisitors: '3亿+',
      activeUsers: '1.8亿+'
    },
    advantages: ['印度市场领先', '本地化服务', '完善的物流网络', '强大的品牌影响力', '技术先进'],
    disadvantages: ['市场范围有限', '竞争激烈', '政策复杂', '物流挑战'],
    paymentMethods: ['信用卡', '借记卡', 'UPI', '数字钱包', '货到付款'],
    shippingOptions: ['Flipkart物流', '本地配送', '快速配送', '自提点'],
    customerService: '多语言客服，在线支持，电话服务',
    marketingTools: ['Flipkart Ads', 'Sponsored Products', '优惠券', '促销活动', '会员计划'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['INR', 'SGD', 'AED'],
    userDistribution: { 
      '印度': 90, '新加坡': 6, '阿联酋': 4 
    }
  },
  {
    id: 'shopee',
    name: 'Shopee',
    logo: '/logos/shopee.svg',
    type: '综合',
    headquarters: '新加坡',
    mainMarkets: ['新加坡', '马来西亚', '泰国', '印尼', '菲律宾', '越南', '台湾', '巴西'],
    description: '东南亚最大的电商平台，提供B2B和B2C服务，在东南亚市场占据主导地位。',
    website: 'https://www.shopee.com',
    foundedYear: 2015,
    monthlyVisitors: '5亿+',
    sellerFees: {
      commission: '2-5%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '合法商品，符合平台政策',
      approvalTime: '1-2天'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '美妆护肤', '食品饮料', '运动户外', '母婴用品', '图书'],
    trafficInfo: {
      globalRanking: '#18',
      monthlyVisitors: '5亿+',
      activeUsers: '2亿+'
    },
    advantages: ['东南亚市场领先', '本地化服务', '移动端优势', '社交电商', '低门槛'],
    disadvantages: ['竞争激烈', '利润空间小', '物流挑战', '政策复杂'],
    paymentMethods: ['信用卡', '借记卡', '数字钱包', '银行转账', '货到付款'],
    shippingOptions: ['Shopee物流', '本地配送', '国际物流', '自提点'],
    customerService: '多语言客服，在线支持，电话服务',
    marketingTools: ['Shopee Ads', 'Sponsored Products', '直播带货', '优惠券', '促销活动'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['SGD', 'MYR', 'THB', 'IDR', 'PHP', 'VND', 'TWD', 'BRL'],
    userDistribution: { 
      '印尼': 25, '泰国': 20, '马来西亚': 15, '菲律宾': 15, '越南': 10,
      '台湾': 8, '新加坡': 5, '巴西': 2 
    }
  },
  {
    id: 'lazada',
    name: 'Lazada',
    logo: '/logos/lazada.svg',
    type: '综合',
    headquarters: '新加坡',
    mainMarkets: ['新加坡', '马来西亚', '泰国', '印尼', '菲律宾', '越南'],
    description: '阿里巴巴旗下的东南亚电商平台，提供B2B和B2C服务，在东南亚市场具有重要地位。',
    website: 'https://www.lazada.com',
    foundedYear: 2012,
    monthlyVisitors: '3亿+',
    sellerFees: {
      commission: '2-4%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '合法商品，符合平台政策',
      approvalTime: '1-2天'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '美妆护肤', '食品饮料', '运动户外', '母婴用品', '图书'],
    trafficInfo: {
      globalRanking: '#40',
      monthlyVisitors: '3亿+',
      activeUsers: '1.2亿+'
    },
    advantages: ['阿里巴巴支持', '本地化服务', '完善的物流网络', '技术先进', '用户信任'],
    disadvantages: ['竞争激烈', '利润空间小', '政策复杂', '物流挑战'],
    paymentMethods: ['信用卡', '借记卡', '数字钱包', '银行转账', '货到付款'],
    shippingOptions: ['Lazada物流', '本地配送', '国际物流', '自提点'],
    customerService: '多语言客服，在线支持，电话服务',
    marketingTools: ['Lazada Ads', 'Sponsored Products', '直播带货', '优惠券', '促销活动'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['SGD', 'MYR', 'THB', 'IDR', 'PHP', 'VND'],
    userDistribution: { 
      '印尼': 30, '泰国': 25, '马来西亚': 20, '菲律宾': 15, '越南': 8,
      '新加坡': 2 
    }
  },
  {
    id: 'tokopedia',
    name: 'Tokopedia',
    logo: '/logos/tokopedia.svg',
    type: '综合',
    headquarters: '印尼雅加达',
    mainMarkets: ['印尼'],
    description: '印尼最大的电商平台，提供B2B和B2C服务，在印尼市场占据主导地位。',
    website: 'https://www.tokopedia.com',
    foundedYear: 2009,
    monthlyVisitors: '2亿+',
    sellerFees: {
      commission: '2-5%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: false,
      minimumSales: '无',
      productRequirements: '合法商品，符合平台政策',
      approvalTime: '1-2天'
    },
    suitableCategories: ['电子产品', '服装鞋帽', '家居用品', '美妆护肤', '食品饮料', '运动户外', '母婴用品', '图书'],
    trafficInfo: {
      globalRanking: '#60',
      monthlyVisitors: '2亿+',
      activeUsers: '8000万+'
    },
    advantages: ['印尼市场领先', '本地化服务', '完善的支付系统', '用户信任', '生态系统完善'],
    disadvantages: ['市场范围有限', '竞争激烈', '物流挑战', '政策复杂'],
    paymentMethods: ['信用卡', '借记卡', '数字钱包', '银行转账', '货到付款'],
    shippingOptions: ['Tokopedia物流', '本地配送', '快递服务', '自提点'],
    customerService: '多语言客服，在线支持，电话服务',
    marketingTools: ['Tokopedia Ads', 'Sponsored Products', '直播带货', '优惠券', '促销活动'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['IDR'],
    userDistribution: { 
      '印尼': 100 
    }
  },
  {
    id: 'temu',
    name: 'Temu',
    logo: '/logos/temu.svg',
    type: 'B2C',
    headquarters: '美国波士顿',
    mainMarkets: ['美国', '加拿大', '英国', '德国', '法国', '意大利', '西班牙', '澳大利亚', '新西兰', '日本', '韩国'],
    description: '拼多多旗下的跨境电商平台，以超低价商品和社交电商模式在全球市场快速扩张。',
    website: 'https://www.temu.com',
    foundedYear: 2022,
    monthlyVisitors: '1.8亿+',
    sellerFees: {
      commission: '0.6%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '年销售额$10万+',
      productRequirements: '高质量产品，符合平台标准',
      approvalTime: '1-2周'
    },
    suitableCategories: ['服装鞋帽', '家居用品', '美妆护肤', '电子产品', '玩具游戏', '运动户外', '母婴用品', '图书文具'],
    trafficInfo: {
      globalRanking: '#25',
      monthlyVisitors: '1.8亿+',
      activeUsers: '5000万+'
    },
    advantages: ['超低价策略', '社交电商', '快速增长', '全球扩张', '年轻用户群体'],
    disadvantages: ['品质参差', '假货风险', '竞争激烈', '政策风险', '物流挑战'],
    paymentMethods: ['信用卡', '借记卡', 'PayPal', 'Apple Pay', 'Google Pay'],
    shippingOptions: ['Temu物流', '国际快递', '本地配送', '追踪服务'],
    customerService: '在线客服，电话支持，邮件服务',
    marketingTools: ['Temu广告', '社交营销', '优惠券', '促销活动', '直播带货'],
    analyticsTools: ['Seller Analytics', 'Performance Reports', 'Traffic Analysis', 'Sales Dashboard'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'KRW'],
    userDistribution: { 
      '美国': 45, '英国': 15, '德国': 12, '法国': 8, '加拿大': 6,
      '澳大利亚': 5, '意大利': 3, '西班牙': 3, '日本': 2, '韩国': 1 
    }
  },
  {
    id: 'tiktok-shop',
    name: 'TikTok Shop',
    logo: '/logos/tiktok .png',
    type: 'B2C',
    headquarters: '新加坡',
    mainMarkets: ['东南亚', '美国', '英国', '新加坡'],
    description: '字节跳动旗下的社交电商平台，通过短视频和直播带货模式，将内容创作与电商购物完美结合。东南亚市场表现强劲，印尼、泰国、越南为主要市场，美国市场体量约5000-7000万用户。',
    website: 'https://shop.tiktok.com',
    foundedYear: 2020,
    monthlyVisitors: '1.5亿+',
    sellerFees: {
      commission: '2-8%',
      listingFee: '无',
      monthlyFee: '无'
    },
    entryRequirements: {
      businessLicense: true,
      minimumSales: '无',
      productRequirements: '符合平台政策，高质量商品',
      approvalTime: '3-7天'
    },
    suitableCategories: ['服装配饰', '美妆护肤', '家居用品', '数码配件', '食品饮料', '运动户外', '母婴用品', '宠物用品'],
    trafficInfo: {
      globalRanking: '#15',
      monthlyVisitors: '1.5亿+',
      activeUsers: '1.5亿+'
    },
    advantages: ['巨大流量池', '内容驱动转化', '年轻用户群体', '直播带货优势', '社交电商模式', '快速市场扩张'],
    disadvantages: ['政策变化频繁', '内容创作门槛高', '平台规则严格', '竞争激烈', '物流体系待完善'],
    paymentMethods: ['信用卡', '借记卡', 'PayPal', 'Apple Pay', 'Google Pay', '本地支付方式'],
    shippingOptions: ['TikTok物流', '第三方物流', '本地配送', '国际快递'],
    customerService: '24/7在线客服，多语言支持，卖家培训中心',
    marketingTools: ['直播带货', '短视频推广', '达人合作', 'TikTok Ads', '优惠券系统', '促销活动'],
    analyticsTools: ['TikTok Analytics', '销售数据', '流量分析', '用户行为追踪', 'ROI分析'],
    mobileApp: true,
    apiSupport: true,
    multiLanguage: true,
    currencySupport: ['USD', 'GBP', 'EUR', 'AUD', 'SGD', 'MYR', 'THB', 'IDR', 'PHP'],
    userDistribution: { 
      '印尼': 20.5, '泰国': 18.3, '越南': 17.5, '马来西亚': 12.9, '美国': 11.8, '菲律宾': 11.6, '英国': 6.2, '新加坡': 1.0 
    }
  }
]; 