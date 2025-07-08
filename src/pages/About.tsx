import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('about')

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      icon: '💼',
      color: 'bg-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-handle',
      icon: '🐦',
      color: 'bg-sky-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/your-username',
      icon: '💻',
      color: 'bg-gray-800'
    },
    {
      name: '微信公众号',
      url: '#',
      icon: '📱',
      color: 'bg-green-500'
    },
    {
      name: '知乎',
      url: 'https://zhihu.com/people/your-profile',
      icon: '📚',
      color: 'bg-blue-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              S
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              专注于社交媒体营销和数字营销策略，致力于为外贸企业提供专业的平台选择指导
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标签页导航 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              👤 个人介绍
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'contact'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📞 联系方式
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">个人介绍</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    您好！我是一名专注于社交媒体营销和数字营销策略的专业人士。在过去的几年里，我深入研究了全球各大社交媒体平台的特点、用户行为和营销效果，积累了丰富的实战经验。
                  </p>
                  <p className="mb-4">
                    我特别关注B2B和B2C外贸业务的需求，了解不同行业、不同目标市场对社交媒体平台的选择偏好。通过分析大量成功案例和失败教训，我总结出了一套系统性的平台选择方法论。
                  </p>
                  <p className="mb-4">
                    这个网站是我多年研究和实践的结晶，旨在为外贸企业提供客观、专业、实用的社交媒体平台选择指导。我相信，选择合适的平台是成功营销的第一步，也是最重要的一步。
                  </p>
                  <p>
                    如果您有任何问题或建议，欢迎随时与我联系。让我们一起在数字营销的道路上探索前行！
                  </p>
                </div>
              </div>

              {/* 专业技能 */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">专业技能</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="font-medium text-gray-900">数据分析</h4>
                      <p className="text-sm text-gray-600">深度分析平台数据和用户行为</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-medium text-gray-900">策略规划</h4>
                      <p className="text-sm text-gray-600">制定个性化的营销策略</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <h4 className="font-medium text-gray-900">国际市场</h4>
                      <p className="text-sm text-gray-600">了解不同市场的营销特点</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="font-medium text-gray-900">创新思维</h4>
                      <p className="text-sm text-gray-600">探索新的营销方法和工具</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
                
                {/* 主要联系方式 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      📧
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">邮箱</h4>
                      <p className="text-blue-600">contact@socialmedia-guide.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                      📱
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">微信</h4>
                      <p className="text-green-600">WeChat: socialmedia_guide</p>
                    </div>
                  </div>
                </div>

                {/* 社交媒体链接 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">社交媒体</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity group`}
                      >
                        <div className="text-2xl mb-2">{social.icon}</div>
                        <div className="text-sm font-medium">{social.name}</div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 工作时间 */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">工作时间</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>📅 周一至周五: 9:00 - 18:00</p>
                    <p>🌍 时区: 北京时间 (UTC+8)</p>
                    <p>⏰ 回复时间: 通常在24小时内</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 底部CTA */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">需要专业建议？</h3>
            <p className="text-lg mb-6 opacity-90">
              如果您在社交媒体平台选择方面需要专业指导，我很乐意为您提供帮助
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              立即咨询
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 