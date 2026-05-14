import React from 'react';
import { Link } from 'react-router-dom';

export default function SettingsPage() {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full py-md px-sm bg-surface-container-low/40 backdrop-blur-2xl fixed left-4 top-4 bottom-4 w-72 rounded-xl z-40 border-r border-white/5 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-3 px-4 mb-xl">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-inverse-primary flex items-center justify-center shadow-[0_0_20px_rgba(192,193,255,0.3)]">
            <span className="material-symbols-outlined text-surface font-bold">view_in_ar</span>
          </div>
          <div>
            <h1 className="text-headline-md font-headline-lg font-black text-on-surface tracking-tighter">Nexus OS</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Obsidian Intelligence</p>
          </div>
        </div>
        <div className="px-4 mb-lg">
          <button className="w-full bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary-container font-label-md text-label-md py-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(128,131,255,0.2)] hover:shadow-[0_0_30px_rgba(128,131,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Session
          </button>
        </div>
        <ul className="flex flex-col gap-1 flex-1 font-label-md text-label-md text-tertiary">
          <li>
            <Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/chat">
              <span className="material-symbols-outlined">chat</span>
              Nexus Chat
            </Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/marketplace">
              <span className="material-symbols-outlined">apps</span>
              Marketplace
            </Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/analytics">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              Analytics
            </Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/knowledge">
              <span className="material-symbols-outlined">folder_managed</span>
              Knowledge
            </Link>
          </li>
          <li>
            <Link className="bg-primary/10 text-primary border-l-4 border-primary rounded-r-lg px-4 py-3 flex items-center gap-3" to="/settings">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
              Settings
            </Link>
          </li>
        </ul>
        <div className="mt-auto border-t border-white/5 pt-4">
          <ul className="flex flex-col gap-1 font-label-md text-label-md text-tertiary">
            <li>
              <Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/help">
                <span className="material-symbols-outlined">help</span>
                Help
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/account">
                <span className="material-symbols-outlined">account_circle</span>
                Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 ml-0 md:ml-[320px] p-gutter max-w-container-max relative z-10 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-xl border-b border-white/5 pb-6">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Settings</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Configure system preferences and model parameters.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-full scale-95 hover:scale-100 active:scale-95 transition-all shadow-[0_0_15px_rgba(192,193,255,0.4)]">
              Save Changes
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Settings Navigation Sidebar (Inner) */}
          <div className="col-span-1 hidden lg:block">
            <ul className="flex flex-col gap-2 font-label-md text-label-md text-on-surface-variant">
              <li>
                <button className="w-full text-left px-4 py-2.5 rounded-lg bg-surface-variant/30 text-on-surface border border-white/5">
                  General Profile
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                  Model Preferences
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                  API & Integrations
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                  Billing
                </button>
              </li>
            </ul>
          </div>

          {/* Settings Content Area */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-xl pb-xl">
            
            {/* General Profile */}
            <section className="glass-panel rounded-xl p-lg relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="font-headline-sm text-on-surface mb-6 relative z-10 border-b border-white/5 pb-2">General Profile</h3>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-display-sm text-outline-variant">person</span>
                  </div>
                  <div>
                    <button className="font-label-md text-primary border border-primary/30 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors mb-2">Upload Photo</button>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Display Name</label>
                    <input type="text" defaultValue="Tapesh Chavle" className="bg-surface border border-outline-variant/20 rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
                    <input type="email" defaultValue="tapesh@nexusos.ai" className="bg-surface border border-outline-variant/20 rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full" />
                  </div>
                </div>
              </div>
            </section>

            {/* Model Preferences */}
            <section className="glass-panel rounded-xl p-lg relative overflow-hidden">
              <h3 className="font-headline-sm text-on-surface mb-6 relative z-10 border-b border-white/5 pb-2">Model Preferences</h3>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div>
                  <label className="font-label-md text-on-surface block mb-3">Default Agent Model</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                      <input type="radio" name="model" className="peer sr-only" defaultChecked />
                      <div className="rounded-xl border border-outline-variant/30 p-4 peer-checked:border-primary peer-checked:bg-primary/5 transition-all h-full relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-16 h-16 bg-primary/10 rounded-bl-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        <span className="material-symbols-outlined text-primary mb-2">smart_toy</span>
                        <h4 className="font-label-md text-on-surface mb-1">Nexus-v4 Core</h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Highest reasoning capability. Best for complex tasks.</p>
                      </div>
                    </label>
                    
                    <label className="cursor-pointer">
                      <input type="radio" name="model" className="peer sr-only" />
                      <div className="rounded-xl border border-outline-variant/30 p-4 peer-checked:border-tertiary peer-checked:bg-tertiary/5 transition-all h-full relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-16 h-16 bg-tertiary/10 rounded-bl-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        <span className="material-symbols-outlined text-tertiary mb-2">bolt</span>
                        <h4 className="font-label-md text-on-surface mb-1">Nexus-Lite</h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">Optimized for speed and lower latency.</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-label-md text-on-surface">Enable Web Search</h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Allow models to access the internet for recent events.</p>
                    </div>
                    {/* Custom Toggle Switch */}
                    <div className="w-12 h-6 rounded-full bg-primary relative cursor-pointer shadow-[0_0_10px_rgba(192,193,255,0.3)]">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-surface rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-label-md text-on-surface">Streaming Responses</h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Show partial outputs as they are generated.</p>
                    </div>
                    {/* Custom Toggle Switch */}
                    <div className="w-12 h-6 rounded-full bg-primary relative cursor-pointer shadow-[0_0_10px_rgba(192,193,255,0.3)]">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-surface rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Configuration */}
            <section className="glass-panel rounded-xl p-lg relative overflow-hidden">
              <h3 className="font-headline-sm text-on-surface mb-6 relative z-10 border-b border-white/5 pb-2">API Configuration</h3>
              
              <div className="flex flex-col gap-4 relative z-10">
                <p className="font-body-md text-sm text-on-surface-variant mb-2">
                  Use this key to authenticate external requests to the Nexus API. Do not share this key with anyone.
                </p>
                
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">Secret Key</label>
                  <div className="flex gap-2">
                    <input type="password" value="sk_nexus_ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" readOnly className="bg-surface border border-outline-variant/20 rounded-lg px-4 py-2.5 text-on-surface flex-1 focus:outline-none font-mono text-sm tracking-widest" />
                    <button className="bg-surface-variant border border-outline-variant/20 text-on-surface px-4 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">content_copy</span>
                    </button>
                  </div>
                </div>
                
                <div className="mt-2 flex justify-end">
                  <button className="text-error hover:text-error/80 font-label-sm text-sm transition-colors">
                    Revoke Key
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
