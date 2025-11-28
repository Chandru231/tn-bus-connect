import React from 'react';
import { BUS_DATABASE } from '../data/bus_db';
import { ArrowRight, Clock, FileText } from 'lucide-react';

const BusTimings = () => {
  // Group by Route
  const routes = BUS_DATABASE.reduce((acc, bus) => {
    const key = `${bus.origin} - ${bus.destination}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(bus);
    return acc;
  }, {});

  return (
    <div className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
       <div className="mb-10 text-center md:text-left">
           <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Official Bus Timetables</h1>
           <p className="text-slate-500 max-w-2xl text-lg">
               Complete list of government (TNSTC/SETC) and private bus schedules sourced directly from official operation charts.
           </p>
       </div>

       <div className="grid gap-8">
         {Object.entries(routes).map(([route, buses], index) => (
            <div key={route} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
                    <span className="p-3 bg-primary-50 text-primary-600 rounded-xl">
                        <ArrowRight className="h-6 w-6" />
                    </span>
                    {route}
                    <span className="ml-auto text-sm font-medium px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                        {buses.length} Services
                    </span>
                </h2>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <th className="p-4 pl-2">Departure</th>
                                <th className="p-4">Operator</th>
                                <th className="p-4">Bus Type</th>
                                <th className="p-4">Duration</th>
                                <th className="p-4">Trip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buses.sort((a,b) => a.dep.localeCompare(b.dep)).map((bus, idx) => (
                                <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/80 transition-colors group">
                                    <td className="p-4 pl-2">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-primary-500" />
                                            <span className="font-display font-bold text-lg text-slate-800">{bus.dep}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`text-sm font-bold px-2.5 py-1 rounded-md ${bus.operator.includes('TNSTC') || bus.operator.includes('SETC') ? 'bg-emerald-50 text-emerald-700' : 'bg-purple-50 text-purple-700'}`}>
                                            {bus.operator}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm font-medium text-slate-600">{bus.type}</td>
                                    <td className="p-4 text-sm text-slate-500">{bus.dur}</td>
                                    <td className="p-4">
                                        {bus.tripCode ? (
                                            <span className="font-mono text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200 group-hover:bg-white transition-colors">
                                                {bus.tripCode}
                                            </span>
                                        ) : (
                                            <span className="text-slate-300">-</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
         ))}
       </div>
    </div>
  );
};

export default BusTimings;