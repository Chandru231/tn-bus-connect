import React, { useState } from 'react';
import { MapPin, Calendar, Search, ArrowRightLeft, Clock, Map as MapIcon } from 'lucide-react';
const SearchForm = ({ onSearch, isLoading, onNavigate }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origin && destination && date) {
      onSearch({ origin, destination, date });
      setOrigin('');
      setDestination('');
      // Optional: Reset date to today or keep it. User asked for "search box" to be empty.
      // Usually date persists, but clearing text fields is key.
    }
  };

  const handleSwap = () => {
    setIsSwapping(true);
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
    setTimeout(() => setIsSwapping(false), 300);
  };

  return (
    <div id="search" className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-5 md:p-8 -mt-24 relative z-20 mx-4 md:mx-auto max-w-6xl border border-slate-100">
      
      {/* Tab Selectors */}
      <div className="flex space-x-6 mb-8 border-b border-slate-100 pb-2">
        <button 
            type="button"
            className="text-primary-600 font-semibold border-b-2 border-primary-600 pb-2 flex items-center gap-2"
        >
            <Clock className="h-4 w-4" />
            Bus Timings
        </button>
        <button 
            type="button"
            onClick={() => onNavigate('routes')}
            className="text-slate-400 font-medium hover:text-slate-600 pb-2 transition-colors flex items-center gap-2"
        >
            <MapIcon className="h-4 w-4" />
            Route Map
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        
        {/* Origin Input */}
        <div className="md:col-span-5 lg:col-span-3 relative group">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">From</label>
          <div className="relative flex items-center">
            <div className="absolute left-4 p-2 bg-slate-50 rounded-lg group-focus-within:bg-primary-50 transition-colors">
                <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-primary-600" />
            </div>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Source City"
              className="w-full pl-14 pr-4 py-3.5 md:py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-100 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-semibold text-slate-800 placeholder-slate-400 h-[54px] md:h-[58px]"
              required
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-2 lg:col-span-1 flex justify-center items-center py-2 md:py-0 md:mb-1.5">
            <button 
                type="button" 
                onClick={handleSwap}
                className={`p-3 rounded-full bg-slate-50 hover:bg-primary-50 text-slate-400 hover:text-primary-600 transition-all border border-slate-100 hover:border-primary-100 group shadow-sm ${isSwapping ? 'rotate-180' : ''}`}
                title="Swap Locations"
            >
                <ArrowRightLeft className="h-5 w-5 transition-transform group-hover:scale-110" />
            </button>
        </div>

        {/* Destination Input */}
        <div className="md:col-span-5 lg:col-span-3 relative group">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">To</label>
          <div className="relative flex items-center">
             <div className="absolute left-4 p-2 bg-slate-50 rounded-lg group-focus-within:bg-primary-50 transition-colors">
                <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-primary-600" />
            </div>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination City"
              className="w-full pl-14 pr-4 py-3.5 md:py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-100 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-semibold text-slate-800 placeholder-slate-400 h-[54px] md:h-[58px]"
              required
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="md:col-span-6 lg:col-span-3 relative group">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Date</label>
            <div className="relative flex items-center">
                    <div className="absolute left-4 pointer-events-none p-2">
                    <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-primary-600" />
                </div>
                <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-14 pr-4 py-3.5 md:py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-100 focus:ring-4 focus:ring-primary-50 outline-none transition-all font-semibold text-slate-800 h-[54px] md:h-[58px]"
                required
                />
            </div>
        </div>
        
        {/* Submit Button */}
        <div className="md:col-span-6 lg:col-span-2">
            <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[54px] md:h-[58px] bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all flex items-center justify-center transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed gap-2"
            >
                {isLoading ? (
                <div className="h-6 w-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                <>
                    <Search className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="md:ml-1 text-lg">Find</span>
                </>
                )}
            </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;