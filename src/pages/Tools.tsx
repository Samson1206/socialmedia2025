import { useState } from 'react'

interface Tool {
  id: string
  name: string
  description: string
  category: string
  url: string
  icon: string
  isFree: boolean
  rating: number
  features: string[]
  tags: string[]
}

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: '全部工具', icon: '🛠️' },
    { id: 'analytics', name: '数据分析', icon: '📊' },
    { id: 'content', name: '内容创作', icon: '✍️' },
    { id: 'scheduling', name: '发布管理', icon: '📅' },
    { id: 'design', name: '设计工具', icon: '🎨' },
    { id: 'ads', name: '广告投放', icon: '💰' },
    { id: 'monitoring', name: '监控工具', icon: '👁️' }
  ]

  const tools: Tool[] = [
    {
      id: '1',
      name: 'Hootsuite',
      description: '全面的社交媒体管理平台，支持多平台发布、内容调度和数据分析',
      category: 'scheduling',
      url: 'https://hootsuite.com',
      icon: '🦉',
      isFree: false,
      rating: 4.5,
      features: ['多平台管理', '内容调度', '团队协作', '数据分析'],
      tags: ['管理工具', '企业级', '多平台']
    },
    {
      id: '2',
      name: 'Buffer',
      description: '简单易用的社交媒体发布工具，适合小型团队和个人使用',
      category: 'scheduling',
      url: 'https://buffer.com',
      icon: '📱',
      isFree: true,
      rating: 4.3,
      features: ['内容调度', '分析报告', '团队协作', '移动应用'],
      tags: ['免费版', '易用', '移动端']
    },
    {
      id: '3',
      name: 'Canva',
      description: '在线设计工具，提供丰富的模板和素材，适合社交媒体内容创作',
      category: 'design',
      url: 'https://canva.com',
      icon: '🎨',
      isFree: true,
      rating: 4.7,
      features: ['模板库', '协作编辑', '品牌套件', '移动应用'],
      tags: ['设计工具', '免费版', '模板丰富']
    },
    {
      id: '4',
      name: 'Google Analytics',
      description: '强大的网站分析工具，帮助了解用户行为和营销效果',
      category: 'analytics',
      url: 'https://analytics.google.com',
      icon: '📈',
      isFree: true,
      rating: 4.6,
      features: ['用户行为', '转化跟踪', '实时数据', '自定义报告'],
      tags: ['数据分析', '免费', '谷歌生态']
    },
    {
      id: '5',
      name: 'Facebook Ads Manager',
      description: 'Facebook官方广告管理工具，提供精准的受众定位和投放优化',
      category: 'ads',
      url: 'https://business.facebook.com',
      icon: '💰',
      isFree: true,
      rating: 4.4,
      features: ['受众定位', '创意优化', '预算控制', '效果分析'],
      tags: ['广告投放', 'Facebook', '精准定位']
    },
    {
      id: '6',
      name: 'Mention',
      description: '社交媒体监控工具，实时跟踪品牌提及和行业动态',
      category: 'monitoring',
      url: 'https://mention.com',
      icon: '👁️',
      isFree: false,
      rating: 4.2,
      features: ['品牌监控', '竞品分析', '危机预警', '报告生成'],
      tags: ['监控工具', '品牌保护', '竞品分析']
    },
    {
      id: '7',
      name: 'Grammarly',
      description: '智能写作助手，帮助提升内容质量和语法准确性',
      category: 'content',
      url: 'https://grammarly.com',
      icon: '✍️',
      isFree: true,
      rating: 4.5,
      features: ['语法检查', '风格建议', '抄袭检测', '多语言支持'],
      tags: ['写作工具', '语法检查', '内容质量']
    },
    {
      id: '8',
      name: 'Later',
      description: '专注于Instagram的社交媒体管理工具，提供视觉内容规划',
      category: 'scheduling',
      url: 'https://later.com',
      icon: '📸',
      isFree: true,
      rating: 4.3,
      features: ['视觉规划', 'Instagram优化', '内容库', '分析报告'],
      tags: ['Instagram', '视觉内容', '免费版']
    },
    {
      id: '9',
      name: 'Sprout Social',
      description: '企业级社交媒体管理平台，提供深度分析和客户服务功能',
      category: 'scheduling',
      url: 'https://sproutsocial.com',
      icon: '🌱',
      isFree: false,
      rating: 4.6,
      features: ['客户服务', '深度分析', '团队协作', '工作流程'],
      tags: ['企业级', '客户服务', '深度分析']
    },
    {
      id: '10',
      name: 'Adobe Creative Cloud',
      description: '专业的设计和创意工具套件，适合高级内容创作需求',
      category: 'design',
      url: 'https://adobe.com/creativecloud',
      icon: '🎭',
      isFree: false,
      rating: 4.8,
      features: ['专业设计', '创意工具', '云端协作', '素材库'],
      tags: ['专业工具', '创意设计', '企业级']
    },
    {
      id: '11',
      name: 'TweetDeck',
      description: 'Twitter官方管理工具，提供多账户管理和实时监控',
      category: 'monitoring',
      url: 'https://tweetdeck.twitter.com',
      icon: '🐦',
      isFree: true,
      rating: 4.1,
      features: ['多账户管理', '实时监控', '列表管理', '定时发布'],
      tags: ['Twitter', '免费', '官方工具']
    },
    {
      id: '12',
      name: 'LinkedIn Campaign Manager',
      description: 'LinkedIn官方广告平台，专注于B2B营销和职业人群',
      category: 'ads',
      url: 'https://linkedin.com/campaign-manager',
      icon: '💼',
      isFree: true,
      rating: 4.4,
      features: ['B2B定位', '职业人群', '内容广告', 'Lead生成'],
      tags: ['LinkedIn', 'B2B营销', '职业人群']
    }
  ]

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">营销工具中心</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选全球优质社交媒体营销工具，助您提升营销效率和效果
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索和筛选 */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* 搜索框 */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="搜索工具..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* 分类筛选 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 工具列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* 工具头部 */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ⭐
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({tool.rating})</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {tool.isFree && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        免费
                      </span>
                    )}
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      {categories.find(c => c.id === tool.category)?.name}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* 功能标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {feature}
                    </span>
                  ))}
                  {tool.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{tool.features.length - 3} 更多
                    </span>
                  )}
                </div>
              </div>

              {/* 工具底部 */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    访问工具
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到相关工具</h3>
            <p className="text-gray-600">尝试调整搜索条件或分类筛选</p>
          </div>
        )}

        {/* 工具推荐 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">工具使用建议</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">根据需求选择</h3>
              <p className="text-sm text-gray-600">
                根据您的营销目标、团队规模和预算选择合适的工具组合
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">工具集成</h3>
              <p className="text-sm text-gray-600">
                选择能够相互集成的工具，提高工作效率和数据一致性
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">效果评估</h3>
              <p className="text-sm text-gray-600">
                定期评估工具使用效果，及时调整和优化工具组合
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools 