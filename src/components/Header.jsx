import React, { useState, useEffect } from 'react';
import { BusFront, Menu, X } from 'lucide-react';

const Header = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'timings', label: 'Bus Timings' },
    { id: 'routes', label: 'Routes' },
    { id: 'helpline', label: 'Helpline' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className={`p-2 rounded-xl transition-colors ${isScrolled || currentPage !== 'home' ? 'bg-primary-50' : 'bg-white/10 backdrop-blur-sm'}`}>
              <BusFront className={`h-6 w-6 ${isScrolled || currentPage !== 'home' ? 'text-primary-600' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight font-display ${isScrolled || currentPage !== 'home' ? 'text-slate-800' : 'text-white'}`}>
              TN<span className={isScrolled || currentPage !== 'home' ? 'text-primary-600' : 'text-white/80'}>Bus</span>Connect
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-accent-500 cursor-pointer ${
                  currentPage === item.id 
                    ? 'text-primary-600 font-bold' 
                    : isScrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
             <button 
                onClick={() => onNavigate('timings')}
                className={`text-sm font-bold rounded-full px-6 py-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer ${isScrolled || currentPage !== 'home' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
             >
               Check Timings
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg cursor-pointer ${isScrolled || currentPage !== 'home' ? 'text-slate-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col space-y-4 animate-fade-in-up">
           {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-medium py-2 border-b border-slate-50 cursor-pointer ${currentPage === item.id ? 'text-primary-600' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;