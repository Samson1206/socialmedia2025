import { Link } from 'react-router-dom'

const Member = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">会员中心</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              加入我们的社区，获取更多专业的社交媒体营销指导和资源
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 注册卡片 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">新用户注册</h2>
            <p className="text-gray-600 mb-6">
              创建您的账户，开始您的社交媒体营销学习之旅
            </p>
            <ul className="text-left text-gray-600 mb-8 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>获取个性化平台选择建议</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>加入专业社区交流</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>优先使用专业工具</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>获取最新营销资源</span>
              </li>
            </ul>
            <Link
              to="/register"
              className="inline-block w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-md"
            >
              立即注册
            </Link>
          </div>

          {/* 登录卡片 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🔐</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">会员登录</h2>
            <p className="text-gray-600 mb-6">
              登录您的账户，继续您的学习进度
            </p>
            <ul className="text-left text-gray-600 mb-8 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>继续未完成的课程</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>查看学习历史记录</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>参与社区讨论</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>获取专属会员服务</span>
              </li>
            </ul>
            <Link
              to="/login"
              className="inline-block w-full px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 font-medium shadow-md"
            >
              立即登录
            </Link>
          </div>
        </div>

        {/* 会员权益详情 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">会员权益</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">专业指导</h3>
              <p className="text-sm text-gray-600">
                获取个性化的平台选择建议和营销策略指导，帮助您制定最适合的营销方案
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">社区交流</h3>
              <p className="text-sm text-gray-600">
                加入专业社区，与同行交流经验和见解，分享成功案例和最佳实践
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">工具资源</h3>
              <p className="text-sm text-gray-600">
                优先使用专业工具和获取最新营销资源，提升工作效率和营销效果
              </p>
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">常见问题</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">注册需要什么信息？</h3>
              <p className="text-gray-600 text-sm">
                注册时需要提供邮箱地址、手机号码、姓名、公司名称和所属行业等基本信息。
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">会员是免费的吗？</h3>
              <p className="text-gray-600 text-sm">
                我们提供基础会员服务，部分高级功能和专属资源需要付费升级。
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">如何联系客服？</h3>
              <p className="text-gray-600 text-sm">
                您可以通过邮箱、微信或社区频道联系我们，我们会在24小时内回复。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member 