export interface SearchEngine {
  id: string;
  name: string;
  logo: string;
  type: '综合搜索' | '垂直搜索' | '元搜索' | '专业搜索';
  headquarters: string;
  mainMarkets: string[];
  description: string;
  website: string;
  foundedYear: number;
  monthlyVisitors: string;
  marketShare: {
    global: string;
    mobile: string;
    desktop: string;
  };
  features: {
    webSearch: boolean;
    imageSearch: boolean;
    videoSearch: boolean;
    newsSearch: boolean;
    shoppingSearch: boolean;
    mapsSearch: boolean;
    voiceSearch: boolean;
    aiFeatures: boolean;
  };
  revenueModel: string[];
  advertisingPlatform: string[];
  userDemographics: {
    ageGroups: string[];
    genderRatio: string;
    incomeLevel: string;
    educationLevel: string;
  };
  trafficInfo: {
    globalRanking: string;
    monthlyVisitors: string;
    activeUsers: string;
    searchQueries: string;
  };
  advantages: string[];
  disadvantages: string[];
  supportedLanguages: string[];
  mobileApp: boolean;
  apiSupport: boolean;
  privacyFeatures: string[];
  monetizationMethods: string[];
  competitors: string[];
  recentDevelopments: string[];
  marketPosition: string;
  technologyStack: string[];
  partnerships: string[];
  regulatoryCompliance: string[];
  userDistribution: Record<string, number>; // 新增：用户市场分布
}

