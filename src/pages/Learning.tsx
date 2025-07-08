import { useState } from 'react'

interface Course {
  id: string
  title: string
  description: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  lessons: number
  instructor: string
  rating: number
  students: number
  isFree: boolean
  thumbnail: string
  tags: string[]
}

interface Tutorial {
  id: string
  title: string
  description: string
  platform: string
  duration: string
  difficulty: string
  author: string
  date: string
  views: number
  tags: string[]
}

const Learning = () => {
  const [activeTab, setActiveTab] = useState('courses')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const categories = [
    { id: 'all', name: '全部', icon: '📚' },
    { id: 'strategy', name: '营销策略', icon: '🎯' },
    { id: 'content', name: '内容创作', icon: '✍️' },
    { id: 'ads', name: '广告投放', icon: '💰' },
    { id: 'analytics', name: '数据分析', icon: '📊' },
    { id: 'platform', name: '平台运营', icon: '🌐' }
  ]

  const levels = [
    { id: 'all', name: '全部级别' },
    { id: 'beginner', name: '初级' },
    { id: 'intermediate', name: '中级' },
    { id: 'advanced', name: '高级' }
  ]

  const courses: Course[] = [
    {
      id: '1',
      title: '社交媒体营销基础入门',
      description: '从零开始学习社交媒体营销，掌握基本概念、平台特点和营销策略',
      category: 'strategy',
      level: 'beginner',
      duration: '8小时',
      lessons: 12,
      instructor: '张老师',
      rating: 4.8,
      students: 1250,
      isFree: true,
      thumbnail: '/courses/basic-marketing.jpg',
      tags: ['入门', '基础', '策略']
    },
    {
      id: '2',
      title: 'Facebook广告投放实战',
      description: '深入学习Facebook广告系统，掌握受众定位、创意优化和效果分析',
      category: 'ads',
      level: 'intermediate',
      duration: '12小时',
      lessons: 18,
      instructor: '李老师',
      rating: 4.6,
      students: 890,
      isFree: false,
      thumbnail: '/courses/facebook-ads.jpg',
      tags: ['Facebook', '广告投放', '实战']
    },
    {
      id: '3',
      title: 'Instagram内容创作与运营',
      description: '学习Instagram平台的内容创作技巧、视觉设计和社区运营策略',
      category: 'content',
      level: 'intermediate',
      duration: '10小时',
      lessons: 15,
      instructor: '王老师',
      rating: 4.7,
      students: 1100,
      isFree: false,
      thumbnail: '/courses/instagram-content.jpg',
      tags: ['Instagram', '内容创作', '视觉设计']
    },
    {
      id: '4',
      title: 'LinkedIn B2B营销高级课程',
      description: '专为B2B企业设计的LinkedIn营销策略，包括客户开发和品牌建设',
      category: 'strategy',
      level: 'advanced',
      duration: '15小时',
      lessons: 20,
      instructor: '陈老师',
      rating: 4.9,
      students: 650,
      isFree: false,
      thumbnail: '/courses/linkedin-b2b.jpg',
      tags: ['LinkedIn', 'B2B', '高级']
    },
    {
      id: '5',
      title: '社交媒体数据分析',
      description: '学习如何收集、分析和解读社交媒体数据，优化营销策略',
      category: 'analytics',
      level: 'intermediate',
      duration: '14小时',
      lessons: 16,
      instructor: '刘老师',
      rating: 4.5,
      students: 720,
      isFree: false,
      thumbnail: '/courses/data-analytics.jpg',
      tags: ['数据分析', '优化', '策略']
    },
    {
      id: '6',
      title: 'TikTok短视频营销',
      description: '掌握TikTok平台的特点和算法，学习短视频内容创作和营销策略',
      category: 'platform',
      level: 'intermediate',
      duration: '11小时',
      lessons: 14,
      instructor: '赵老师',
      rating: 4.4,
      students: 980,
      isFree: false,
      thumbnail: '/courses/tiktok-marketing.jpg',
      tags: ['TikTok', '短视频', '算法']
    }
  ]

  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: '如何创建高转化的Facebook广告',
      description: '详细讲解Facebook广告的创建流程，从受众定位到创意设计',
      platform: 'Facebook',
      duration: '45分钟',
      difficulty: '中级',
      author: '营销专家',
      date: '2024-01-15',
      views: 1250,
      tags: ['Facebook', '广告', '转化']
    },
    {
      id: '2',
      title: 'Instagram Reels内容创作技巧',
      description: '分享Instagram Reels的创作技巧，包括拍摄、剪辑和发布策略',
      platform: 'Instagram',
      duration: '30分钟',
      difficulty: '初级',
      author: '内容创作者',
      date: '2024-01-14',
      views: 890,
      tags: ['Instagram', 'Reels', '内容创作']
    },
    {
      id: '3',
      title: 'LinkedIn公司页面优化指南',
      description: '如何优化LinkedIn公司页面，提升品牌形象和客户信任度',
      platform: 'LinkedIn',
      duration: '25分钟',
      difficulty: '初级',
      author: 'B2B专家',
      date: '2024-01-13',
      views: 650,
      tags: ['LinkedIn', '公司页面', '优化']
    },
    {
      id: '4',
      title: 'TikTok算法解析与内容策略',
      description: '深入分析TikTok算法机制，制定有效的内容策略',
      platform: 'TikTok',
      duration: '40分钟',
      difficulty: '高级',
      author: '算法专家',
      date: '2024-01-12',
      views: 1100,
      tags: ['TikTok', '算法', '策略']
    },
    {
      id: '5',
      title: 'Twitter营销最佳实践',
      description: 'Twitter平台营销的完整指南，包括内容策略和社区管理',
      platform: 'Twitter',
      duration: '35分钟',
      difficulty: '中级',
      author: '社交媒体专家',
      date: '2024-01-11',
      views: 750,
      tags: ['Twitter', '营销', '最佳实践']
    },
    {
      id: '6',
      title: 'Pinterest视觉营销策略',
      description: '学习Pinterest平台的视觉营销策略，提升品牌曝光和转化',
      platform: 'Pinterest',
      duration: '28分钟',
      difficulty: '中级',
      author: '视觉营销师',
      date: '2024-01-10',
      views: 520,
      tags: ['Pinterest', '视觉营销', '转化']
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    return matchesCategory && matchesLevel
  })

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'all' || tutorial.tags.some(tag => 
      categories.find(c => c.id === selectedCategory)?.name.includes(tag)
    )
    return matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">学习中心</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              系统化的学习资源，助您掌握社交媒体营销的核心技能和最新趋势
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 标签页导航 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'courses'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📚 系统课程
            </button>
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'tutorials'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🎥 实战教程
            </button>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
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

              {/* 级别筛选（仅课程页面显示） */}
              {activeTab === 'courses' && (
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedLevel === level.id
                          ? 'bg-green-500 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {level.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 课程列表 */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* 课程封面 */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      course.isFree 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {course.isFree ? '免费' : '付费'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                    ⏱️ {course.duration}
                  </div>
                </div>

                {/* 课程内容 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      course.level === 'beginner' ? 'bg-green-100 text-green-700' :
                      course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {course.level === 'beginner' ? '初级' : 
                       course.level === 'intermediate' ? '中级' : '高级'}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>👥 {course.students}</span>
                      <span>⭐ {course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 课程信息 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {course.instructor.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">{course.instructor}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      📖 {course.lessons} 课时
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    {course.isFree ? '立即学习' : '查看详情'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 教程列表 */}
        {activeTab === 'tutorials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg">
                        {tutorial.platform.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {tutorial.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{tutorial.platform}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>👁️ {tutorial.views}</span>
                      <span>⏱️ {tutorial.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>👤 {tutorial.author}</span>
                      <span>📅 {tutorial.date}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tutorial.difficulty === '初级' ? 'bg-green-100 text-green-700' :
                      tutorial.difficulty === '中级' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                  </div>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    观看教程
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 空状态 */}
        {(activeTab === 'courses' && filteredCourses.length === 0) || 
         (activeTab === 'tutorials' && filteredTutorials.length === 0) ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">暂无相关内容</h3>
            <p className="text-gray-600">尝试调整筛选条件</p>
          </div>
        ) : null}

        {/* 学习建议 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">学习建议</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-3">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">循序渐进</h3>
              <p className="text-sm text-gray-600">
                建议从基础课程开始，逐步提升到高级内容，建立扎实的知识体系
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">实践结合</h3>
              <p className="text-sm text-gray-600">
                理论学习与实践操作相结合，通过实战项目巩固所学知识
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">持续更新</h3>
              <p className="text-sm text-gray-600">
                社交媒体平台更新频繁，保持学习最新趋势和最佳实践
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learning 