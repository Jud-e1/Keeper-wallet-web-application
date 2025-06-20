import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <span className="font-bold text-xl">Keeper</span>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
          Download App
        </button>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your Crypto.<br />
              Protected Today.<br />
              Prepared for Tomorrow.
            </h1>
            <p className="text-gray-600 mb-8">
              Protect, track, secure and take your digital assets to the next level with our smart protection.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors">
                Download App
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 rounded-3xl overflow-hidden">
              <img 
                src="/path-to-your-wave-image.png" 
                alt="Wave Pattern"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Bulletproof Security Meets Legacy Planning</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
            <h3 className="font-bold mb-2">Phishing-Proof & Unauthorized Access</h3>
            <p className="text-gray-600">Advanced security features to protect your assets</p>
          </div>
          {/* Add more feature cards similarly */}
        </div>
      </section>
    </div>
  )
}

export default App