export const searchEngines: SearchEngine[] = [
  {
    id: 'google',
    name: 'Google',
    logo: '/logos/google.svg',
    type: '综合搜索',
    headquarters: '美国加利福尼亚州',
    mainMarkets: ['全球', '美国', '欧洲', '亚洲', '南美', '非洲'],
    description: '全球最大的搜索引擎，提供全面的搜索服务，包括网页、图片、视频、新闻、购物等多种搜索功能。',
    website: 'https://www.google.com',
    foundedYear: 1998,
    monthlyVisitors: '90亿+',
    marketShare: {
      global: '91.9%',
      mobile: '94.8%',
      desktop: '88.2%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: true,
      mapsSearch: true,
      voiceSearch: true,
      aiFeatures: true
    },
    revenueModel: ['广告收入', '云服务', '硬件销售', '企业服务'],
    advertisingPlatform: ['Google Ads', 'Google Shopping', 'YouTube Ads', 'Display Network'],
    userDemographics: {
      ageGroups: ['18-24岁', '25-34岁', '35-44岁', '45-54岁', '55岁以上'],
      genderRatio: '男性52%, 女性48%',
      incomeLevel: '中高收入为主',
      educationLevel: '高等教育为主'
    },
    trafficInfo: {
      globalRanking: '#1',
      monthlyVisitors: '90亿+',
      activeUsers: '40亿+',
      searchQueries: '每天50亿+'
    },
    advantages: ['全球最大市场份额', '技术领先', '生态系统完善', 'AI技术先进', '用户体验优秀'],
    disadvantages: ['隐私争议', '反垄断调查', '广告依赖度高', '算法不透明'],
    supportedLanguages: ['英语', '中文', '西班牙语', '阿拉伯语', '印地语', '葡萄牙语', '俄语', '日语', '韩语', '法语', '德语', '意大利语'],
    mobileApp: true,
    apiSupport: true,
    privacyFeatures: ['隐私沙盒', '无痕浏览', '数据加密', '用户控制'],
    monetizationMethods: ['搜索广告', '展示广告', '购物广告', '视频广告', '应用广告'],
    competitors: ['Bing', 'Yahoo', 'Baidu', 'Yandex', 'DuckDuckGo'],
    recentDevelopments: ['AI搜索升级', '多模态搜索', '隐私保护增强', '本地化服务扩展'],
    marketPosition: '全球主导地位',
    technologyStack: ['AI/ML', '云计算', '大数据', '自然语言处理', '计算机视觉'],
    partnerships: ['Android生态', 'Chrome浏览器', 'YouTube', 'Gmail', 'Google Maps'],
    regulatoryCompliance: ['GDPR', 'CCPA', 'LGPD', 'PDPA', '数据保护法规'],
    userDistribution: { 
      '美国': 18, '印度': 12, '巴西': 6, '印尼': 5, '日本': 4,
      '德国': 4, '英国': 4, '法国': 3, '意大利': 3, '西班牙': 3,
      '加拿大': 3, '澳大利亚': 3, '墨西哥': 3, '阿根廷': 2, '哥伦比亚': 2,
      '智利': 2, '秘鲁': 2, '俄罗斯': 2, '土耳其': 2, '波兰': 2,
      '荷兰': 2, '比利时': 2, '瑞典': 2, '挪威': 1, '丹麦': 1,
      '芬兰': 1, '瑞士': 1, '奥地利': 1, '其他': 15 
    }
  },
  {
    id: 'bing',
    name: 'Bing',
    logo: '/logos/bing.svg',
    type: '综合搜索',
    headquarters: '美国华盛顿州',
    mainMarkets: ['美国', '欧洲', '加拿大', '澳大利亚', '英国'],
    description: '微软旗下的搜索引擎，提供网页、图片、视频、新闻等多种搜索服务，与Windows系统深度集成。',
    website: 'https://www.bing.com',
    foundedYear: 2009,
    monthlyVisitors: '10亿+',
    marketShare: {
      global: '3.2%',
      mobile: '2.8%',
      desktop: '4.1%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: true,
      mapsSearch: true,
      voiceSearch: true,
      aiFeatures: true
    },
    revenueModel: ['广告收入', '企业服务', '云服务'],
    advertisingPlatform: ['Microsoft Advertising', 'Bing Ads', 'LinkedIn Ads'],
    userDemographics: {
      ageGroups: ['25-34岁', '35-44岁', '45-54岁', '55岁以上'],
      genderRatio: '男性48%, 女性52%',
      incomeLevel: '中等收入为主',
      educationLevel: '中等教育以上'
    },
    trafficInfo: {
      globalRanking: '#2',
      monthlyVisitors: '10亿+',
      activeUsers: '2亿+',
      searchQueries: '每天10亿+'
    },
    advantages: ['Windows集成', '企业用户基础', 'AI技术先进', '隐私保护较好', '视频搜索优秀'],
    disadvantages: ['市场份额较小', '品牌认知度低', '移动端表现一般', '生态系统有限'],
    supportedLanguages: ['英语', '西班牙语', '法语', '德语', '意大利语', '葡萄牙语', '中文', '日语'],
    mobileApp: true,
    apiSupport: true,
    privacyFeatures: ['隐私保护', '数据最小化', '用户控制', '透明度'],
    monetizationMethods: ['搜索广告', '展示广告', '购物广告', '企业服务'],
    competitors: ['Google', 'Yahoo', 'DuckDuckGo'],
    recentDevelopments: ['AI搜索升级', 'ChatGPT集成', '企业搜索增强', '隐私功能改进'],
    marketPosition: '全球第二',
    technologyStack: ['AI/ML', 'Azure云', '自然语言处理', '计算机视觉'],
    partnerships: ['Windows', 'Office', 'LinkedIn', 'Xbox'],
    regulatoryCompliance: ['GDPR', 'CCPA', '数据保护法规'],
    userDistribution: { 
      '美国': 25, '英国': 15, '德国': 12, '法国': 10, '加拿大': 8,
      '澳大利亚': 6, '意大利': 5, '西班牙': 5, '荷兰': 3, '比利时': 3,
      '瑞典': 2, '挪威': 2, '丹麦': 2, '芬兰': 2, '瑞士': 2,
      '奥地利': 2, '波兰': 2, '其他': 5 
    }
  },
  {
    id: 'yandex',
    name: 'Yandex',
    logo: '/logos/yandex.svg',
    type: '综合搜索',
    headquarters: '俄罗斯莫斯科',
    mainMarkets: ['俄罗斯', '独联体国家', '土耳其', '以色列'],
    description: '俄罗斯最大的搜索引擎，提供网页、图片、视频、新闻、地图等多种搜索服务，在俄语市场占据主导地位。',
    website: 'https://www.yandex.com',
    foundedYear: 1997,
    monthlyVisitors: '3亿+',
    marketShare: {
      global: '0.8%',
      mobile: '1.2%',
      desktop: '0.6%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: true,
      mapsSearch: true,
      voiceSearch: true,
      aiFeatures: true
    },
    revenueModel: ['广告收入', '云服务', '电商服务', '企业服务'],
    advertisingPlatform: ['Yandex.Direct', 'Yandex.Market', 'Yandex.Video'],
    userDemographics: {
      ageGroups: ['18-24岁', '25-34岁', '35-44岁', '45-54岁'],
      genderRatio: '男性48%, 女性52%',
      incomeLevel: '中等收入为主',
      educationLevel: '中等教育以上'
    },
    trafficInfo: {
      globalRanking: '#8',
      monthlyVisitors: '3亿+',
      activeUsers: '1.5亿+',
      searchQueries: '每天5亿+'
    },
    advantages: ['俄语市场领先', '本地化服务', '技术先进', '生态系统完善', '隐私保护'],
    disadvantages: ['市场范围有限', '国际化程度低', '政治风险', '技术依赖'],
    supportedLanguages: ['俄语', '英语', '土耳其语', '乌克兰语', '白俄罗斯语'],
    mobileApp: true,
    apiSupport: true,
    privacyFeatures: ['隐私保护', '数据本地化', '用户控制'],
    monetizationMethods: ['搜索广告', '电商服务', '云服务', '企业服务'],
    competitors: ['Google', 'Mail.ru', 'Rambler'],
    recentDevelopments: ['AI技术升级', '自动驾驶', '云服务扩展', '电商整合'],
    marketPosition: '俄罗斯主导',
    technologyStack: ['AI/ML', '云计算', '大数据', '自然语言处理'],
    partnerships: ['Yandex.Taxi', 'Yandex.Market', 'Yandex.Cloud'],
    regulatoryCompliance: ['俄罗斯数据保护法', 'GDPR', '本地法规'],
    userDistribution: { 
      '俄罗斯': 70, '乌克兰': 8, '白俄罗斯': 5, '哈萨克斯坦': 4,
      '乌兹别克斯坦': 3, '吉尔吉斯斯坦': 2, '塔吉克斯坦': 2,
      '土库曼斯坦': 2, '阿塞拜疆': 2, '亚美尼亚': 1, '格鲁吉亚': 1 
    }
  },
  {
    id: 'yahoo',
    name: 'Yahoo',
    logo: '/logos/yahoo.svg',
    type: '综合搜索',
    headquarters: '美国加利福尼亚州',
    mainMarkets: ['美国', '日本', '台湾', '香港', '东南亚'],
    description: '老牌互联网公司，提供搜索、邮箱、新闻、财经等服务，在日本市场表现突出。',
    website: 'https://www.yahoo.com',
    foundedYear: 1994,
    monthlyVisitors: '5亿+',
    marketShare: {
      global: '1.5%',
      mobile: '1.8%',
      desktop: '1.2%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: true,
      mapsSearch: false,
      voiceSearch: false,
      aiFeatures: false
    },
    revenueModel: ['广告收入', '订阅服务', '企业服务'],
    advertisingPlatform: ['Yahoo Advertising', 'Yahoo Gemini', 'Yahoo Mail Ads'],
    userDemographics: {
      ageGroups: ['35-44岁', '45-54岁', '55岁以上'],
      genderRatio: '男性45%, 女性55%',
      incomeLevel: '中等收入为主',
      educationLevel: '中等教育以上'
    },
    trafficInfo: {
      globalRanking: '#6',
      monthlyVisitors: '5亿+',
      activeUsers: '2亿+',
      searchQueries: '每天2亿+'
    },
    advantages: ['品牌认知度高', '邮箱服务', '新闻服务', '财经服务', '日本市场优势'],
    disadvantages: ['技术落后', '市场份额下降', '创新不足', '移动端表现差'],
    supportedLanguages: ['英语', '日语', '中文', '西班牙语', '法语'],
    mobileApp: true,
    apiSupport: false,
    privacyFeatures: ['基本隐私保护', '用户控制'],
    monetizationMethods: ['搜索广告', '邮箱广告', '新闻广告', '订阅服务'],
    competitors: ['Google', 'Bing', 'Gmail', 'Outlook'],
    recentDevelopments: ['Verizon收购', '业务重组', '服务整合', '用户体验改进'],
    marketPosition: '传统品牌',
    technologyStack: ['传统技术', '云计算', '基础AI'],
    partnerships: ['Verizon', 'AOL', 'Yahoo Japan'],
    regulatoryCompliance: ['GDPR', 'CCPA', '数据保护法规'],
    userDistribution: { 
      '美国': 30, '日本': 25, '台湾': 15, '香港': 10, '英国': 5,
      '加拿大': 5, '澳大利亚': 3, '德国': 2, '法国': 2, '意大利': 2,
      '西班牙': 1 
    }
  },
  {
    id: 'duckduckgo',
    name: 'DuckDuckGo',
    logo: '/logos/duckduckgo.svg',
    type: '综合搜索',
    headquarters: '美国宾夕法尼亚州',
    mainMarkets: ['美国', '欧洲', '加拿大', '澳大利亚'],
    description: '注重隐私保护的搜索引擎，不跟踪用户行为，提供无广告的搜索体验。',
    website: 'https://www.duckduckgo.com',
    foundedYear: 2008,
    monthlyVisitors: '1亿+',
    marketShare: {
      global: '0.6%',
      mobile: '0.8%',
      desktop: '0.5%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: false,
      mapsSearch: false,
      voiceSearch: false,
      aiFeatures: false
    },
    revenueModel: ['广告收入', '企业服务'],
    advertisingPlatform: ['DuckDuckGo Ads'],
    userDemographics: {
      ageGroups: ['18-24岁', '25-34岁', '35-44岁'],
      genderRatio: '男性60%, 女性40%',
      incomeLevel: '中高收入为主',
      educationLevel: '高等教育为主'
    },
    trafficInfo: {
      globalRanking: '#15',
      monthlyVisitors: '1亿+',
      activeUsers: '5000万+',
      searchQueries: '每天1亿+'
    },
    advantages: ['隐私保护优秀', '无跟踪', '无广告', '开源透明', '用户信任'],
    disadvantages: ['功能有限', '搜索结果一般', '市场份额小', '收入模式单一'],
    supportedLanguages: ['英语', '德语', '法语', '西班牙语', '意大利语'],
    mobileApp: true,
    apiSupport: true,
    privacyFeatures: ['无跟踪', '无个性化', '数据加密', '隐私保护'],
    monetizationMethods: ['非个性化广告', '企业服务', '捐赠'],
    competitors: ['Google', 'Bing', 'Brave Search'],
    recentDevelopments: ['隐私保护增强', '浏览器扩展', '移动应用改进', '企业服务扩展'],
    marketPosition: '隐私保护领先',
    technologyStack: ['隐私技术', '开源软件', '分布式系统'],
    partnerships: ['Firefox', 'Brave', '隐私保护组织'],
    regulatoryCompliance: ['GDPR', 'CCPA', '隐私法规'],
    userDistribution: { 
      '美国': 45, '德国': 15, '英国': 12, '加拿大': 8, '法国': 6,
      '澳大利亚': 5, '荷兰': 3, '比利时': 2, '瑞典': 2, '挪威': 2,
      '丹麦': 2, '芬兰': 2, '瑞士': 2, '奥地利': 2, '其他': 4 
    }
  },
  {
    id: 'naver',
    name: 'Naver',
    logo: '/logos/naver.svg',
    type: '综合搜索',
    headquarters: '韩国首尔',
    mainMarkets: ['韩国', '日本', '东南亚'],
    description: '韩国最大的搜索引擎，提供搜索、新闻、购物、地图等服务，在韩国市场占据主导地位。',
    website: 'https://www.naver.com',
    foundedYear: 1999,
    monthlyVisitors: '2亿+',
    marketShare: {
      global: '0.4%',
      mobile: '0.6%',
      desktop: '0.3%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: true,
      mapsSearch: true,
      voiceSearch: true,
      aiFeatures: true
    },
    revenueModel: ['广告收入', '电商服务', '云服务', '企业服务'],
    advertisingPlatform: ['Naver Ads', 'Naver Shopping', 'Naver Video'],
    userDemographics: {
      ageGroups: ['18-24岁', '25-34岁', '35-44岁', '45-54岁'],
      genderRatio: '男性48%, 女性52%',
      incomeLevel: '中等收入为主',
      educationLevel: '中等教育以上'
    },
    trafficInfo: {
      globalRanking: '#12',
      monthlyVisitors: '2亿+',
      activeUsers: '1亿+',
      searchQueries: '每天3亿+'
    },
    advantages: ['韩国市场领先', '本地化服务', '技术先进', '生态系统完善', '移动端优势'],
    disadvantages: ['市场范围有限', '国际化程度低', '语言障碍', '竞争激烈'],
    supportedLanguages: ['韩语', '日语', '英语', '中文'],
    mobileApp: true,
    apiSupport: true,
    privacyFeatures: ['隐私保护', '数据加密', '用户控制'],
    monetizationMethods: ['搜索广告', '电商服务', '云服务', '企业服务'],
    competitors: ['Google', 'Daum', 'Kakao'],
    recentDevelopments: ['AI技术升级', '电商整合', '云服务扩展', '国际化尝试'],
    marketPosition: '韩国主导',
    technologyStack: ['AI/ML', '云计算', '大数据', '自然语言处理'],
    partnerships: ['Line', 'SoftBank', '东南亚合作伙伴'],
    regulatoryCompliance: ['韩国个人信息保护法', 'GDPR', '数据保护法规'],
    userDistribution: { 
      '韩国': 85, '日本': 8, '台湾': 3, '香港': 2, '新加坡': 2 
    }
  },
  {
    id: 'seznam',
    name: 'Seznam',
    logo: '/logos/seznam.svg',
    type: '综合搜索',
    headquarters: '捷克布拉格',
    mainMarkets: ['捷克', '斯洛伐克'],
    description: '捷克最大的搜索引擎，提供搜索、新闻、地图等服务，在捷克市场占据主导地位。',
    website: 'https://www.seznam.cz',
    foundedYear: 1996,
    monthlyVisitors: '5000万+',
    marketShare: {
      global: '0.1%',
      mobile: '0.2%',
      desktop: '0.1%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: true,
      mapsSearch: true,
      voiceSearch: false,
      aiFeatures: false
    },
    revenueModel: ['广告收入', '企业服务'],
    advertisingPlatform: ['Seznam Ads', 'Seznam Shopping'],
    userDemographics: {
      ageGroups: ['25-34岁', '35-44岁', '45-54岁', '55岁以上'],
      genderRatio: '男性50%, 女性50%',
      incomeLevel: '中等收入为主',
      educationLevel: '中等教育以上'
    },
    trafficInfo: {
      globalRanking: '#50',
      monthlyVisitors: '5000万+',
      activeUsers: '2000万+',
      searchQueries: '每天5000万+'
    },
    advantages: ['捷克市场领先', '本地化服务', '新闻服务', '地图服务', '用户信任'],
    disadvantages: ['市场范围极小', '技术相对落后', '国际化程度低', '收入有限'],
    supportedLanguages: ['捷克语', '斯洛伐克语', '英语'],
    mobileApp: true,
    apiSupport: false,
    privacyFeatures: ['基本隐私保护', '用户控制'],
    monetizationMethods: ['搜索广告', '展示广告', '企业服务'],
    competitors: ['Google', 'Bing'],
    recentDevelopments: ['技术升级', '移动端改进', '本地服务增强'],
    marketPosition: '捷克主导',
    technologyStack: ['传统技术', '基础AI', '本地化技术'],
    partnerships: ['本地媒体', '企业客户'],
    regulatoryCompliance: ['捷克数据保护法', 'GDPR'],
    userDistribution: { 
      '捷克': 80, '斯洛伐克': 20 
    }
  },
  {
    id: 'qwant',
    name: 'Qwant',
    logo: '/logos/qwant.svg',
    type: '综合搜索',
    headquarters: '法国巴黎',
    mainMarkets: ['法国', '德国', '意大利', '欧洲'],
    description: '欧洲隐私保护搜索引擎，注重用户隐私，提供无跟踪的搜索服务。',
    website: 'https://www.qwant.com',
    foundedYear: 2013,
    monthlyVisitors: '2000万+',
    marketShare: {
      global: '0.1%',
      mobile: '0.1%',
      desktop: '0.1%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: false,
      mapsSearch: false,
      voiceSearch: false,
      aiFeatures: false
    },
    revenueModel: ['广告收入', '企业服务'],
    advertisingPlatform: ['Qwant Ads'],
    userDemographics: {
      ageGroups: ['25-34岁', '35-44岁', '45-54岁'],
      genderRatio: '男性55%, 女性45%',
      incomeLevel: '中高收入为主',
      educationLevel: '高等教育为主'
    },
    trafficInfo: {
      globalRanking: '#100',
      monthlyVisitors: '2000万+',
      activeUsers: '1000万+',
      searchQueries: '每天2000万+'
    },
    advantages: ['隐私保护', '欧洲本土', '无跟踪', '用户信任', '本地化'],
    disadvantages: ['市场份额小', '功能有限', '技术相对落后', '收入模式单一'],
    supportedLanguages: ['法语', '德语', '意大利语', '英语', '西班牙语'],
    mobileApp: true,
    apiSupport: true,
    privacyFeatures: ['无跟踪', '数据本地化', '隐私保护', '用户控制'],
    monetizationMethods: ['非个性化广告', '企业服务'],
    competitors: ['Google', 'Bing', 'DuckDuckGo'],
    recentDevelopments: ['隐私保护增强', '欧洲市场扩展', '技术升级'],
    marketPosition: '欧洲隐私保护',
    technologyStack: ['隐私技术', '欧洲技术', '本地化技术'],
    partnerships: ['欧洲企业', '隐私保护组织'],
    regulatoryCompliance: ['GDPR', '欧洲数据保护法规'],
    userDistribution: { 
      '法国': 50, '德国': 25, '意大利': 15, '比利时': 5, '瑞士': 5 
    }
  },
  {
    id: 'brave-search',
    name: 'Brave Search',
    logo: '/logos/brave-search.svg',
    type: '综合搜索',
    headquarters: '美国加利福尼亚州',
    mainMarkets: ['美国', '欧洲', '加拿大', '澳大利亚'],
    description: 'Brave浏览器旗下的搜索引擎，注重隐私保护，提供无跟踪的搜索服务。',
    website: 'https://search.brave.com',
    foundedYear: 2021,
    monthlyVisitors: '1000万+',
    marketShare: {
      global: '0.1%',
      mobile: '0.1%',
      desktop: '0.1%'
    },
    features: {
      webSearch: true,
      imageSearch: true,
      videoSearch: true,
      newsSearch: true,
      shoppingSearch: false,
      mapsSearch: false,
      voiceSearch: false,
      aiFeatures: false
    },
    revenueModel: ['广告收入', '企业服务'],
    advertisingPlatform: ['Brave Ads'],
    userDemographics: {
      ageGroups: ['18-24岁', '25-34岁', '35-44岁'],
      genderRatio: '男性65%, 女性35%',
      incomeLevel: '中高收入为主',
      educationLevel: '高等教育为主'
    },
    trafficInfo: {
      globalRanking: '#200',
      monthlyVisitors: '1000万+',
      activeUsers: '500万+',
      searchQueries: '每天1000万+'
    },
    advantages: ['隐私保护', '浏览器集成', '无跟踪', '用户信任', '技术先进'],
    disadvantages: ['市场份额极小', '功能有限', '品牌认知度低', '收入有限'],
    supportedLanguages: ['英语', '法语', '德语', '西班牙语', '意大利语'],
    mobileApp: false,
    apiSupport: true,
    privacyFeatures: ['无跟踪', '隐私保护', '数据加密', '用户控制'],
    monetizationMethods: ['隐私保护广告', '企业服务'],
    competitors: ['Google', 'DuckDuckGo', 'Qwant'],
    recentDevelopments: ['隐私保护增强', '浏览器集成改进', '技术升级'],
    marketPosition: '新兴隐私保护',
    technologyStack: ['隐私技术', '区块链技术', '现代Web技术'],
    partnerships: ['Brave浏览器', '隐私保护组织'],
    regulatoryCompliance: ['GDPR', 'CCPA', '隐私法规'],
    userDistribution: { 
      '美国': 40, '德国': 15, '英国': 12, '加拿大': 10, '法国': 8,
      '澳大利亚': 5, '荷兰': 3, '比利时': 3, '瑞典': 2, '挪威': 2 
    }
  }
]; 