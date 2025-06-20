import React from "react";

const chainIcons = [
  { color: "bg-orange-400", icon: "O" },
  { color: "bg-blue-500", icon: "B" },
  { color: "bg-purple-500", icon: "P" },
  { color: "bg-yellow-400", icon: "Y" },
  { color: "bg-black", icon: "K" },
];

const SupportedChains: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#f7f8fa] flex flex-col items-center px-4">
      <div className="mb-6">
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Supported Chains</span>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl h-72 flex items-center justify-center bg-white rounded-2xl shadow-lg">
          {/* Central node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow">Supported Chains</div>
          </div>
          {/* Chain nodes */}
          <div className="absolute left-1/2 top-10 -translate-x-1/2">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">O</div>
          </div>
          <div className="absolute left-10 top-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">B</div>
          </div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">P</div>
          </div>
          <div className="absolute left-28 bottom-10">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">Y</div>
          </div>
          <div className="absolute right-28 bottom-10">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl shadow">K</div>
          </div>
          {/* Connecting lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full z-0">
            <line x1="50%" y1="40" x2="50%" y2="50%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="7%" y2="50%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="93%" y2="50%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="20%" y2="90%" stroke="#e5e7eb" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="90%" stroke="#e5e7eb" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SupportedChains; 