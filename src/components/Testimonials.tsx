import React from "react";

const testimonials = [
  {
    quote:
      "Keepar warned me of a potential sandwich attack and auto-shielded the transaction. No other wallet has ever done that for me. Keepar didn't just protect my funds — it saved me from getting wrecked.",
    name: "Lena A.",
    role: "Crypto Investor & DeFi Trader",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    gradient: "from-blue-400/10 to-purple-400/10",
  },
  {
    quote:
      "Setting up my wallet with multi-heir access and smart legacy triggers gave me peace of mind I didn't think was possible in Web3. Now I know my family is protected — no matter what.",
    name: "Darius O.",
    role: "Crypto Investor & DeFi Trader",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    gradient: "from-emerald-400/10 to-blue-400/10",
  },
  {
    quote:
      "Keepar's constant monitoring and defense system gave me a level of security I didn't think was possible with a hardware wallet. But the best part? It all just works in the background.",
    name: "Emeka C.",
    role: "Security Analyst & Crypto Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    gradient: "from-orange-400/10 to-red-400/10",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-32 bg-gray-50 px-6 md:px-24">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 text-center max-w-3xl">
          Trusted by Web3 Pioneers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t.quote}</p>
            <div className="flex items-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;