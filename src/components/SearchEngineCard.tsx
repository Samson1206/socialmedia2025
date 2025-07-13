import React from 'react';
import { SearchEngine } from '../data/searchEngines';

interface SearchEngineCardProps {
  engine: SearchEngine;
  onClick: () => void;
}

const SearchEngineCard: React.FC<SearchEngineCardProps> = ({ engine, onClick }) => {
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
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div className="p-6">
        {/* Logo and Name */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 mr-4 flex-shrink-0">
            <img
              src={engine.logo}
              alt={`${engine.name} logo`}
              className="w-full h-full object-contain"
              onError={handleLogoError}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {engine.name}
            </h3>
            <div className="flex items-center mt-1">
              <div className="flex items-center space-x-2 mb-2 whitespace-nowrap overflow-hidden">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${getTypeColor(engine.type)}`}>{engine.type}</span>
                <span className="text-gray-600 text-xs truncate max-w-[120px]">{engine.headquarters}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {engine.description}
        </p>

        {/* Key Info */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">月访问量:</span>
            <span className="font-medium text-gray-900">{engine.monthlyVisitors}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">全球份额:</span>
            <span className="font-medium text-gray-900">{engine.marketShare.global}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">成立年份:</span>
            <span className="font-medium text-gray-900">{engine.foundedYear}</span>
          </div>
        </div>

        {/* Main Markets */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">主要市场:</h4>
          <div className="flex flex-wrap gap-1">
            {engine.mainMarkets.slice(0, 4).map((market, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
              >
                {market}
              </span>
            ))}
            {engine.mainMarkets.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700">
                +{engine.mainMarkets.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">主要功能:</h4>
          <div className="flex flex-wrap gap-1">
            {Object.entries(engine.features)
              .filter(([_, enabled]) => enabled)
              .slice(0, 3)
              .map(([feature, _], index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-blue-50 text-blue-700"
                >
                  {feature.replace('Search', '搜索')}
                </span>
              ))}
            {Object.values(engine.features).filter(Boolean).length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-blue-50 text-blue-700">
                +{Object.values(engine.features).filter(Boolean).length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngineCard; 