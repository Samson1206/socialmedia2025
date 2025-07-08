import { useState } from 'react'

interface Question {
  id: string
  title: string
  content: string
  author: string
  date: string
  tags: string[]
  answers: number
  views: number
  isResolved: boolean
}

interface Discussion {
  id: string
  title: string
  content: string
  author: string
  date: string
  category: string
  replies: number
  views: number
  isPinned: boolean
}

const Community = () => {
  const [activeTab, setActiveTab] = useState('qa')
  const [showAskForm, setShowAskForm] = useState(false)
  const [showDiscussionForm, setShowDiscussionForm] = useState(false)

  const questions: Question[] = [
    {
      id: '1',
      title: '如何选择适合B2B业务的社交媒体平台？',
      content: '我们是一家做工业设备的外贸公司，主要面向欧美市场。想了解哪些社交媒体平台最适合B2B营销？',
      author: '外贸新手',
      date: '2024-01-15',
      tags: ['B2B', 'LinkedIn', '欧美市场'],
      answers: 5,
      views: 120,
      isResolved: true
    },
    {
      id: '2',
      title: 'Instagram Reels和TikTok哪个更适合品牌营销？',
      content: '我们做时尚配饰，想通过短视频营销提升品牌知名度。Instagram Reels和TikTok哪个效果更好？',
      author: '时尚品牌',
      date: '2024-01-14',
      tags: ['短视频', 'Instagram', 'TikTok', '时尚'],
      answers: 3,
      views: 89,
      isResolved: false
    },
    {
      id: '3',
      title: 'Facebook广告投放预算如何分配？',
      content: '月预算5000美元，主要推广产品展示。应该如何在不同广告类型间分配预算？',
      author: '电商卖家',
      date: '2024-01-13',
      tags: ['Facebook', '广告投放', '预算分配'],
      answers: 7,
      views: 156,
      isResolved: false
    },
    {
      id: '4',
      title: 'Pinterest适合哪些类型的产品推广？',
      content: '听说Pinterest转化率很高，但不知道我们的产品是否适合。主要做家居用品。',
      author: '家居品牌',
      date: '2024-01-12',
      tags: ['Pinterest', '家居用品', '转化率'],
      answers: 4,
      views: 67,
      isResolved: true
    }
  ]

  const discussions: Discussion[] = [
    {
      id: '1',
      title: '2024年社交媒体营销趋势分享',
      content: '大家觉得2024年哪些社交媒体趋势值得关注？AI内容创作、短视频、还是其他？',
      author: '营销专家',
      date: '2024-01-15',
      category: '趋势讨论',
      replies: 12,
      views: 234,
      isPinned: true
    },
    {
      id: '2',
      title: '成功案例分享：如何通过LinkedIn获得大客户',
      content: '分享一下我们通过LinkedIn成功获得大客户的经历，希望对大家有帮助...',
      author: 'B2B销售',
      date: '2024-01-14',
      category: '经验分享',
      replies: 8,
      views: 189,
      isPinned: false
    },
    {
      id: '3',
      title: '工具推荐：好用的社交媒体管理软件',
      content: '大家用什么工具管理多个社交媒体账号？求推荐性价比高的工具...',
      author: '运营新手',
      date: '2024-01-13',
      category: '工具推荐',
      replies: 15,
      views: 312,
      isPinned: false
    },
    {
      id: '4',
      title: '数据分析：如何解读社交媒体数据',
      content: '面对各种数据指标，如何判断营销效果？哪些指标最重要？',
      author: '数据分析师',
      date: '2024-01-12',
      category: '数据分析',
      replies: 6,
      views: 145,
      isPinned: false
    }
  ]

  const categories = [
    { id: 'all', name: '全部', icon: '📚' },
    { id: 'trend', name: '趋势讨论', icon: '📈' },
    { id: 'experience', name: '经验分享', icon: '💡' },
    { id: 'tools', name: '工具推荐', icon: '🛠️' },
    { id: 'analysis', name: '数据分析', icon: '📊' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">交流频道</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              与同行交流经验，分享见解，共同探讨社交媒体营销的最佳实践
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 标签页导航 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('qa')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'qa'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ❓ 问答区
            </button>
            <button
              onClick={() => setActiveTab('discussion')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'discussion'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              💬 讨论区
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 操作栏 */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeTab === 'qa' ? '问答区' : '讨论区'}
                </h2>
                <span className="text-sm text-gray-500">
                  {activeTab === 'qa' ? `${questions.length} 个问题` : `${discussions.length} 个讨论`}
                </span>
              </div>
              <button
                onClick={() => activeTab === 'qa' ? setShowAskForm(true) : setShowDiscussionForm(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                {activeTab === 'qa' ? '提问' : '发起讨论'}
              </button>
            </div>
          </div>

          {/* 问答区 */}
          {activeTab === 'qa' && (
            <div className="p-6">
              <div className="space-y-4">
                {questions.map((question) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {question.isResolved && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            ✅ 已解决
                          </span>
                        )}
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {question.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>👁️ {question.views}</span>
                        <span>💬 {question.answers}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {question.content}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>👤 {question.author}</span>
                        <span>📅 {question.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {question.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 讨论区 */}
          {activeTab === 'discussion' && (
            <div className="p-6">
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {discussion.isPinned && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                            📌 置顶
                          </span>
                        )}
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>👁️ {discussion.views}</span>
                        <span>💬 {discussion.replies}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {discussion.content}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>👤 {discussion.author}</span>
                        <span>📅 {discussion.date}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
                          {discussion.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 提问表单 */}
        {showAskForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">提出问题</h3>
                <button
                  onClick={() => setShowAskForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">问题标题</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请简要描述您的问题..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">问题详情</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请详细描述您的问题，包括背景、具体需求等..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">标签</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="用逗号分隔多个标签，如：B2B, LinkedIn, 欧美市场"
                  />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAskForm(false)}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    发布问题
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 发起讨论表单 */}
        {showDiscussionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">发起讨论</h3>
                <button
                  onClick={() => setShowDiscussionForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">讨论标题</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请为您的讨论起一个吸引人的标题..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">讨论内容</label>
                  <textarea
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="分享您的观点、经验或想法，鼓励大家参与讨论..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">选择分类</option>
                    {categories.slice(1).map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowDiscussionForm(false)}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    发布讨论
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community 