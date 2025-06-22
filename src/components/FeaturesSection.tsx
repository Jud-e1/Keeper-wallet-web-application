import React from "react";

const features = [
  {
    title: "Prevent Fraud & Unauthorized Access",
    description:
      "Keepar actively monitors wallet integrity and deters unauthorized attempts, reducing the risk of phishing, keylogging, or rogue wallet access.",
    dark: true,
    iconGradient: "from-orange-400 to-red-500",
    badge: "Monitored & Protected"
  },
  {
    title: "MEV Defense",
    description:
      "Integrated MEV defense protects against sandwich attacks and front-running by alerting users and implementing proactive transaction shielding.",
    dark: false,
    iconGradient: "from-blue-400 to-blue-600",
    badge: "Shielded & Alerted"
  },
  {
    title: "Multi-Heir Wallets",
    description:
      "Pre-designate multiple trusted heirs for seamless asset transition upon death or prolonged inactivity — without compromising wallet security.",
    dark: false,
    iconGradient: "from-purple-400 to-purple-600",
    badge: "Assigned & Trusted"
  },
  {
    title: "Posthumous Smart Triggers",
    description:
      "Deploy smart contract automations that execute wills, transfer tokens to loved ones or next wallet — even after you're gone. Crypto legacy secured.",
    dark: false,
    iconGradient: "from-green-400 to-emerald-600",
    badge: "Automated & Honored"
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full py-20 bg-gray-50 px-6 md:px-24">
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium mb-6">
          Our Features
        </div>
        <h2 className="text-xl lg:text-5xl font-bold text-gray-900 text-center max-w-5xl leading-tight">
          Bulletproof Security Meets Legacy Planning
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`relative rounded-3xl p-8 lg:p-12 transition-all duration-300 hover:shadow-xl h-full overflow-hidden ${
              feature.dark 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-900'
            }`}
          >
            {/* Enhanced Grid Pattern Background with Fading */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute inset-0 transform scale-150"
                style={{
                  backgroundImage: `
                    linear-gradient(${feature.dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'} 1px, transparent 1px),
                    linear-gradient(90deg, ${feature.dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'} 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  maskImage: `
                    radial-gradient(ellipse 60% 40% at center 30%, 
                      rgba(0,0,0,0.6) 0%, 
                      rgba(0,0,0,0.4) 25%, 
                      rgba(0,0,0,0.2) 45%, 
                      rgba(0,0,0,0.1) 65%, 
                      transparent 85%
                    )
                  `,
                  WebkitMaskImage: `
                    radial-gradient(ellipse 60% 40% at center 30%, 
                      rgba(0,0,0,0.6) 0%, 
                      rgba(0,0,0,0.4) 25%, 
                      rgba(0,0,0,0.2) 45%, 
                      rgba(0,0,0,0.1) 65%, 
                      transparent 85%
                    )
                  `
                }}
              />
            </div>
            
            {/* Icon Container */}
            <div className="flex justify-center mb-8 relative z-10">
              <div className="relative">
                {idx === 0 && (
                  <div className="w-40 h-40 flex items-center justify-center relative">
                    <img 
                      src="/image-Photoroom (9).png" 
                      alt="Security Shield Icon"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                )}
                {idx === 1 && (
                  <div className="w-40 h-40 flex items-center justify-center relative">
                    <img 
                      src="/image-Photoroom (10).png" 
                      alt="MEV Defense Icon"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                )}
                {idx === 2 && (
                  <div className="w-40 h-40 flex items-center justify-center relative">
                    <img 
                      src="/image-Photoroom (11).png" 
                      alt="Multi-Heir Wallets Icon"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                )}
                {idx === 3 && (
                  <div className="w-40 h-40 flex items-center justify-center relative">
                    <img 
                      src="/image-Photoroom (12).png" 
                      alt="Smart Triggers Icon"
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                )}
              </div>
            </div>

            
            {/* Badge */}
            <div className="flex justify-center mb-8 relative z-10">
              <span className={`px-6 py-3 rounded-full text-sm font-medium ${
                feature.dark 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {feature.badge}
              </span>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <h3 className={`text-3xl lg:text-4xl font-bold mb-8 leading-tight ${
                feature.dark ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-xl leading-relaxed ${
                feature.dark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;