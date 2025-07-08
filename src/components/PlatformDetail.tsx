import { Platform } from '../data/platforms'
import { useEffect } from 'react'

interface PlatformDetailProps {
  platform: Platform
  onClose: () => void
}

const PlatformDetail = ({ platform, onClose }: PlatformDetailProps) => {
  // 添加键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // Treemap颜色配置
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
  ]

  // 计算Treemap布局
  const calculateTreemap = (data: Record<string, number>) => {
    const entries = Object.entries(data).sort((a, b) => b[1] - a[1])
    const total = entries.reduce((sum, [_, value]) => sum + value, 0)
    
    return entries.map(([region, percentage], index) => ({
      region,
      percentage,
      color: colors[index % colors.length],
      width: `${(percentage / total) * 100}%`,
      height: '40px'
    }))
  }

  const treemapData = calculateTreemap(platform.userDistribution)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* 固定关闭按钮 */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 shadow-sm backdrop-blur-sm bg-white/95">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                <img 
                  src={platform.logoUrl} 
                  alt={platform.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="text-2xl font-bold text-gray-400 hidden">{platform.name.charAt(0)}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{platform.name}</h2>
                <p className="text-gray-600 text-sm">{platform.businessType}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full transition-all duration-200 transform hover:scale-105 shadow-sm"
              title="关闭详情 (ESC)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* 头部信息 */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                {/* 概述 */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">平台概述</h3>
                  <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mb-4">{platform.description}</p>
                </div>
                
                {/* 详细描述 */}
                {platform.detailedDescription && (
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                      <p className="text-gray-700 text-base leading-relaxed">{platform.detailedDescription}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  {platform.businessType.split('/').map((type, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        type === 'B2B' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {type}
                    </span>
                  ))}
                  {/* 官方链接按钮 */}
                  <a
                    href={platform.officialUrl || `https://www.${platform.name.toLowerCase().replace(/\s+/g, '')}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                  >
                    <span>🌐</span>
                    <span>访问官网</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 基本信息卡片 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">用户规模</h3>
              <p className="text-2xl font-bold text-blue-800">{platform.userScale}</p>
              <p className="text-blue-700 text-sm mt-2">{platform.userProfile}</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-900 mb-3">市场覆盖</h3>
              <p className="text-2xl font-bold text-green-800">{platform.marketCoverage.length}个地区</p>
              <div className="mt-3">
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                  {platform.marketCoverage.map((region, index) => (
                    <span key={index} className="px-2.5 py-1.5 bg-green-200 text-green-800 text-xs rounded-md font-medium hover:bg-green-300 transition-colors">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">核心功能</h3>
              <div className="flex flex-wrap gap-1.5">
                {platform.features.map((feature, index) => (
                  <span key={index} className="px-2.5 py-1.5 bg-purple-200 text-purple-800 text-xs rounded-md font-medium hover:bg-purple-300 transition-colors">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 用户分布Treemap */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">用户分布可视化</h3>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">全球用户分布 (Treemap)</h4>
                <span className="text-sm text-gray-500">按用户占比显示</span>
              </div>
              
              {/* Treemap可视化 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex flex-wrap gap-1 min-h-64">
                  {treemapData.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} rounded flex items-center justify-center text-white font-medium text-xs relative group cursor-pointer transition-all duration-200 hover:scale-105`}
                      style={{ 
                        width: item.width, 
                        height: item.height,
                        minWidth: '60px'
                      }}
                      title={`${item.region}: ${item.percentage}%`}
                    >
                      <span className="px-1 text-center">
                        <div className="font-bold">{item.region}</div>
                        <div className="text-xs opacity-90">{item.percentage}%</div>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4 text-sm text-gray-600">
                  显示全部 {treemapData.length} 个地区
                </div>
              </div>

              {/* 详细数据表格 - 分页显示 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold text-gray-900">详细用户分布数据</h5>
                  <span className="text-sm text-gray-500">共 {Object.keys(platform.userDistribution).length} 个地区</span>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-600 text-lg">ℹ️</span>
                    <div className="text-sm text-blue-800">
                      <strong>数据说明：</strong>用户数量基于平台总用户规模和地区占比计算得出。
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(platform.userDistribution)
                    .sort((a, b) => b[1] - a[1])
                    .map(([region, percentage], index) => {
                      // 估算用户数量（基于用户规模描述）
                      const userScaleText = platform.userScale;
                      let totalUsers = 0;
                      
                      if (userScaleText.includes('亿')) {
                        const match = userScaleText.match(/(\d+(?:\.\d+)?)亿/);
                        if (match) {
                          totalUsers = parseFloat(match[1]) * 100000000;
                        }
                      } else if (userScaleText.includes('万')) {
                        const match = userScaleText.match(/(\d+(?:\.\d+)?)万/);
                        if (match) {
                          totalUsers = parseFloat(match[1]) * 10000;
                        }
                      } else if (userScaleText.includes('千')) {
                        const match = userScaleText.match(/(\d+(?:\.\d+)?)千/);
                        if (match) {
                          totalUsers = parseFloat(match[1]) * 1000;
                        }
                      }
                      
                      const estimatedUsers = Math.round(totalUsers * (percentage / 100));
                      const userDisplay = estimatedUsers >= 1000000 
                        ? `${(estimatedUsers / 1000000).toFixed(1)}M`
                        : estimatedUsers >= 1000 
                        ? `${(estimatedUsers / 1000).toFixed(1)}K`
                        : estimatedUsers.toString();
                      
                      return (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm truncate">{region}</div>
                            <div className="text-xs text-gray-600">用户占比: {percentage}%</div>
                            <div className="text-xs text-blue-600 font-medium">约 {userDisplay} 用户</div>
                          </div>
                          <div className="flex items-center space-x-2 ml-2">
                            <div className="w-12 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${colors[index % colors.length]}`}
                                style={{ width: `${Math.min(percentage * 2, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* 详细信息网格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左侧信息 */}
            <div className="space-y-6">
              {/* 典型品牌案例 */}
              {platform.typicalBrands && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">典型品牌案例</h3>
                  <div className="space-y-4">
                    {/* B2B品牌 */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700 mb-3">B2B品牌</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.typicalBrands
                          .filter(brand => ['Microsoft', 'Salesforce', 'HubSpot', 'Buffer', 'Moz', 'Ahrefs', 'Adobe', 'Oracle', 'IBM', 'Deloitte'].includes(brand))
                          .map((brand, index) => (
                          <span key={index} className="px-3 py-2 bg-blue-50 text-blue-800 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* B2C品牌 */}
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-3">B2C品牌</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.typicalBrands
                          .filter(brand => !['Microsoft', 'Salesforce', 'HubSpot', 'Buffer', 'Moz', 'Ahrefs', 'Adobe', 'Oracle', 'IBM', 'Deloitte'].includes(brand))
                          .map((brand, index) => (
                          <span key={index} className="px-3 py-2 bg-green-50 text-green-800 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-600 mt-3 opacity-75">
                      共 {platform.typicalBrands.length} 个典型品牌案例
                    </div>
                  </div>
                </div>
              )}

              {/* 用户画像 */}
              {platform.userPersona && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">用户画像</h3>
                  <p className="text-gray-700 leading-relaxed">{platform.userPersona}</p>
                </div>
              )}

              {/* 广告系统 */}
              {platform.adSystem && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">广告系统</h3>
                  <p className="text-gray-700 leading-relaxed">{platform.adSystem}</p>
                </div>
              )}

              {/* 内容生态 */}
              {platform.contentEcosystem && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">内容生态</h3>
                  <p className="text-gray-700 leading-relaxed">{platform.contentEcosystem}</p>
                </div>
              )}
            </div>

            {/* 右侧信息 */}
            <div className="space-y-6">
              {/* 常见运营误区 */}
              {platform.commonMistakes && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">常见运营误区</h3>
                  <ul className="space-y-2">
                    {platform.commonMistakes.map((mistake, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">⚠️</span>
                        <span className="text-gray-700">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 运营建议 */}
              {platform.operationTips && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">运营建议</h3>
                  <ul className="space-y-2">
                    {platform.operationTips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 营销建议 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">营销建议</h3>
                <p className="text-blue-800 leading-relaxed">{platform.marketingTips}</p>
              </div>

              {/* 年龄段分布 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">目标年龄段</h3>
                <div className="flex flex-wrap gap-2">
                  {platform.ageGroups.map((age, index) => (
                    <span key={index} className="px-3 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                      {age}岁
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-600 mt-2 opacity-75">
                  覆盖 {platform.ageGroups.length} 个年龄段
                </div>
              </div>

              {/* 内容类型 */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">支持内容类型</h3>
                <div className="flex flex-wrap gap-2">
                  {platform.contentTypes.map((content, index) => (
                    <span key={index} className="px-3 py-2 bg-orange-50 text-orange-800 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                      {content}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-orange-600 mt-2 opacity-75">
                  支持 {platform.contentTypes.length} 种内容类型
                </div>
              </div>
            </div>
          </div>

          {/* 发展历史 */}
          {platform.developmentHistory && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">发展历史与大事件</h3>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="relative">
                  {/* 时间线 */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  
                  <div className="space-y-6">
                    {platform.developmentHistory?.map((event, index) => (
                      <div key={index} className="relative flex items-start space-x-4">
                        {/* 时间点 */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                            index === 0 ? 'bg-blue-500' : 
                            index === (platform.developmentHistory?.length || 0) - 1 ? 'bg-purple-500' : 
                            'bg-gradient-to-r from-blue-400 to-purple-400'
                          }`}></div>
                        </div>
                        
                        {/* 事件内容 */}
                        <div className="flex-1 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                          <p className="text-gray-800 leading-relaxed">{event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlatformDetail 