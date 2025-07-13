import React, { useEffect } from 'react';
import { EcommercePlatform } from '../data/ecommercePlatforms';

interface EcommercePlatformDetailProps {
  platform: EcommercePlatform;
  onClose: () => void;
}

const EcommercePlatformDetail: React.FC<EcommercePlatformDetailProps> = ({ platform, onClose }) => {
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
      case 'B2B':
        return 'bg-blue-100 text-blue-800';
      case 'B2C':
        return 'bg-green-100 text-green-800';
      case '综合':
        return 'bg-purple-100 text-purple-800';
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
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="w-10 h-10 object-contain"
                  onError={handleLogoError}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">{platform.name}</h2>
                <div className="flex items-center space-x-2 mt-1 whitespace-nowrap overflow-hidden">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(platform.type)}`}>{platform.type}</span>
                  <span className="text-gray-600 truncate">{platform.headquarters}</span>
                  <span className="text-gray-600 truncate">成立于 {platform.foundedYear}</span>
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
                  <a href={platform.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline">
                    {platform.website}
                  </a>
                </div>
                <div>
                  <span className="text-gray-600">月访问量:</span>
                  <span className="ml-2 font-medium">{platform.monthlyVisitors}</span>
                </div>
                <div>
                  <span className="text-gray-600">全球排名:</span>
                  <span className="ml-2 font-medium">{platform.trafficInfo.globalRanking}</span>
                </div>
                <div>
                  <span className="text-gray-600">活跃用户:</span>
                  <span className="ml-2 font-medium">{platform.trafficInfo.activeUsers}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">主要市场</h3>
              <div className="flex flex-wrap gap-2">
                {platform.mainMarkets.map((market, index) => (
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

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">平台介绍</h3>
            <p className="text-gray-700 leading-relaxed">{platform.description}</p>
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
                  {Object.entries(platform.userDistribution)
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
                  显示全部 {Object.keys(platform.userDistribution).length} 个地区
                </div>
              </div>

              {/* 详细数据表格 */}
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
                    .map(([country, percentage], index) => {
                      // 估算用户数量（基于月访问量）
                      const visitorsText = platform.monthlyVisitors;
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

          {/* Fees and Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">费用结构</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">佣金比例:</span>
                  <span className="ml-2 font-medium">{platform.sellerFees.commission}</span>
                </div>
                <div>
                  <span className="text-gray-600">上架费用:</span>
                  <span className="ml-2 font-medium">{platform.sellerFees.listingFee}</span>
                </div>
                <div>
                  <span className="text-gray-600">月费:</span>
                  <span className="ml-2 font-medium">{platform.sellerFees.monthlyFee}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">入驻要求</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">营业执照:</span>
                  <span className="ml-2 font-medium">{platform.entryRequirements.businessLicense ? '需要' : '不需要'}</span>
                </div>
                <div>
                  <span className="text-gray-600">最低销售额:</span>
                  <span className="ml-2 font-medium">{platform.entryRequirements.minimumSales}</span>
                </div>
                <div>
                  <span className="text-gray-600">产品要求:</span>
                  <span className="ml-2 font-medium">{platform.entryRequirements.productRequirements}</span>
                </div>
                <div>
                  <span className="text-gray-600">审核时间:</span>
                  <span className="ml-2 font-medium">{platform.entryRequirements.approvalTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories and Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">适合品类</h3>
              <div className="flex flex-wrap gap-2">
                {platform.suitableCategories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">平台特色</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-600">移动应用:</span>
                  <span className="ml-2">{platform.mobileApp ? '✓' : '✗'}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600">API支持:</span>
                  <span className="ml-2">{platform.apiSupport ? '✓' : '✗'}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600">多语言:</span>
                  <span className="ml-2">{platform.multiLanguage ? '✓' : '✗'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages and Disadvantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-4">平台优势</h3>
              <ul className="space-y-2">
                {platform.advantages.map((advantage, index) => (
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
                {platform.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span className="text-gray-700">{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment and Shipping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">支付方式</h3>
              <div className="flex flex-wrap gap-2">
                {platform.paymentMethods.map((method, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">物流选项</h3>
              <div className="flex flex-wrap gap-2">
                {platform.shippingOptions.map((option, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Marketing and Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">营销工具</h3>
              <div className="flex flex-wrap gap-2">
                {platform.marketingTools.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">数据分析</h3>
              <div className="flex flex-wrap gap-2">
                {platform.analyticsTools.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-50 text-orange-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Service and Currency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">客户服务</h3>
              <p className="text-gray-700">{platform.customerService}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">支持货币</h3>
              <div className="flex flex-wrap gap-2">
                {platform.currencySupport.map((currency, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {currency}
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

export default EcommercePlatformDetail; 