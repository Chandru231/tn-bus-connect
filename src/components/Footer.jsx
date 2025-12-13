import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Bus } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const handleNav = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-display font-bold flex items-center gap-2">
              TN<span className="text-primary-500">Bus</span>Connect
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting Tamil Nadu with reliable bus schedules. Direct data from TNSTC, SETC, and private transport databases.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all text-slate-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all text-slate-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all text-slate-400"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Top Routes */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-500" /> Top Routes
            </h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">Chennai to Madurai</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">Coimbatore to Chennai</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">Trichy to Salem</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">Madurai to Kanyakumari</button></li>
              <li><button onClick={(e) => handleNav(e, 'routes')} className="hover:text-primary-400 transition-colors text-left font-semibold text-primary-500 mt-2 cursor-pointer">View All Routes →</button></li>
            </ul>
          </div>

          {/* Operators */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Bus className="h-4 w-4 text-primary-500" /> Operators
            </h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">SETC Ultra Deluxe</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">TNSTC AC Services</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">Parveen Travels</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">KPN Travels</button></li>
              <li><button onClick={(e) => handleNav(e, 'timings')} className="hover:text-primary-400 transition-colors text-left cursor-pointer">YBM Travels</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-500" /> Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-slate-500">Email:</span>
                <a href="mailto:support@tnbusconnect.com" className="hover:text-white transition-colors">support@tnbusconnect.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">Helpline:</span>
                <span className="text-white">044-23456789</span>
              </li>
              <li className="pt-2">
                 <button 
                    onClick={(e) => handleNav(e, 'helpline')}
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-primary-600 text-white rounded-xl transition-all font-semibold shadow-sm text-center cursor-pointer"
                 >
                    Visit Support Center
                 </button>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} TN Bus Connect. All rights reserved. Unofficial informational site.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;