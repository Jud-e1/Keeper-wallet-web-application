import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mt-32 sm:mt-20 md:mt-24 relative w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-7xl w-full text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight text-gray-900">
              Your Crypto.<br />
              Protected Today.<br />
              Prepared for Tomorrow.
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Prevent fraud, detect attacks, and secure your digital legacy with next-gen wallet protection.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-16">
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base md:text-lg">
                Download App
              </button>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm sm:text-base md:text-lg">Available on</span>
                <img src="https://img.icons8.com/?size=100&id=63788&format=png&color=000000" alt="iOS" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                <span className="text-gray-400 text-lg font-light">+</span>
                <img src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000" alt="Android" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
              </div>
            </div>
           
           
                 {/* Stats */}
            <div className="flex flex-row justify-center lg:justify-start gap-4 xs:gap-6 sm:gap-8 lg:gap-16 overflow-x-auto pb-2">
              <div className="text-center lg:text-left flex-shrink-0">
                <div className="flex items-center justify-center lg:justify-start mb-1.5 xs:mb-2 sm:mb-3">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-100 rounded-lg mr-2 xs:mr-3 flex items-center justify-center">
                    <img src="https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png" alt="Downloads" className="w-2.5 xs:w-3 sm:w-4 md:w-5 h-2.5 xs:h-3 sm:h-4 md:h-5" /> 
                  </div>
                </div>
                <div className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-900 mb-0.5 xs:mb-1">128k+</div>
                <div className="text-gray-500 text-[10px] xs:text-xs sm:text-sm md:text-base">Downloads</div>
              </div>
              
              <div className="text-center lg:text-left flex-shrink-0">
                <div className="flex items-center justify-center lg:justify-start mb-1.5 xs:mb-2 sm:mb-3">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-100 rounded-lg mr-2 xs:mr-3 flex items-center justify-center">
                    <img src="https://img.icons8.com/?size=100&id=22980&format=png&color=000000" alt="Users" className="w-2.5 xs:w-3 sm:w-4 md:w-5 h-2.5 xs:h-3 sm:h-4 md:h-5" />                  
                  </div>
                </div>
                <div className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-900 mb-0.5 xs:mb-1">196k+</div>
                <div className="text-gray-500 text-[10px] xs:text-xs sm:text-sm md:text-base">Active Users</div>
              </div>
              
              <div className="text-center lg:text-left flex-shrink-0">
                <div className="flex items-center justify-center lg:justify-start mb-1.5 xs:mb-2 sm:mb-3">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-100 rounded-lg mr-2 xs:mr-3 flex items-center justify-center">
                    <img src="https://img.icons8.com/?size=100&id=bep_ZUj5TddJ&format=png&color=000000" alt="Users" className="w-2.5 xs:w-3 sm:w-4 md:w-5 h-2.5 xs:h-3 sm:h-4 md:h-5" />    
                  </div>
                </div>
                <div className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-900 mb-0.5 xs:mb-1">129k+</div>
                <div className="text-gray-500 text-[10px] xs:text-xs sm:text-sm md:text-base">Active Users</div>
              </div>
            </div>            
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="flex-1 max-w-[280px] xs:max-w-sm sm:max-w-md lg:max-w-lg w-full mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-full">
              {/* Phone frame */}
              <div className="w-full aspect-[620/600] rounded-3xl p-2">
                {/* Screen */}
                <div className="w-full h-full bg-gray-900 rounded-2xl relative overflow-hidden">
                  {/* Main image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/image-Photoroom (8).png" 
                      alt="App Screenshot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;