import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import BusCard from './components/BusCard';
import BusTimings from './components/BusTimings';
import Routes from './components/Routes';
import Helpline from './components/Helpline';
import { fetchBusSchedules } from './services/api';
import { Filter, ArrowUpDown, AlertCircle } from 'lucide-react';

const TOP_DESTINATIONS = [
  { name: 'Madurai', image: '/images/madurai.jpg', desc: 'The Temple City' },
  { name: 'Ooty', image: '/images/ooty.jpg', desc: 'Queen of Hill Stations' },
  { name: 'Kanyakumari', image: '/images/kanyakumari.jpg', desc: 'Southernmost Tip' },
  { name: 'Chennai', image: '/images/chennai.jpg', desc: 'Capital City' },
  { name: 'Trichy', image: '/images/trichy.jpg', desc: 'Heart Of Tamilnadu' },
  { name: 'Coimbatore', image: '/images/coimbatore.jpg', desc: 'Manchester of South India' },
  { name: 'Tirunelveli', image: '/images/tirunelveli.jpg', desc: 'Halwa city' },
  { name: 'Tuticorin', image: '/images/tuticorin.avif', desc: 'Pearl city' },
  { name: 'Vellore', image: '/images/vellore.webp', desc: 'Fort City' },
  { name: 'Nammakkal', image: '/images/nammakkal.webp', desc: 'Poultry Town' },
  { name: 'Salem', image: '/images/salem.webp', desc: 'Steel City' },
  { name: 'Sivakasi', image: '/images/sivakasi.webp', desc: 'Cracker City' },

];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Search State
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedCriteria, setSearchedCriteria] = useState(null);
  const [sortBy, setSortBy] = useState('DEPARTURE_EARLIEST'); // Assuming SortOption enum values are strings or we need to handle this.
  const [filterType, setFilterType] = useState('ALL');

  const handleSearch = async (criteria) => {
    setLoading(true);
    setError(null);
    setBuses([]);
    setSearchedCriteria(criteria);

    try {
      console.log("Searching for:", criteria);
      const { buses: fetchedBuses } = await fetchBusSchedules(criteria.origin, criteria.destination, criteria.date);
      console.log("Fetched buses:", fetchedBuses);
      setBuses(fetchedBuses);
      
      if (fetchedBuses.length === 0) {
          setError("No bus schedules found for this route. Please try a major route (e.g., Chennai to Madurai).");
      }
    } catch (err) {
      setError("Failed to fetch bus schedules. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getFilteredAndSortedBuses = () => {
    let filtered = [...buses];

    if (filterType !== 'ALL') {
      filtered = filtered.filter(bus => {
        const type = bus.busType.toUpperCase();
        if (filterType === 'AC') return type.includes('AC') && !type.includes('NON-AC');
        if (filterType === 'NON-AC') return type.includes('NON-AC');
        if (filterType === 'SLEEPER') return type.includes('SLEEPER');
        return true;
      });
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'DEPARTURE_EARLIEST': return a.departureTime.localeCompare(b.departureTime);
        case 'DURATION_SHORTEST':
           const getMinutes = (d) => {
             const parts = d.match(/(\d+)h\s*(\d+)m/);
             return parts ? parseInt(parts[1]) * 60 + parseInt(parts[2]) : 0;
           };
           return getMinutes(a.duration) - getMinutes(b.duration);
        case 'RATING_HIGH_LOW': return b.rating - a.rating;
        default: return 0;
      }
    });
  };

  const displayedBuses = getFilteredAndSortedBuses();

  const renderContent = () => {
    switch(currentPage) {
      case 'timings':
        return <BusTimings />;
      case 'routes':
        return <Routes />;
      case 'helpline':
        return <Helpline />;
      case 'home':
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative h-[600px] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                  <img 
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
                      alt="Bus Travel in India" 
                      className="w-full h-full object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pb-24 text-center">
                <div className="animate-fade-in-up">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider mb-6">
                      TAMIL NADU BUS TIME TABLE
                  </span>
                  <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
                    Check Bus Timings <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-200">In Seconds</span>
                  </h1>
                  <p className="text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                    The most accurate schedule finder for TNSTC, SETC, and private operators. Plan your journey with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Search Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 -mt-10">
              <SearchForm onSearch={handleSearch} isLoading={loading} onNavigate={setCurrentPage} />

              {/* Results Area */}
              {error && (
                  <div className="mt-12 bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 animate-fade-in-up">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <p className="text-sm font-medium text-red-700">{error}</p>
                  </div>
              )}

              {/* Filters and Sort Bar */}
              {(buses.length > 0 || loading) && !error && (
                <div className="mt-12 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up animation-delay-100">
                  <div>
                      <h2 className="text-xl font-bold text-slate-800">
                          {searchedCriteria?.origin} <span className="text-slate-300 mx-2">to</span> {searchedCriteria?.destination}
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">{displayedBuses.length} Scheduled Services</p>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                      {['ALL', 'AC', 'NON-AC', 'SLEEPER'].map(type => (
                          <button
                              key={type}
                              onClick={() => setFilterType(type)}
                              className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all ${
                                  filterType === type 
                                  ? 'bg-slate-800 text-white shadow-md' 
                                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                              }`}
                          >
                              {type === 'ALL' ? 'All' : type}
                          </button>
                      ))}
                      <div className="w-[1px] h-6 bg-slate-200 mx-1"></div>
                      <div className="pr-3 flex items-center">
                          <ArrowUpDown className="h-4 w-4 text-slate-400 mr-2" />
                          <select
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              className="text-xs font-bold text-slate-700 bg-transparent border-none outline-none cursor-pointer focus:ring-0"
                          >
                              <option value="DEPARTURE_EARLIEST">Earliest Departure</option>
                              <option value="DURATION_SHORTEST">Fastest Duration</option>
                              <option value="RATING_HIGH_LOW">Highest Rated</option>
                          </select>
                      </div>
                  </div>
                </div>
              )}

              {/* Bus List */}
              <div className="space-y-4">
                {loading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 h-48 animate-pulse shadow-sm">
                        <div className="flex justify-between items-start">
                            <div className="space-y-3 w-1/3">
                              <div className="h-4 bg-slate-100 rounded-full w-12"></div>
                              <div className="h-6 bg-slate-100 rounded-full w-32"></div>
                            </div>
                            <div className="space-y-3 w-1/3">
                              <div className="h-8 bg-slate-100 rounded-full w-full"></div>
                            </div>
                            <div className="space-y-3 w-1/6">
                                <div className="h-10 bg-slate-100 rounded-xl w-full"></div>
                            </div>
                        </div>
                    </div>
                  ))
                ) : displayedBuses.length > 0 ? (
                  <>
                    {displayedBuses.map((bus, idx) => (
                      <BusCard key={`${bus.id}-${idx}`} bus={bus} index={idx} />
                    ))}
                  </>
                ) : searchedCriteria && !loading && !error && (
                  <div className="text-center py-24">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                          <Filter className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">No buses found</h3>
                    <p className="text-slate-500 mt-2">Try searching for a different route.</p>
                  </div>
                )}

                {/* Top Destinations Section */}
                {!searchedCriteria && !loading && (
                  <div className="mt-20">
                      <div className="flex justify-between items-end mb-8">
                          <div>
                              <span className="text-primary-600 font-bold tracking-wider text-xs uppercase mb-2 block">Discover Tamil Nadu</span>
                              <h2 className="text-3xl font-display font-bold text-slate-900">Popular Destinations</h2>
                          </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {TOP_DESTINATIONS.map((dest, i) => (
                              <div key={i} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                                  <img 
                                      src={dest.image} 
                                      alt={dest.name} 
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                  <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                      <h3 className="text-2xl font-display font-bold text-white mb-1">{dest.name}</h3>
                                      <p className="text-white/80 text-sm font-medium">{dest.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>

                      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                          {[
                              { title: "Official Timings", desc: "Data sourced directly from TNSTC & SETC charts.", icon: "🏛️" },
                              { title: "Smart Route Finder", desc: "Find the fastest connection between any two cities.", icon: "⚡" },
                              { title: "Operator Details", desc: "Know your bus type, amenities and stops beforehand.", icon: "🚌" }
                          ].map((item, i) => (
                              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center md:text-left">
                                  <div className="text-4xl mb-4 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mx-0">{item.icon}</div>
                                  <h3 className="font-display font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
                                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                )}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;