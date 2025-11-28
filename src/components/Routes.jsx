import React from 'react';
import { BUS_DATABASE } from '../data/bus_db';
import { Map, ArrowRight, Navigation } from 'lucide-react';

const Routes = () => {
    // Extract unique routes
    const uniqueRoutes = Array.from(new Set(BUS_DATABASE.map(b => `${b.origin}-${b.destination}`)))
        .map(routeStr => {
            const [origin, destination] = routeStr.split('-');
            // Calculate freq
            const count = BUS_DATABASE.filter(b => b.origin === origin && b.destination === destination).length;
            
            return { origin, destination, count };
        });

  return (
    <div className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
       <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-3 block">Network Coverage</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Popular Bus Routes</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                We cover all major districts and town connectors across Tamil Nadu. Explore our extensive network.
            </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueRoutes.map((route, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                        <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                            <Map className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                            {route.count} Buses
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-800">{route.origin}</h3>
                        <ArrowRight className="h-4 w-4 text-slate-300" />
                        <h3 className="text-lg font-bold text-slate-800">{route.destination}</h3>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-0 flex items-center gap-2">
                        <Navigation className="h-3 w-3" />
                        Direct Service
                    </p>
                </div>
            ))}
            
            {/* Promo Card */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl text-white flex flex-col justify-center items-center text-center">
                 <div className="mb-4 text-4xl">🚍</div>
                 <h3 className="text-xl font-bold mb-2">More Routes Coming Soon</h3>
                 <p className="text-slate-400 text-sm">We are constantly updating our database with new town buses.</p>
            </div>
       </div>
    </div>
  );
};

export default Routes;