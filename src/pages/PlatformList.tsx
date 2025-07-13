import { useState } from 'react'
import { platforms, Platform } from '../data/platforms'
import PlatformCard from '../components/PlatformCard'
import PlatformDetail from '../components/PlatformDetail'

const PlatformList = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  
  // 筛选状态
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState<string[]>([])
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([])

  // 排序状态
  const [sortBy, setSortBy] = useState<string>('default')

  // 下拉展开状态
  const [expandedFilters, setExpandedFilters] = useState<{[key: string]: boolean}>({
    businessType: false,
    ageGroup: false,
    region: false,
    contentType: false
  })

  // 精简后的选项
  const businessTypeOptions = ['B2B', 'B2C']
  const ageGroupOptions = ['13-17岁', '18-24岁', '25-34岁', '35-44岁', '45岁以上']
  const regionOptions = ['北美', '欧洲', '亚太', '拉美', '中东', '非洲', '澳洲']
  const contentTypeOptions = ['图文', '视频', '直播', '音频', '电商', '社交', '专业内容']

  // 年龄映射表：筛选选项 -> 平台数据格式
  const ageMapping: { [key: string]: string[] } = {
    '13-17岁': ['13-17'],
    '18-24岁': ['18-24', '16-24'],
    '25-34岁': ['25-34'],
    '35-44岁': ['35-44'],
    '45岁以上': ['45-54', '55-65', '45-49']
  }

  // 内容类型映射表：筛选选项 -> 平台数据格式
  const contentTypeMapping: { [key: string]: string[] } = {
    '图文': ['图片', '文字', '图文', '专业文章', '行业洞察', '公司动态', '招聘信息', '创意灵感', '生活方式', '讨论', '分享', '问答', '投票', '博客', '创意内容', '亚文化', '社区互动', '真实性内容', '限时分享', '朋友互动'],
    '视频': ['视频', '短视频', '长视频', 'Reels', '教育内容', 'AR滤镜', '故事', '即时通讯', '贴纸', '支付', '生活服务', '游戏', '音乐', '挑战', '频道内容', '文件分享', '机器人服务'],
    '直播': ['直播'],
    '音频': ['音频', '音乐'],
    '电商': ['电商', '购物', '社交电商', '支付', '商业工具', '客户管理'],
    '社交': ['社交', '即时通讯', '社区讨论', '朋友互动', '贴纸文化'],
    '专业内容': ['专业文章', '行业洞察', '公司动态', '招聘信息', '问答', '知识分享', '专业内容', '行业洞察']
  }

  // 地区映射表：筛选选项 -> 平台数据格式（修复匹配问题）
  const regionMapping: { [key: string]: string[] } = {
    '北美': ['北美', '美国', '加拿大', '美洲'],
    '欧洲': ['欧洲', '英国', '德国', '法国', '意大利', '西班牙', '荷兰', '比利时', '瑞典', '挪威', '丹麦', '芬兰', '瑞士', '奥地利', '波兰', '俄罗斯', '土耳其'],
    '亚太': ['亚太', '亚洲', '日本', '韩国', '台湾', '东南亚', '南亚', '印尼', '马来西亚', '新加坡', '泰国', '菲律宾', '越南', '柬埔寨', '老挝', '缅甸', '文莱', '印度', '孟加拉国', '尼泊尔', '斯里兰卡'],
    '拉美': ['拉美', '南美', '巴西', '墨西哥', '阿根廷', '哥伦比亚', '智利', '秘鲁', '委内瑞拉', '厄瓜多尔', '玻利维亚', '巴拉圭', '乌拉圭'],
    '中东': ['中东', '伊朗', '埃及', '摩洛哥', '阿尔及利亚'],
    '非洲': ['非洲', '南非', '尼日利亚', '肯尼亚'],
    '澳洲': ['澳洲', '大洋洲', '澳大利亚', '新西兰']
  }

  // 筛选逻辑
  const filteredPlatforms = platforms.filter(platform => {
    const matchesSearch = platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         platform.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         platform.features.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesBusinessType = selectedBusinessTypes.length === 0 || 
                               selectedBusinessTypes.some(type => platform.businessType.includes(type))
    
    // 年龄筛选：使用映射表进行匹配
    const matchesAgeGroup = selectedAgeGroups.length === 0 || 
      selectedAgeGroups.some(selectedAge => {
        const mappedAges = ageMapping[selectedAge] || []
        return mappedAges.some(mappedAge => platform.ageGroups.includes(mappedAge))
      })
    
    // 地区筛选：使用映射表进行匹配
    const matchesRegion = selectedRegions.length === 0 || 
      selectedRegions.some(selectedRegion => {
        const mappedRegions = regionMapping[selectedRegion] || []
        return mappedRegions.some(mappedRegion => platform.regions.includes(mappedRegion))
      })
    
    // 内容类型筛选：使用映射表进行模糊匹配
    const matchesContentType = selectedContentTypes.length === 0 || 
      selectedContentTypes.some(selectedContent => {
        const mappedContents = contentTypeMapping[selectedContent] || []
        return mappedContents.some(mappedContent => 
          platform.contentTypes.some(platformContent => 
            platformContent.includes(mappedContent) || mappedContent.includes(platformContent)
          )
        )
      })

    return matchesSearch && matchesBusinessType && matchesAgeGroup && matchesRegion && matchesContentType
  })

  // 解析用户规模数字
  const parseUserScale = (userScale: string): number => {
    // 匹配 "约X亿月活跃用户" 或 "约X亿注册用户" 等格式
    const match = userScale.match(/约?(\d+(?:\.\d+)?)\s*(亿|万|千|百)?/)
    if (!match) return 0
    
    const num = parseFloat(match[1])
    const unit = match[2]
    
    let result = 0
    switch (unit) {
      case '亿':
        result = num * 100000000
        break
      case '万':
        result = num * 10000
        break
      case '千':
        result = num * 1000
        break
      case '百':
        result = num * 100
        break
      default:
        // 如果没有单位，假设是亿
        result = num * 100000000
        break
    }
    
    return result
  }

  // 排序函数
  const sortPlatforms = (platforms: Platform[]) => {
    switch (sortBy) {
      case 'userScaleDesc':
        return [...platforms].sort((a, b) => {
          const aNum = parseUserScale(a.userScale)
          const bNum = parseUserScale(b.userScale)
          return bNum - aNum
        })
      case 'userScaleAsc':
        return [...platforms].sort((a, b) => {
          const aNum = parseUserScale(a.userScale)
          const bNum = parseUserScale(b.userScale)
          return aNum - bNum
        })
      default:
        return platforms
    }
  }

  // 应用排序
  const sortedAndFilteredPlatforms = sortPlatforms(filteredPlatforms)

  // 切换选择状态
  const toggleSelection = (array: string[], setArray: (arr: string[]) => void, item: string) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item))
    } else {
      setArray([...array, item])
    }
  }

  // 切换下拉展开状态
  const toggleFilterExpansion = (filterKey: string) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }))
  }

  // 清除所有筛选
  const clearAllFilters = () => {
    setSelectedBusinessTypes([])
    setSelectedAgeGroups([])
    setSelectedRegions([])
    setSelectedContentTypes([])
    // 收缩所有筛选标签
    setExpandedFilters({
      businessType: false,
      ageGroup: false,
      region: false,
      contentType: false
    })
  }

  // 获取已选择的筛选项数量
  const getSelectedCount = (array: string[]) => array.length

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-1 lg:px-2 space-y-8">
      {/* 页面标题 */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🌍</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            全球社交媒体平台指南
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          了解全球主流社交媒体平台的详细信息，包括用户属性、市场覆盖、营销特点等，
          帮助您为外贸业务选择合适的社交媒体营销平台。
        </p>
      </div>

      {/* 搜索 */}
      <div className="flex justify-center">
        <div className="relative max-w-lg w-full">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-1 shadow-lg border border-blue-100 search-focus">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索平台、功能或应用场景..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">🔍</span>
                </div>
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 多标签筛选器 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100 p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">🔍</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">智能筛选</h2>
          </div>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 font-medium bg-white rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
          >
            清除所有筛选
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 业务类型筛选 */}
          <div className="bg-white rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200 p-3 filter-card">
            <button
              onClick={() => toggleFilterExpansion('businessType')}
              className="w-full flex items-center justify-between text-left group"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">业务类型</h3>
                {getSelectedCount(selectedBusinessTypes) > 0 && (
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                    已选择 {getSelectedCount(selectedBusinessTypes)} 项
                  </span>
                )}
              </div>
              <span className={`transform transition-transform duration-300 text-blue-500 group-hover:text-blue-700 ${expandedFilters.businessType ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expandedFilters.businessType && (
              <div className="mt-3 space-y-2 pt-3 border-t border-blue-100 animate-fadeIn">
                {businessTypeOptions.map(type => (
                  <label key={type} className="flex items-center hover:bg-blue-50 rounded-lg p-2 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBusinessTypes.includes(type)}
                      onChange={() => toggleSelection(selectedBusinessTypes, setSelectedBusinessTypes, type)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">{type}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* 年龄段筛选 */}
          <div className="bg-white rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all duration-200 p-3 filter-card">
            <button
              onClick={() => toggleFilterExpansion('ageGroup')}
              className="w-full flex items-center justify-between text-left group"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">目标年龄段</h3>
                {getSelectedCount(selectedAgeGroups) > 0 && (
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                    已选择 {getSelectedCount(selectedAgeGroups)} 项
                  </span>
                )}
              </div>
              <span className={`transform transition-transform duration-300 text-green-500 group-hover:text-green-700 ${expandedFilters.ageGroup ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expandedFilters.ageGroup && (
              <div className="mt-3 space-y-2 pt-3 border-t border-green-100 animate-fadeIn">
                {ageGroupOptions.map(age => (
                  <label key={age} className="flex items-center hover:bg-green-50 rounded-lg p-2 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedAgeGroups.includes(age)}
                      onChange={() => toggleSelection(selectedAgeGroups, setSelectedAgeGroups, age)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">{age}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* 地区筛选 */}
          <div className="bg-white rounded-xl border border-purple-200 shadow-sm hover:shadow-md transition-all duration-200 p-3 filter-card">
            <button
              onClick={() => toggleFilterExpansion('region')}
              className="w-full flex items-center justify-between text-left group"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">主要地区</h3>
                {getSelectedCount(selectedRegions) > 0 && (
                  <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                    已选择 {getSelectedCount(selectedRegions)} 项
                  </span>
                )}
              </div>
              <span className={`transform transition-transform duration-300 text-purple-500 group-hover:text-purple-700 ${expandedFilters.region ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expandedFilters.region && (
              <div className="mt-3 space-y-2 pt-3 border-t border-purple-100 animate-fadeIn">
                {regionOptions.map(region => (
                  <label key={region} className="flex items-center hover:bg-purple-50 rounded-lg p-2 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => toggleSelection(selectedRegions, setSelectedRegions, region)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">{region}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* 内容类型筛选 */}
          <div className="bg-white rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-all duration-200 p-3 filter-card">
            <button
              onClick={() => toggleFilterExpansion('contentType')}
              className="w-full flex items-center justify-between text-left group"
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">内容类型</h3>
                {getSelectedCount(selectedContentTypes) > 0 && (
                  <span className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full">
                    已选择 {getSelectedCount(selectedContentTypes)} 项
                  </span>
                )}
              </div>
              <span className={`transform transition-transform duration-300 text-orange-500 group-hover:text-orange-700 ${expandedFilters.contentType ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {expandedFilters.contentType && (
              <div className="mt-3 space-y-2 pt-3 border-t border-orange-100 animate-fadeIn">
                {contentTypeOptions.map(content => (
                  <label key={content} className="flex items-center hover:bg-orange-50 rounded-lg p-2 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedContentTypes.includes(content)}
                      onChange={() => toggleSelection(selectedContentTypes, setSelectedContentTypes, content)}
                      className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">{content}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 筛选结果统计 */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              找到 <span className="font-semibold text-blue-600">{filteredPlatforms.length}</span> 个平台
            </span>
            {(selectedBusinessTypes.length > 0 || selectedAgeGroups.length > 0 || 
              selectedRegions.length > 0 || selectedContentTypes.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {selectedBusinessTypes.map(type => (
                  <span key={type} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {type}
                    <button
                      onClick={() => toggleSelection(selectedBusinessTypes, setSelectedBusinessTypes, type)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {selectedAgeGroups.map(age => (
                  <span key={age} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {age}
                    <button
                      onClick={() => toggleSelection(selectedAgeGroups, setSelectedAgeGroups, age)}
                      className="ml-1 text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {selectedRegions.map(region => (
                  <span key={region} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {region}
                    <button
                      onClick={() => toggleSelection(selectedRegions, setSelectedRegions, region)}
                      className="ml-1 text-purple-600 hover:text-purple-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {selectedContentTypes.map(content => (
                  <span key={content} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    {content}
                    <button
                      onClick={() => toggleSelection(selectedContentTypes, setSelectedContentTypes, content)}
                      className="ml-1 text-orange-600 hover:text-orange-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 用户规模筛选 */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg border border-green-100 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">📊</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900">用户规模筛选</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setSortBy('default')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                sortBy === 'default'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-green-200 hover:bg-green-50'
              }`}
            >
              默认排序
            </button>
            <button
              onClick={() => setSortBy('userScaleDesc')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                sortBy === 'userScaleDesc'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-green-200 hover:bg-green-50'
              }`}
            >
              用户规模 (高→低)
            </button>
            <button
              onClick={() => setSortBy('userScaleAsc')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                sortBy === 'userScaleAsc'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-green-200 hover:bg-green-50'
              }`}
            >
              用户规模 (低→高)
            </button>
          </div>
        </div>
      </div>

      {/* 平台列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {sortedAndFilteredPlatforms.map((platform, index) => (
          <div key={platform.id} className="animate-scaleIn h-full" style={{ animationDelay: `${index * 0.1}s` }}>
            <PlatformCard
              platform={platform}
              onClick={() => setSelectedPlatform(platform)}
            />
          </div>
        ))}
      </div>

      {/* 平台详情弹窗 */}
      {selectedPlatform && (
        <PlatformDetail
          platform={selectedPlatform}
          onClose={() => setSelectedPlatform(null)}
        />
      )}

      {/* 页脚 */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">关于我们</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              专注于为外贸企业提供专业的社交媒体平台选择指导，帮助您找到最适合的营销渠道。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">博客文章</a></li>
              <li><a href="/tools" className="text-gray-600 hover:text-blue-600 transition-colors">营销工具</a></li>
              <li><a href="/learning" className="text-gray-600 hover:text-blue-600 transition-colors">学习中心</a></li>
              <li><a href="/community" className="text-gray-600 hover:text-blue-600 transition-colors">交流频道</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-gray-400">📧</span>
                <span className="text-gray-600">contact@socialmedia-guide.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400">📱</span>
                <span className="text-gray-600">WeChat: socialmedia_guide</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400">🌍</span>
                <span className="text-gray-600">工作时间: 9:00-18:00</span>
              </li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <span className="text-lg">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <span className="text-lg">📚</span>
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2024 全球社交媒体平台指南. 保留所有权利.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PlatformList 