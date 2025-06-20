import React from "react";

const features = [
  {
    title: "Prevent Fraud & Unauthorized Access",
    description:
      "Keepar actively monitors wallet integrity and deters unauthorized attempts, reducing the risk of phishing, keylogging, or rogue wallet access.",
    dark: true,
    iconGradient: "from-orange-400 to-red-500",
  },
  {
    title: "MEV Defense",
    description:
      "Integrated MEV defense protects against sandwich attacks and front-running by alerting users and implementing proactive transaction shielding.",
    dark: false,
    iconGradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Multi-Heir Wallets",
    description:
      "Pre-designate multiple trusted heirs for seamless asset transition upon death or prolonged inactivity — without compromising wallet security.",
    dark: false,
    iconGradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Posthumous Smart Triggers",
    description:
      "Deploy smart contract automations that execute wills, transfer tokens to loved ones or next wallet — even after you're gone. Crypto legacy secured.",
    dark: false,
    iconGradient: "from-green-400 to-emerald-600",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full py-32 bg-white px-6 md:px-24">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 text-center max-w-3xl">
          Bulletproof Security Meets Legacy Planning
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;