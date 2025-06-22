const SupportedChains = () => {
  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="relative w-full max-w-screen-xl h-[600px] px-4">
       
       
        {/* SVG with boundary and shadow */}
        <div className="absolute inset-0 border border-black/10 shadow-lg rounded-[40px] overflow-hidden" style={{ zIndex: 1 }}>
          <svg 
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path d="M 200 300 L 1000 300" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
            <path d="M 200 300 Q 160 240 140 120" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
            <path d="M 200 300 Q 160 360 140 480" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
            <path d="M 1000 300 Q 1040 240 1060 120" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
            <path d="M 1000 300 Q 1040 360 1060 480" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
            <path d="M 600 100 L 600 280" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
            <path d="M 600 500 L 600 320" stroke="#93c5fd" strokeWidth="2" strokeDasharray="8,8" fill="none" />
          </svg>
        </div>
        {/* Center label */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-600 text-lg font-semibold py-4 px-8 rounded-full border border-blue-200 shadow-sm" style={{ zIndex: 10 }}>
          Supported Chains
        </div>

        {/* Adjusted chain icon positions */}
        <div className="absolute top-20 left-32 z-10">
          <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <img src="/bitcoin.png" alt="Bitcoin" className="w-12 h-12" />
          </div>
        </div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <img src="/ethereum.png" alt="Ethereum" className="w-12 h-12" />
          </div>
        </div>

        <div className="absolute top-20 right-32 z-10">
          <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <img src="/solana.png" alt="Solana" className="w-12 h-12" />
          </div>
        </div>

        <div className="absolute bottom-20 left-32 z-10">
          <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <img src="/liquid.png" alt="Liquid" className="w-12 h-12" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <img src="/6548343bfb913dc56cf82b3c780dcba2646942ea.png" alt="Sei" className="w-12 h-12" />
          </div>
        </div>

        <div className="absolute bottom-20 right-32 z-10">
          <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center">
            <img src="/7e31821ccb607166ba780cefd094f1e29e2d8c84.png" alt="Polygon" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedChains;
