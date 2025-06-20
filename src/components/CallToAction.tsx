import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#f7f8fa] flex flex-col items-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-12">
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Start securing your crypto assets now.</h2>
          <p className="text-gray-500 mb-8 text-lg">Download Keepar and protect your assets from threats — today, tomorrow, and beyond.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors">Download App</button>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          {/* Placeholder for illustration */}
          <div className="w-80 h-48 bg-[#18181b] rounded-2xl flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 