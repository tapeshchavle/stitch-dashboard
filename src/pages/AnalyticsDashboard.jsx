import React from 'react';
import { Link } from 'react-router-dom';

export default function AnalyticsDashboard() {
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
<Link className="bg-primary/10 text-primary border-l-4 border-primary rounded-r-lg px-4 py-3 flex items-center gap-3" to="/settings">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
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
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 rounded-lg flex items-center gap-3 transition-all hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/settings">
<span className="material-symbols-outlined">settings</span>
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
<main className="flex-1 ml-0 md:ml-[320px] p-gutter max-w-container-max relative z-10">
{/* Header */}
<header className="flex justify-between items-center mb-xl">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Analytics Overview</h2>
<p className="text-body-md font-body-md text-on-surface-variant">Real-time telemetry and resource utilization.</p>
</div>
<div className="flex items-center gap-4">
<button className="glass-panel p-2 rounded-full hover:bg-white/5 transition-colors text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">download</span>
</button>
<div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
<span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(19,255,67,0.5)] animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface">Live Data</span>
</div>
</div>
</header>
{/* Global Stats Row */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
{/* Stat 1 */}
<div className="glass-panel rounded-xl p-lg flex flex-col justify-between h-32 glass-panel-hover transition-all duration-300">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Tokens</span>
<span className="material-symbols-outlined text-primary/70 text-sm">data_usage</span>
</div>
<div className="flex items-end gap-3 mt-auto">
<span className="text-headline-xl font-headline-xl text-on-surface">2.4<span className="text-headline-lg text-on-surface-variant">B</span></span>
<span className="font-label-sm text-label-sm text-tertiary flex items-center mb-2"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%</span>
</div>
</div>
{/* Stat 2 */}
<div className="glass-panel rounded-xl p-lg flex flex-col justify-between h-32 glass-panel-hover transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Sessions</span>
<span className="material-symbols-outlined text-primary/70 text-sm">groups</span>
</div>
<div className="flex items-end gap-3 mt-auto relative z-10">
<span className="text-headline-xl font-headline-xl text-on-surface">1,842</span>
<span className="font-label-sm text-label-sm text-secondary-container flex items-center mb-2"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 5%</span>
</div>
</div>
{/* Stat 3 */}
<div className="glass-panel rounded-xl p-lg flex flex-col justify-between h-32 glass-panel-hover transition-all duration-300">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">API Latency</span>
<div className="bg-secondary-container/10 border border-secondary-container/30 px-2 py-0.5 rounded flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(19,255,67,0.8)]"></span>
<span className="font-label-sm text-label-sm text-secondary-container">Good</span>
</div>
</div>
<div className="flex items-end gap-3 mt-auto">
<span className="text-headline-xl font-headline-xl text-on-surface">42<span className="text-headline-lg text-on-surface-variant">ms</span></span>
<span className="font-label-sm text-label-sm text-secondary-container flex items-center mb-2"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 3ms</span>
</div>
</div>
{/* Stat 4 */}
<div className="glass-panel rounded-xl p-lg flex flex-col justify-between h-32 glass-panel-hover transition-all duration-300">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cost Saved</span>
<span className="material-symbols-outlined text-tertiary/70 text-sm">savings</span>
</div>
<div className="flex items-end gap-3 mt-auto">
<span className="text-headline-xl font-headline-xl text-on-surface">$14.2<span className="text-headline-lg text-on-surface-variant">k</span></span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center mb-2">This month</span>
</div>
</div>
</section>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Main Chart Area (Spans 2 columns) */}
<section className="lg:col-span-2 glass-panel rounded-xl p-lg min-h-[400px] flex flex-col relative group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl pointer-events-none"></div>
<div className="flex justify-between items-center mb-lg relative z-10">
<div>
<h3 className="font-label-md text-label-md text-on-surface mb-1">Token Usage vs. Efficiency</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">7-day performance metric</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs rounded bg-surface-variant/50 text-on-surface-variant hover:text-on-surface border border-white/5 transition-colors">1D</button>
<button className="px-3 py-1 text-xs rounded bg-primary/20 text-primary border border-primary/30 transition-colors shadow-[0_0_15px_rgba(192,193,255,0.1)]">7D</button>
<button className="px-3 py-1 text-xs rounded bg-surface-variant/50 text-on-surface-variant hover:text-on-surface border border-white/5 transition-colors">30D</button>
</div>
</div>
{/* Abstract Chart Representation */}
<div className="flex-1 relative border-l border-b border-outline-variant/30 mt-4 mx-4 mb-6">
{/* Grid lines */}
<div className="absolute inset-0 flex flex-col justify-between">
<div className="w-full border-t border-outline-variant/10"></div>
<div className="w-full border-t border-outline-variant/10"></div>
<div className="w-full border-t border-outline-variant/10"></div>
<div className="w-full border-t border-outline-variant/10"></div>
</div>
{/* SVG Chart Lines (Placeholder for visual aesthetic) */}
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradient1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(192,193,255,0.4)"></stop>
<stop offset="100%" stop-color="rgba(192,193,255,0)"></stop>
</lineargradient>
<lineargradient id="gradient2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(47,217,244,0.3)"></stop>
<stop offset="100%" stop-color="rgba(47,217,244,0)"></stop>
</lineargradient>
</defs>
{/* Usage Area */}
<path d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,20 L100,100 L0,100 Z" fill="url(#gradient1)" opacity="0.6"></path>
<path d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,20" fill="none" stroke="#c0c1ff" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
{/* Efficiency Area */}
<path d="M0,90 Q15,85 25,60 T50,70 T75,40 T100,45 L100,100 L0,100 Z" fill="url(#gradient2)" opacity="0.5"></path>
<path d="M0,90 Q15,85 25,60 T50,70 T75,40 T100,45" fill="none" stroke="#2fd9f4" stroke-dasharray="4 2" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
{/* Hover points (simulated) */}
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" cx="80" cy="30" fill="#c0c1ff" r="1.5"></circle>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" cx="80" cy="30" fill="none" r="4" stroke="#c0c1ff" strokeWidth="0.5"></circle>
</svg>
{/* X Axis Labels */}
<div className="absolute -bottom-6 w-full flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest">
<span>Mon</span>
<span>Wed</span>
<span>Fri</span>
<span>Sun</span>
</div>
</div>
</section>
{/* Activity Timeline */}
<section className="glass-panel rounded-xl p-lg flex flex-col h-full">
<h3 className="font-label-md text-label-md text-on-surface mb-lg">Recent Model Invocations</h3>
<div className="flex-1 flex flex-col gap-6 relative">
{/* Timeline vertical line */}
<div className="absolute left-4 top-2 bottom-2 w-px bg-outline-variant/30"></div>
{/* Item 1 */}
<div className="flex gap-4 relative z-10 group">
<div className="w-8 h-8 rounded-full bg-surface border border-primary/30 flex items-center justify-center shadow-[0_0_10px_rgba(192,193,255,0.1)] group-hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[16px] text-primary">smart_toy</span>
</div>
<div className="flex-1 pb-4 border-b border-outline-variant/10">
<div className="flex justify-between items-start mb-1">
<h4 className="font-body-md text-[14px] text-on-surface">Nexus-v4 Core</h4>
<span className="font-label-sm text-[10px] text-on-surface-variant">Just now</span>
</div>
<p className="font-body-md text-[12px] text-on-surface-variant line-clamp-1">Data synthesis and aggregation completed successfully.</p>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 rounded-sm bg-surface-variant text-[10px] text-on-surface border border-white/5">842 tokens</span>
<span className="px-2 py-0.5 rounded-sm bg-secondary-container/10 text-[10px] text-secondary-container border border-secondary-container/20">Success</span>
</div>
</div>
</div>
{/* Item 2 */}
<div className="flex gap-4 relative z-10 group">
<div className="w-8 h-8 rounded-full bg-surface border border-tertiary/30 flex items-center justify-center shadow-[0_0_10px_rgba(47,217,244,0.1)] group-hover:border-tertiary transition-colors">
<span className="material-symbols-outlined text-[16px] text-tertiary">bolt</span>
</div>
<div className="flex-1 pb-4 border-b border-outline-variant/10">
<div className="flex justify-between items-start mb-1">
<h4 className="font-body-md text-[14px] text-on-surface">Nexus-Lite</h4>
<span className="font-label-sm text-[10px] text-on-surface-variant">2m ago</span>
</div>
<p className="font-body-md text-[12px] text-on-surface-variant line-clamp-1">Quick query processing for search indexing.</p>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 rounded-sm bg-surface-variant text-[10px] text-on-surface border border-white/5">124 tokens</span>
</div>
</div>
</div>
{/* Item 3 */}
<div className="flex gap-4 relative z-10 group">
<div className="w-8 h-8 rounded-full bg-surface border border-error/30 flex items-center justify-center shadow-[0_0_10px_rgba(255,180,171,0.1)] group-hover:border-error transition-colors">
<span className="material-symbols-outlined text-[16px] text-error">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="font-body-md text-[14px] text-on-surface">Vision Processor</h4>
<span className="font-label-sm text-[10px] text-on-surface-variant">15m ago</span>
</div>
<p className="font-body-md text-[12px] text-on-surface-variant line-clamp-1">Timeout during image vectorization.</p>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 rounded-sm bg-error-container/20 text-[10px] text-error border border-error/20">Retry scheduled</span>
</div>
</div>
</div>
</div>
</section>
{/* Usage Breakdown (Gauge Charts) */}
<section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-lg">
<div className="glass-panel rounded-xl p-lg flex items-center gap-xl relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"></div>
{/* Gauge SVG Placeholder */}
<div className="w-24 h-24 relative flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-surface-variant stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
<path className="text-tertiary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="75, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-headline-md font-headline-md text-on-surface">75%</span>
</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">Nexus-v4 Distribution</h4>
<p className="font-body-md text-sm text-on-surface-variant">Primary heavy-lifting model accounts for the majority of compute resources this cycle.</p>
</div>
</div>
<div className="glass-panel rounded-xl p-lg flex items-center gap-xl relative overflow-hidden">
<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
{/* Gauge SVG Placeholder */}
<div className="w-24 h-24 relative flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-surface-variant stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
<path className="text-primary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="25, 100" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-headline-md font-headline-md text-on-surface">25%</span>
</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">Nexus-Lite Distribution</h4>
<p className="font-body-md text-sm text-on-surface-variant">Efficient background tasks and quick parsing operations.</p>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
