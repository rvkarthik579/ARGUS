import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 max-w-2xl text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
          System Initialized
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
          ARGUS Command Center
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Centralized Geo-Verified NGO & Facility Vigilance Network. Real-time telemetry engine active.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-sm text-slate-500 font-mono mb-1">Geofence Status</div>
            <div className="text-green-600 font-bold flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Enforcing
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-sm text-slate-500 font-mono mb-1">CV Stream</div>
            <div className="text-blue-600 font-bold flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Connected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
