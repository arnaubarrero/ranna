"use client"
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { TrendingUp, Shield, Zap, Globe, Gem, Target, ChevronLeft, ChevronRight, Calculator, Wallet, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-green-400/30 shadow-2xl shadow-green-400/10' : 'bg-black/80 backdrop-blur-lg'
      }`}>
      <nav className="container mx-auto px-6 flex justify-between items-center py-4">
        <div className="flex items-center gap-4 group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            RANNA TOKEN
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {['Home', 'Features', 'Calculator', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-white/90 hover:text-green-400 transition-all duration-300 font-medium group py-2"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-green-400 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Connect Wallet Button */}
        <button
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-3 rounded-full font-bold hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-300 group relative overflow-hidden"
          onClick={() => Swal.fire({
            title: 'Estamos trabajando en ello',
            background: '#000',
            color: '#22c55e',
            icon: 'info',
            iconColor: '#22c55e',
            confirmButtonColor: '#22c55e',
            confirmButtonText: 'Cerrar',
            customClass: {
              popup: 'rounded-2xl',
              title: 'font-bold',
              confirmButton: 'font-bold',
            },
          })}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Wallet size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            Connect Wallet
          </span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-green-400/30 md:hidden">
            <ul className="py-4">
              {['Home', 'Features', 'Calculator', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-6 py-3 text-white hover:text-green-400 hover:bg-green-400/10 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-4">
              <button
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-3 rounded-full font-bold"
                onClick={() => Swal.fire({
                  title: 'Estamos trabajando en ello',
                  background: '#000',
                  color: '#22c55e',
                  icon: 'info',
                  iconColor: '#22c55e',
                  confirmButtonColor: '#22c55e',
                  confirmButtonText: 'Cerrar',
                  customClass: {
                    popup: 'rounded-2xl',
                    title: 'font-bold',
                    confirmButton: 'font-bold',
                  },
                })}
              >
                <Wallet size={18} />
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Floating elements component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default function App() {
  const [investment, setInvestment] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<{ home: boolean; features: boolean; calculator: boolean }>({
    home: false,
    features: false,
    calculator: false,
  });
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Fijo para SSR

  const features = [
    {
      icon: TrendingUp,
      title: "Guaranteed Returns",
      description: "Get 10% monthly returns on your investment consistently and predictably.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Total Security",
      description: "Advanced blockchain technology that guarantees the security of your funds.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Automatic Payments",
      description: "Receive your earnings automatically every month without complications.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Invest from anywhere in the world 24 hours a day.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Gem,
      title: "No Limits",
      description: "There are no minimum or maximum limits for your investments.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "All transactions are public and verifiable on the blockchain.",
      color: "from-teal-400 to-green-500"
    }
  ];

  const calculateReturns = (amount: number) => {
    if (!amount || amount <= 0) return null;
    return {
      monthly: amount * 0.10,
      yearly: amount * 0.10 * 12
    };
  };

  const returns = calculateReturns(parseFloat(investment));

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Actualiza itemsPerSlide solo en cliente
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1024) setItemsPerSlide(3);
      else if (window.innerWidth >= 768) setItemsPerSlide(2);
      else setItemsPerSlide(1);
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(features.length / itemsPerSlide));
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length, itemsPerSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(features.length / itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(features.length / itemsPerSlide) - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(74 222 128) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Header />
      <FloatingElements />

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-28 pb-20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-400/5 via-green-500/5 to-transparent rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div
              className={`flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              data-animate
              id="home"
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    <span className="block bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                      The Future of
                    </span>
                    <span className="block bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
                      Digital Investments
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                    Join the crypto revolution with Ranna Token and get
                    <span className="text-green-400 font-semibold"> consistent returns</span> month after month.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-300 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 p-6 rounded-full text-center">
                    <h2 className="text-2xl md:text-3xl font-black text-black tracking-wide">
                      10% MONTHLY GUARANTEED
                    </h2>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    className="group relative bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/40 transition-all duration-300 overflow-hidden"
                    onClick={() => Swal.fire({
                      title: 'Estamos trabajando en ello',
                      background: '#000',
                      color: '#22c55e',
                      icon: 'info',
                      iconColor: '#22c55e',
                      confirmButtonColor: '#22c55e',
                      confirmButtonText: 'Cerrar',
                      customClass: {
                        popup: 'rounded-2xl',
                        title: 'font-bold',
                        confirmButton: 'font-bold',
                      },
                    })}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <TrendingUp className="group-hover:scale-110 transition-transform duration-300" size={24} />
                      Invest Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>

                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-transparent to-green-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>

                  {/* Image Container */}
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-green-400/10 to-emerald-500/10 backdrop-blur-sm">
                    <img
                      src="/rana.png"
                      alt="Ranna Token"
                      className="w-full h-full object-cover rounded-full filter brightness-110 contrast-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Carousel Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              data-animate
              id="features"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
                  Why Choose Ranna Token?
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {Array.from({ length: Math.ceil(features.length / itemsPerSlide) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {features
                          .slice(
                            slideIndex * itemsPerSlide,
                            (slideIndex + 1) * itemsPerSlide
                          )
                          .map((feature, index) => (
                            <div key={index} className="group relative h-full">
                              {/* Card Background with Gradient Border */}
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                              <div className="relative bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/20">
                                {/* Icon with Gradient Background */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                  <feature.icon className="text-black" size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300">
                                  {feature.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                  {feature.description}
                                </p>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-black p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="group-hover:-translate-x-0.5 transition-transform duration-300" size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-black p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-400/40 group"
                aria-label="Next slide"
              >
                <ChevronRight className="group-hover:translate-x-0.5 transition-transform duration-300" size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-12 gap-3">
                {Array.from({ length: Math.ceil(features.length / itemsPerSlide) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 w-8 shadow-lg shadow-green-400/50'
                      : 'bg-green-400/30 hover:bg-green-400/60 w-3'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible.calculator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              data-animate
              id="calculator"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
                  Earnings Calculator
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Calculator Card */}
              <div className="relative group">
                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-green-500/30 shadow-2xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <Calculator className="text-green-400" size={32} />
                      <h3 className="text-3xl font-bold text-green-400">
                        Calculate Your Monthly Earnings
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                        placeholder="Amount to invest (USD)"
                        className="w-full p-6 border-2 border-green-500/50 rounded-2xl bg-black/60 text-white text-xl focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-400"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 text-lg font-semibold">
                        USD
                      </div>
                    </div>

                    <div className="relative group">
                      {/* Results Card */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white p-8 rounded-2xl shadow-2xl">
                        {returns ? (
                          <div className="space-y-4 text-center">
                            <div className="space-y-2">
                              <p className="text-black/80 text-lg font-medium">Monthly Earnings</p>
                              <p className="text-3xl font-bold text-black">
                                ${returns.monthly.toFixed(2)} USD
                              </p>
                            </div>

                            <div className="w-full h-px bg-black/20"></div>

                            <div className="space-y-2">
                              <p className="text-black/80 text-lg font-medium">Yearly Earnings</p>
                              <p className="text-3xl font-bold text-black">
                                ${returns.yearly.toFixed(2)} USD
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center text-xl text-black/80 font-medium">
                            Enter an amount to see your earnings
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-center text-gray-400 text-sm">
                      * Earnings calculated at 10% monthly return
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
                Start Earning Today!
              </h2>

              <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed">
                Join thousands of investors who are already generating passive income with Ranna Token
              </p>

              <div className="pt-4">
                <button
                  className="group relative bg-black text-green-400 px-12 py-5 rounded-full text-xl font-bold hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 overflow-hidden"
                  onClick={() => Swal.fire({
                    title: 'Estamos trabajando en ello',
                    background: '#000',
                    color: '#22c55e',
                    icon: 'info',
                    iconColor: '#22c55e',
                    confirmButtonColor: '#22c55e',
                    confirmButtonText: 'Cerrar',
                    customClass: {
                      popup: 'rounded-2xl',
                      title: 'font-bold',
                      confirmButton: 'font-bold',
                    },
                  })}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Gem className="group-hover:rotate-12 transition-transform duration-300" size={24} />
                    Buy Ranna Token
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 border-t border-green-400/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                RANNA TOKEN
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400">
                &copy; 2025 Ranna Token. All rights reserved.
              </p>
              <p className="text-green-400 font-medium hover:text-green-300 transition-colors cursor-pointer">
                Contact: info@rannatoken.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}