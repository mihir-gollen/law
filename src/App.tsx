import React, { useState } from 'react';
import { Scale, Notebook as Robot, ArrowRight, Building2, Heart, Home, User, Clock, DollarSign, Shield, Smile } from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => {
    // In a real app, this would handle authentication
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleTryLAI = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      // In a real app, this would navigate to the AI chat interface
      alert('Navigating to AI Assistant...');
    }
  };

  const handleServiceClick = (service: string) => {
    // In a real app, this would navigate to the specific service page
    alert(`Navigating to ${service} service page...`);
  };

  const handleFeatureClick = (feature: string) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      // In a real app, this would trigger the specific feature
      alert(`Activating feature: ${feature}`);
    }
  };

  const handleNavigation = (section: string) => {
    // In a real app, this would use proper routing
    alert(`Navigating to ${section} page...`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('home')}>
            <Scale className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">LAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('home')} className="text-gray-600 hover:text-red-600">Home</button>
            <button onClick={() => handleNavigation('services')} className="text-gray-600 hover:text-red-600">Services</button>
            <button onClick={() => handleNavigation('about')} className="text-gray-600 hover:text-red-600">About</button>
            <button onClick={() => handleNavigation('contact')} className="text-gray-600 hover:text-red-600">Contact</button>
          </div>
          <button 
            onClick={() => setShowLoginModal(true)} 
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            {isLoggedIn ? 'Dashboard' : 'Login'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
            alt="Law Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to LAI - Your Smart Legal Assistant
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the future of legal assistance with our AI-powered platform
            </p>
            <button 
              onClick={handleTryLAI}
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition"
            >
              TRY OUT LAI
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trust your future & Ensure peace</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered legal assistant provides accurate, instant guidance for all your legal needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: 'Immigration', color: 'blue' },
              { icon: Heart, title: 'Matrimonial', color: 'red' },
              { icon: Home, title: 'Property', color: 'green' },
              { icon: User, title: 'Personal', color: 'purple' }
            ].map((service, index) => (
              <div 
                key={index} 
                onClick={() => handleServiceClick(service.title)}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                <service.icon className={`h-12 w-12 text-${service.color}-500 mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">Expert guidance for all your {service.title.toLowerCase()} legal matters</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="grid gap-4">
                {[
                  { text: "ASK YOUR QUESTIONS", icon: ArrowRight },
                  { text: "GET AI-POWERED INSIGHTS", icon: Robot },
                  { text: "INSTANT ADVICE!", icon: Clock }
                ].map((feature, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleFeatureClick(feature.text)}
                    className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition w-full"
                  >
                    <feature.icon className="h-6 w-6 text-red-600" />
                    <span className="font-semibold">{feature.text}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Robot className="h-64 w-64 text-red-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Simplifying Legal Guidance for Everyone</h2>
            <p className="text-gray-600 text-lg">
              Our advanced AI model understands complex legal queries and provides accurate, actionable insights in simple terms.
              Get instant answers to your legal questions, 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: "Economic", desc: "Affordable legal assistance" },
              { icon: Clock, title: "Time", desc: "Instant responses 24/7" },
              { icon: Shield, title: "Security", desc: "Completely confidential" },
              { icon: Smile, title: "Satisfaction", desc: "Trusted by thousands" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Login to LAI</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 LAI - Legal AI Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;