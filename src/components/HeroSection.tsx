import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-50" />
      
      <div className="flex-1 max-w-2xl relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl font-bold mb-8 text-text leading-tight">
            Your Crypto.<br />
            Protected Today.<br />
            Prepared for Tomorrow.
          </h1>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            Prevent fraud, detect attacks, and secure your digital legacy with next-gen wallet protection.
          </p>
          <div className="flex items-center space-x-6 mb-12">
            <button className="btn-primary text-lg transform hover:scale-105">
              Download App
            </button>
          </div>
          <div className="flex space-x-16">
            <div className="text-center">
              <div className="font-bold text-3xl text-text">128k+</div>
              <div className="text-text-secondary mt-1">Downloads</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-text">190k+</div>
              <div className="text-text-secondary mt-1">Active Users</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-text">129k+</div>
              <div className="text-text-secondary mt-1">Active Users</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 ml-12">
        <div className="w-[500px] h-[500px] bg-dark-light rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20" />
          <div className="w-96 h-96 gradient-bg rounded-full animate-pulse-slow shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;