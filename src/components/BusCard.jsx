import React from 'react';
import { Star, Wifi, BatteryCharging, Armchair, Clock, Map as MapIcon } from 'lucide-react';
const BusCard = ({ bus, index }) => {
  if (!bus) return null;
  const isGovernment = bus.operator.toUpperCase().includes('TNSTC') || bus.operator.toUpperCase().includes('SETC');
  const isSleeper = bus.busType.toLowerCase().includes('sleeper');
  const isAC = bus.busType.toLowerCase().includes('ac') && !bus.busType.toLowerCase().includes('non-ac');
  
  // Staggered animation delay based on index
  const delayClass = index === 0 ? '' : index === 1 ? 'animation-delay-100' : index === 2 ? 'animation-delay-200' : 'animation-delay-300';

  // Generate initial logo background color based on operator name
  const getLogoColor = (name) => {
    if (name.includes('TNSTC')) return 'bg-emerald-100 text-emerald-700';
    if (name.includes('SETC')) return 'bg-green-100 text-green-700';
    if (name.includes('Parveen')) return 'bg-purple-100 text-purple-700';
    if (name.includes('KPN')) return 'bg-orange-100 text-orange-700';
    return 'bg-blue-100 text-blue-700';
  };

  const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(bus.origin)}&destination=${encodeURIComponent(bus.destination)}&travelmode=driving`;

  return (
    <div className={`bg-white rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 mb-5 group overflow-hidden animate-fade-in-up ${delayClass} hover:border-primary-200 hover:shadow-md`}>
      <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex items-center gap-4">
                    {/* Operator Logo Placeholder */}
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center font-display font-bold text-xl shadow-sm ${getLogoColor(bus.operator)}`}>
                        {bus.operator.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-xl text-slate-800 leading-tight">
                            {bus.operator}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="text-sm font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                                {bus.busType}
                            </span>
                            {bus.tripCode && (
                                <span className="text-xs font-mono bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100">
                                    Code: {bus.tripCode}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Status Badge */}
                <div className="flex items-center gap-2">
                     <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${isGovernment ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-purple-50 text-purple-700 border-purple-100'}`}>
                        {isGovernment ? 'Government Service' : 'Private Operator'}
                     </span>
                </div>
            </div>

            {/* Journey Timeline */}
            <div className="flex items-center justify-between gap-4 md:gap-12 mb-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100/50">
                <div className="text-left min-w-[80px]">
                    <p className="text-3xl font-display font-bold text-slate-800">{bus.departureTime}</p>
                    <p className="text-sm font-semibold text-slate-400 mt-1">{bus.origin}</p>
                </div>

                <div className="flex-1 flex flex-col items-center px-4 relative">
                     {/* Duration Badge */}
                     <div className="absolute -top-9 bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-xs font-bold text-slate-600">{bus.duration}</span>
                     </div>
                     
                    <div className="w-full h-[2px] bg-slate-200 relative flex items-center justify-between mt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-white border-[3px] border-primary-500"></div>
                        
                        {/* Direction Arrows */}
                        <div className="flex gap-1">
                             <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                             <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                             <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        </div>

                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                </div>

                <div className="text-right min-w-[80px]">
                    <p className="text-3xl font-display font-bold text-slate-800">{bus.arrivalTime}</p>
                    <p className="text-sm font-semibold text-slate-400 mt-1">{bus.destination}</p>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-2 gap-4">
                <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {isAC && <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 whitespace-nowrap" title="AC">
                        <BatteryCharging className="h-4 w-4 text-primary-500" />
                        <span className="text-xs font-semibold">AC</span>
                    </div>}
                    {isSleeper && <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 whitespace-nowrap" title="Sleeper">
                        <Armchair className="h-4 w-4 text-primary-500" />
                         <span className="text-xs font-semibold">Sleeper</span>
                    </div>}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 whitespace-nowrap">
                        <Wifi className="h-4 w-4 text-slate-400" />
                        <span className="text-xs font-semibold">WiFi</span>
                    </div>
                     <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100 gap-1.5 whitespace-nowrap">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-slate-700">{bus.rating.toFixed(1)}</span>
                    </div>
                </div>
                
                <a 
                   href={mapUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full md:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 border border-slate-200"
                >
                    <MapIcon className="h-4 w-4" />
                    Check Distance
                </a>
            </div>
      </div>
    </div>
  );
};

export default BusCard;