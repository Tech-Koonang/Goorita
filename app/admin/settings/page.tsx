'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('General');

  return (
    <>
      <div>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">System Settings</h1>
        <p className="text-sm font-medium text-slate-500 mt-1">Configure platform defaults and integrations.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row mt-4 min-h-[500px]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 border-r border-slate-200 bg-slate-50 p-4">
          <nav className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1 overflow-x-auto md:overflow-visible">
            {['General', 'Notifications', 'Integrations', 'Users'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap text-left transition-colors",
                  activeTab === tab 
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200" 
                    : "text-slate-500 hover:bg-slate-200 hover:text-slate-700 border border-transparent"
                )}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6 md:p-8">
          {activeTab === 'General' && (
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-lg font-black text-slate-800 tracking-tight border-b border-slate-100 pb-2">General Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Company Name</label>
                  <input type="text" defaultValue="Goorita Send" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Support Email</label>
                  <input type="email" defaultValue="support@goorita.com" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Default Currency</label>
                  <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm bg-white">
                    <option>IDR - Indonesian Rupiah</option>
                    <option>USD - US Dollar</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <button type="button" className="bg-primary text-white font-bold px-6 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-lg font-black text-slate-800 tracking-tight border-b border-slate-100 pb-2">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Order Confirmations</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Send email when a new order is received.</p>
                  </div>
                  <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Failed Payments</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Alert admins on payment failure.</p>
                  </div>
                  <div className="h-6 w-11 bg-slate-300 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'Integrations' || activeTab === 'Users') && (
            <div className="flex flex-col items-center justify-center h-48 text-slate-400">
              <p className="text-sm font-medium">This section is currently under development.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
