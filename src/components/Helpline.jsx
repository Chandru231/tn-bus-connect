import React from 'react';
import { Phone, Mail, MessageSquare, AlertTriangle, Clock } from 'lucide-react';

const Helpline = () => {
  return (
    <div className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
       <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">24/7 Helpline Support</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Need assistance with your journey? Reach out to the official transport control rooms or our support team.
            </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* TNSTC Official */}
            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                    <Phone className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-900 mb-2">TNSTC Control Room</h2>
                <p className="text-emerald-700/80 mb-6 text-sm">For complaints regarding government bus schedule delays or staff behavior.</p>
                
                <div className="space-y-3">
                    <a href="tel:9445014450" className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <Phone className="h-5 w-5 text-emerald-500" />
                        <span className="font-bold text-emerald-900">94450 14450</span>
                    </a>
                    <a href="tel:9445014436" className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <Phone className="h-5 w-5 text-emerald-500" />
                        <span className="font-bold text-emerald-900">94450 14436</span>
                    </a>
                </div>
            </div>

            {/* SETC Official */}
            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                    <AlertTriangle className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-purple-900 mb-2">SETC Emergency</h2>
                <p className="text-purple-700/80 mb-6 text-sm">For long-distance breakdown assistance and lost property.</p>
                
                <div className="space-y-3">
                    <a href="tel:04423456789" className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <Phone className="h-5 w-5 text-purple-500" />
                        <span className="font-bold text-purple-900">044-23456789</span>
                    </a>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                        <Clock className="h-5 w-5 text-purple-500" />
                        <span className="font-medium text-purple-900">Available 24/7</span>
                    </div>
                </div>
            </div>

            {/* General Support */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-600 mb-6 shadow-sm">
                    <Mail className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">General Enquiry</h2>
                <p className="text-slate-500 mb-6 text-sm">For website technical issues or general route information.</p>
                
                <div className="space-y-3">
                    <a href="mailto:support@tnbusconnect.com" className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                        <Mail className="h-5 w-5 text-slate-400" />
                        <span className="font-bold text-slate-700">support@tnbus.in</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                        <MessageSquare className="h-5 w-5 text-slate-400" />
                        <span className="font-bold text-slate-700">Live Chat</span>
                    </a>
                </div>
            </div>
       </div>

       <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
           <h3 className="text-lg font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
           <div className="space-y-4">
               <details className="group bg-slate-50 rounded-xl">
                   <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-700">
                       How accurate are these timings?
                       <span className="transition group-open:rotate-180">
                           <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                       </span>
                   </summary>
                   <p className="text-slate-600 mt-0 px-4 pb-4 text-sm leading-relaxed">
                       Timings are sourced directly from TNSTC & SETC operation charts. However, real-time traffic conditions may cause delays of 15-30 minutes.
                   </p>
               </details>
               <details className="group bg-slate-50 rounded-xl">
                   <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-700">
                       Can I book tickets here?
                       <span className="transition group-open:rotate-180">
                           <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                       </span>
                   </summary>
                   <p className="text-slate-600 mt-0 px-4 pb-4 text-sm leading-relaxed">
                       No, this is exclusively a timing finder. For booking, please visit the official tnstc.in website or use authorized booking apps.
                   </p>
               </details>
           </div>
       </div>
    </div>
  );
};

export default Helpline;