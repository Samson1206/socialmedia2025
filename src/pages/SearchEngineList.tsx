import React, { useState, useMemo } from 'react';
import { searchEngines, SearchEngine } from '../data/searchEngines';
import SearchEngineCard from '../components/SearchEngineCard';
import SearchEngineDetail from '../components/SearchEngineDetail';

const SearchEngineList: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = useState<SearchEngine | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  // 1. 删除智能筛选和排序方式，仅保留用户规模筛选
  // 删除筛选区相关JSX，只保留用户规模排序按钮
  const [sortBy, setSortBy] = useState<string>('default');

  // 解析用户规模数字
  const parseUserScale = (monthlyVisitors: string): number => {
    // 处理 "90亿+" 格式
    const billionMatch = monthlyVisitors.match(/(\d+(?:\.\d+)?)亿\+?/)
    if (billionMatch) {
      return parseFloat(billionMatch[1]) * 100000000
    }
    
    // 处理 "15亿+" 格式
    const billionMatch2 = monthlyVisitors.match(/(\d+)亿\+/)
    if (billionMatch2) {
      return parseFloat(billionMatch2[1]) * 100000000
    }
    
    // 处理 "10亿+" 格式
    const billionMatch3 = monthlyVisitors.match(/(\d+)亿\+/)
    if (billionMatch3) {
      return parseFloat(billionMatch3[1]) * 100000000
    }
    
    // 处理 "5亿+" 格式
    const billionMatch4 = monthlyVisitors.match(/(\d+)亿\+/)
    if (billionMatch4) {
      return parseFloat(billionMatch4[1]) * 100000000
    }
    
    // 处理 "3亿+" 格式
    const billionMatch5 = monthlyVisitors.match(/(\d+)亿\+/)
    if (billionMatch5) {
      return parseFloat(billionMatch5[1]) * 100000000
    }
    
    // 处理 "1亿+" 格式
    const billionMatch6 = monthlyVisitors.match(/(\d+)亿\+/)
    if (billionMatch6) {
      return parseFloat(billionMatch6[1]) * 100000000
    }
    
    return 0
  }

  // 筛选和搜索逻辑
  const filteredEngines = useMemo(() => {
    let filtered = searchEngines.filter(engine => {
      const matchesSearch = engine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           engine.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           engine.headquarters.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           engine.mainMarkets.some(market => market.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // 用户规模筛选
      const userScaleMatch = engine.monthlyVisitors.toLowerCase().includes('亿+');
      const userScaleValue = userScaleMatch ? parseFloat(engine.monthlyVisitors.replace('亿+', '')) * 100000000 : 0;
      const isUserScaleSelected = userScaleValue > 0; // 假设用户规模筛选只针对有具体数值的引擎

      return matchesSearch && isUserScaleSelected;
    });

    // 排序逻辑
    switch (sortBy) {
      case 'userScaleDesc':
        filtered = [...filtered].sort((a, b) => {
          const aNum = parseUserScale(a.monthlyVisitors);
          const bNum = parseUserScale(b.monthlyVisitors);
          return bNum - aNum;
        });
        break;
      case 'userScaleAsc':
        filtered = [...filtered].sort((a, b) => {
          const aNum = parseUserScale(a.monthlyVisitors);
          const bNum = parseUserScale(b.monthlyVisitors);
          return aNum - bNum;
        });
        break;
      case 'marketShareDesc':
        filtered = [...filtered].sort((a, b) => {
          const aShare = parseFloat(a.marketShare.global.replace('%', ''));
          const bShare = parseFloat(b.marketShare.global.replace('%', ''));
          return bShare - aShare;
        });
        break;
      case 'foundedYearDesc':
        filtered = [...filtered].sort((a, b) => b.foundedYear - a.foundedYear);
        break;
      case 'foundedYearAsc':
        filtered = [...filtered].sort((a, b) => a.foundedYear - b.foundedYear);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, sortBy]);

  const handleEngineClick = (engine: SearchEngine) => {
    setSelectedEngine(engine);
  };

  const handleCloseDetail = () => {
    setSelectedEngine(null);
  };

  const engineTypes = ['全部', '综合搜索', '垂直搜索', '元搜索', '专业搜索'];

  // 获取用户市场分布数据
  const getUserDistributionData = () => {
    const distribution: Record<string, number> = {};
    
    searchEngines.forEach(engine => {
      Object.entries(engine.userDistribution).forEach(([country, percentage]) => {
        if (distribution[country]) {
          distribution[country] += percentage;
        } else {
          distribution[country] = percentage;
        }
      });
    });

    return Object.entries(distribution)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                全球搜索引擎统计
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              探索全球主流搜索引擎，了解各平台的市场份额、用户画像、技术特点等信息，为数字营销和SEO策略提供数据支持。
            </p>
          </div>
        </div>
      </div>

      {/* 搜索 */}
      <div className="flex justify-center mb-8">
        <div className="relative max-w-lg w-full">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-1 shadow-lg border border-blue-100 search-focus">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索引擎名称、描述、总部或市场..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 placeholder-gray-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">🔍</span>
                </div>
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 用户规模筛选排序区（图片风格，左右边距对齐） */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-green-50 rounded-2xl shadow p-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-3">
              {/* 柱状图图标，可用lucide-react或svg */}
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg>
            </div>
            <span className="text-lg font-bold text-green-900">用户规模筛选</span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setSortBy('default')}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${sortBy === 'default' ? 'bg-green-500 text-white shadow' : 'bg-white text-green-700 border border-green-200 hover:bg-green-100'}`}
            >
              默认排序
            </button>
            <button
              onClick={() => setSortBy('userScaleDesc')}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${sortBy === 'userScaleDesc' ? 'bg-green-500 text-white shadow' : 'bg-white text-green-700 border border-green-200 hover:bg-green-100'}`}
            >
              用户规模（高→低）
            </button>
            <button
              onClick={() => setSortBy('userScaleAsc')}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${sortBy === 'userScaleAsc' ? 'bg-green-500 text-white shadow' : 'bg-white text-green-700 border border-green-200 hover:bg-green-100'}`}
            >
              用户规模（低→高）
            </button>
          </div>
        </div>
      </div>

      {/* Engine Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredEngines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEngines.map((engine) => (
              <SearchEngineCard
                key={engine.id}
                engine={engine}
                onClick={() => handleEngineClick(engine)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的搜索引擎</h3>
            <p className="text-gray-500">
              请尝试调整搜索条件或筛选器
            </p>
          </div>
        )}
      </div>



      {/* Search Engine Detail Modal */}
      {selectedEngine && (
        <SearchEngineDetail
          engine={selectedEngine}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default SearchEngineList; 