import React, { useEffect } from 'react';
import { SearchEngine } from '../data/searchEngines';

interface SearchEngineDetailProps {
  engine: SearchEngine;
  onClose: () => void;
}

const SearchEngineDetail: React.FC<SearchEngineDetailProps> = ({ engine, onClose }) => {
  // 添加ESC键关闭弹窗功能
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case '综合搜索':
        return 'bg-blue-100 text-blue-800';
      case '垂直搜索':
        return 'bg-green-100 text-green-800';
      case '元搜索':
        return 'bg-purple-100 text-purple-800';
      case '专业搜索':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* 顶部sticky区域 */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 shadow-sm backdrop-blur-sm bg-white/95 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                <img
                  src={engine.logo}
                  alt={`${engine.name} logo`}
                  className="w-10 h-10 object-contain"
                  onError={handleLogoError}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">{engine.name}</h2>
                <div className="flex items-center space-x-2 mt-1 whitespace-nowrap overflow-hidden">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(engine.type)}`}>{engine.type}</span>
                  <span className="text-gray-600 truncate">{engine.headquarters}</span>
                  <span className="text-gray-600 truncate">成立于 {engine.foundedYear}</span>
                </div>
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

        {/* Content */}
        <div className="px-6 py-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">基本信息</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">官方网站:</span>
                  <a href={engine.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">
                    {engine.website}
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">月访问量:</span>
                  <span className="ml-2 font-medium">{engine.monthlyVisitors}</span>
                </div>
                <div>
                  <span className="text-gray-600">全球排名:</span>
                  <span className="ml-2 font-medium">{engine.trafficInfo.globalRanking}</span>
                </div>
                <div>
                  <span className="text-gray-600">活跃用户:</span>
                  <span className="ml-2 font-medium">{engine.trafficInfo.activeUsers}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">市场份额</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">全球份额:</span>
                  <span className="font-medium">{engine.marketShare.global}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">移动端:</span>
                  <span className="font-medium">{engine.marketShare.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">桌面端:</span>
                  <span className="font-medium">{engine.marketShare.desktop}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">平台介绍</h3>
            <p className="text-gray-700 leading-relaxed">{engine.description}</p>
          </div>

          {/* 用户分布可视化 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">用户分布可视化</h3>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">全球用户分布</h4>
                <span className="text-sm text-gray-500">按用户占比显示</span>
              </div>
              
              {/* Treemap可视化 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex flex-wrap gap-1 min-h-64">
                  {Object.entries(engine.userDistribution)
                    .sort((a, b) => b[1] - a[1])
                    .map(([country, percentage], index) => {
                      const colors = [
                        'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 
                        'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
                      ];
                      const width = `${Math.min(percentage * 3, 100)}%`;
                      
                      return (
                        <div
                          key={index}
                          className={`${colors[index % colors.length]} rounded flex items-center justify-center text-white font-medium text-xs relative group cursor-pointer transition-all duration-200 hover:scale-105`}
                          style={{ 
                            width: width, 
                            height: '40px',
                            minWidth: '60px'
                          }}
                          title={`${country}: ${percentage}%`}
                        >
                          <span className="px-1 text-center">
                            <div className="font-bold">{country}</div>
                            <div className="text-xs opacity-90">{percentage}%</div>
                          </span>
                        </div>
                      );
                    })}
                </div>
                <div className="text-center mt-4 text-sm text-gray-600">
                  显示全部 {Object.keys(engine.userDistribution).length} 个地区
                </div>
              </div>

              {/* 详细数据表格 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold text-gray-900">详细用户分布数据</h5>
                  <span className="text-sm text-gray-500">共 {Object.keys(engine.userDistribution).length} 个地区</span>
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
                  {Object.entries(engine.userDistribution)
                    .sort((a, b) => b[1] - a[1])
                    .map(([country, percentage], index) => {
                      // 估算用户数量（基于月访问量）
                      const visitorsText = engine.monthlyVisitors;
                      let totalUsers = 0;
                      
                      if (visitorsText.includes('亿')) {
                        const match = visitorsText.match(/(\d+(?:\.\d+)?)亿/);
                        if (match) {
                          totalUsers = parseFloat(match[1]) * 100000000;
                        }
                      } else if (visitorsText.includes('万')) {
                        const match = visitorsText.match(/(\d+(?:\.\d+)?)万/);
                        if (match) {
                          totalUsers = parseFloat(match[1]) * 10000;
                        }
                      }
                      
                      const estimatedUsers = Math.round(totalUsers * (percentage / 100));
                      const userDisplay = estimatedUsers >= 1000000 
                        ? `${(estimatedUsers / 1000000).toFixed(1)}M`
                        : estimatedUsers >= 1000 
                        ? `${(estimatedUsers / 1000).toFixed(1)}K`
                        : estimatedUsers.toString();
                      
                      const colors = [
                        'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 
                        'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
                      ];
                      
                      return (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm truncate">{country}</div>
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

          {/* Features and Markets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">搜索功能</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(engine.features).map(([feature, enabled]) => (
                  <div key={feature} className="flex items-center">
                    <span className={`w-4 h-4 rounded-full mr-2 ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                    <span className="text-sm text-gray-700">{feature.replace('Search', '搜索')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">主要市场</h3>
              <div className="flex flex-wrap gap-2">
                {engine.mainMarkets.map((market, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* User Demographics and Traffic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">用户画像</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">年龄分布:</span>
                  <div className="mt-1">
                    {engine.userDemographics.ageGroups.map((age, index) => (
                      <span key={index} className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                        {age}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">性别比例:</span>
                  <span className="ml-2 font-medium">{engine.userDemographics.genderRatio}</span>
                </div>
                <div>
                  <span className="text-gray-600">收入水平:</span>
                  <span className="ml-2 font-medium">{engine.userDemographics.incomeLevel}</span>
                </div>
                <div>
                  <span className="text-gray-600">教育程度:</span>
                  <span className="ml-2 font-medium">{engine.userDemographics.educationLevel}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">流量信息</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">全球排名:</span>
                  <span className="ml-2 font-medium">{engine.trafficInfo.globalRanking}</span>
                </div>
                <div>
                  <span className="text-gray-600">月访问量:</span>
                  <span className="ml-2 font-medium">{engine.trafficInfo.monthlyVisitors}</span>
                </div>
                <div>
                  <span className="text-gray-600">活跃用户:</span>
                  <span className="ml-2 font-medium">{engine.trafficInfo.activeUsers}</span>
                </div>
                <div>
                  <span className="text-gray-600">搜索查询:</span>
                  <span className="ml-2 font-medium">{engine.trafficInfo.searchQueries}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages and Disadvantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-4">平台优势</h3>
              <ul className="space-y-2">
                {engine.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-4">平台劣势</h3>
              <ul className="space-y-2">
                {engine.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Revenue and Technology */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">收入模式</h3>
              <div className="flex flex-wrap gap-2">
                {engine.revenueModel.map((model, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-700"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                {engine.technologyStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Advertising and Privacy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">广告平台</h3>
              <div className="flex flex-wrap gap-2">
                {engine.advertisingPlatform.map((platform, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-50 text-orange-700"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">隐私功能</h3>
              <div className="flex flex-wrap gap-2">
                {engine.privacyFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages and Competitors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">支持语言</h3>
              <div className="flex flex-wrap gap-2">
                {engine.supportedLanguages.map((language, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">主要竞争对手</h3>
              <div className="flex flex-wrap gap-2">
                {engine.competitors.map((competitor, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-50 text-red-700"
                  >
                    {competitor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Developments and Market Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">最新发展</h3>
              <ul className="space-y-2">
                {engine.recentDevelopments.map((development, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{development}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">市场地位</h3>
              <p className="text-gray-700 mb-4">{engine.marketPosition}</p>
              
              <h4 className="text-md font-semibold text-gray-900 mb-2">合作伙伴</h4>
              <div className="flex flex-wrap gap-2">
                {engine.partnerships.map((partner, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngineDetail; 