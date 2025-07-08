import { useState } from 'react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  publishDate: string
  readTime: string
  imageUrl: string
  views: number
  likes: number
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: '全部', icon: '📚' },
    { id: 'tips', name: '营销技巧', icon: '💡' },
    { id: 'analysis', name: '平台分析', icon: '📊' },
    { id: 'case', name: '成功案例', icon: '🏆' },
    { id: 'trend', name: '行业趋势', icon: '📈' },
    { id: 'tools', name: '工具推荐', icon: '🛠️' }
  ]

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '2024年社交媒体营销趋势预测',
      excerpt: '随着AI技术的普及和用户行为的变化，社交媒体营销正在经历前所未有的变革。本文将深入分析2024年的关键趋势...',
      content: '完整的文章内容...',
      category: 'trend',
      tags: ['趋势分析', 'AI营销', '2024预测'],
      author: '社交媒体专家',
      publishDate: '2024-01-15',
      readTime: '8分钟',
      imageUrl: '/blog/trend-2024.jpg',
      views: 1250,
      likes: 89
    },
    {
      id: '2',
      title: 'Instagram Reels营销完全指南',
      excerpt: 'Instagram Reels已成为品牌营销的重要阵地。本文将从内容创作、算法优化到数据分析，为您提供完整的Reels营销策略...',
      content: '完整的文章内容...',
      category: 'tips',
      tags: ['Instagram', '短视频', 'Reels'],
      author: '内容营销师',
      publishDate: '2024-01-12',
      readTime: '12分钟',
      imageUrl: '/blog/instagram-reels.jpg',
      views: 2100,
      likes: 156
    },
    {
      id: '3',
      title: 'TikTok品牌营销成功案例分析',
      excerpt: '通过分析Nike、Coca-Cola等知名品牌在TikTok上的成功案例，总结出可复制的营销策略和最佳实践...',
      content: '完整的文章内容...',
      category: 'case',
      tags: ['TikTok', '品牌营销', '案例分析'],
      author: '品牌策略师',
      publishDate: '2024-01-10',
      readTime: '15分钟',
      imageUrl: '/blog/tiktok-case.jpg',
      views: 1800,
      likes: 134
    },
    {
      id: '4',
      title: 'LinkedIn B2B营销的10个关键策略',
      excerpt: 'LinkedIn作为专业的B2B营销平台，需要独特的策略和方法。本文分享10个经过验证的LinkedIn营销策略...',
      content: '完整的文章内容...',
      category: 'tips',
      tags: ['LinkedIn', 'B2B营销', '专业社交'],
      author: 'B2B营销专家',
      publishDate: '2024-01-08',
      readTime: '10分钟',
      imageUrl: '/blog/linkedin-b2b.jpg',
      views: 950,
      likes: 67
    },
    {
      id: '5',
      title: '社交媒体数据分析工具对比',
      excerpt: '市面上有众多社交媒体分析工具，如何选择最适合的？本文对比了主流工具的功能、价格和适用场景...',
      content: '完整的文章内容...',
      category: 'tools',
      tags: ['数据分析', '工具对比', '营销工具'],
      author: '数据分析师',
      publishDate: '2024-01-05',
      readTime: '18分钟',
      imageUrl: '/blog/analytics-tools.jpg',
      views: 3200,
      likes: 245
    },
    {
      id: '6',
      title: 'Facebook广告投放优化技巧',
      excerpt: 'Facebook广告系统复杂而强大，本文分享从受众定位到创意优化的完整投放策略，帮助您提升ROI...',
      content: '完整的文章内容...',
      category: 'tips',
      tags: ['Facebook', '广告投放', 'ROI优化'],
      author: '广告优化师',
      publishDate: '2024-01-03',
      readTime: '14分钟',
      imageUrl: '/blog/facebook-ads.jpg',
      views: 1650,
      likes: 112
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">社交媒体营销博客</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              分享最新的社交媒体营销技巧、平台分析、成功案例和行业趋势，助您在数字营销领域取得成功
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
                placeholder="搜索文章..."
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

        {/* 文章列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* 文章图片 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                  ⏱️ {post.readTime}
                </div>
              </div>

              {/* 文章内容 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.publishDate}</span>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span>👁️ {post.views}</span>
                    <span>❤️ {post.likes}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 作者信息 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                    阅读全文
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 分页 */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                上一页
              </button>
              <span className="px-4 py-2 bg-blue-500 text-white rounded-lg">1</span>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                下一页
              </button>
            </nav>
          </div>
        )}

        {/* 空状态 */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">暂无相关文章</h3>
            <p className="text-gray-600">尝试调整搜索条件或分类筛选</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog 