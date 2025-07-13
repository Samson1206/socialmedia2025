import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '社媒平台', icon: '🌐' },
    { path: '/ecommerce-platforms', label: '电商平台', icon: '🛒' },
    { path: '/search-engines', label: '搜索引擎', icon: '🔍' },
    { path: '/blog', label: '博客', icon: '📝' },
    { path: '/tools', label: '工具中心', icon: '🛠️' },
    { path: '/account-plan', label: '账号规划', icon: '🗂️' },
    { path: '/learning', label: '学习中心', icon: '📚' },
    { path: '/community', label: '交流频道', icon: '💬' },
    { path: '/about', label: '关于我们', icon: '👤' }
  ]

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">🌐</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900">全球社交媒体平台指南</h1>
            <p className="text-sm text-gray-500">为外贸业务选择最佳营销平台</p>
          </div>
        </div>
        
        {/* 桌面端导航 */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <Link
            to="/member"
            className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-md"
          >
            会员注册/登录
          </Link>
        </nav>

        {/* 移动端菜单按钮 */}
        <div className="lg:hidden">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <div className="lg:hidden bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              to="/member"
              className="col-span-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-center shadow-md"
            >
              会员注册/登录
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 