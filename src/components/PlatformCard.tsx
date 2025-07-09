import { Platform } from '../data/platforms'

interface PlatformCardProps {
  platform: Platform
  onClick: () => void
}

const PlatformCard = ({ platform, onClick }: PlatformCardProps) => {
  return (
    <div 
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-300 hover:-translate-y-1 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm group-hover:border-blue-300 transition-colors">
              <img 
                src={platform.logo}
                alt={platform.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (platform.logoUrl && target.src !== window.location.origin + platform.logoUrl && !target.dataset.fallback) {
                    target.src = platform.logoUrl;
                    target.dataset.fallback = '1';
                  } else {
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                  }
                }}
              />
              <span className="text-2xl font-bold text-gray-400 hidden">{platform.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {platform.name}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                {platform.businessType.split('/').map((type, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-xs rounded-full font-semibold shadow-sm ${
                      type === 'B2B' 
                        ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300' 
                        : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300'
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed min-h-[3rem]">
            {platform.description}
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm p-2 bg-blue-50 rounded-lg">
              <span className="text-blue-700 font-medium">用户规模</span>
              <span className="font-bold text-blue-900">{platform.userScale}</span>
            </div>
            
            <div className="flex items-center justify-between text-sm p-2 bg-green-50 rounded-lg">
              <span className="text-green-700 font-medium">市场覆盖</span>
              <span className="font-bold text-green-900">{platform.marketCoverage.length}个地区</span>
            </div>
            
            <div className="flex items-center justify-between text-sm p-2 bg-purple-50 rounded-lg">
              <span className="text-purple-700 font-medium">用户画像</span>
              <span className="font-medium text-purple-900 text-xs max-w-32 truncate" title={platform.userProfile}>
                {platform.userProfile}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {platform.features.slice(0, 3).map((item: string, index: number) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-lg border border-gray-300 font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
            {platform.features.length > 3 && (
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs rounded-lg border border-blue-300 font-medium shadow-sm">
                +{platform.features.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformCard 