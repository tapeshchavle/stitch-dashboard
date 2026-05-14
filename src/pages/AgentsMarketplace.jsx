import React from 'react';
import { Link } from 'react-router-dom';

export default function AgentsMarketplace() {
  return (
    <>
      
{/* SideNavBar */}
<nav className="fixed left-4 top-4 bottom-4 w-72 rounded-xl z-40 bg-surface-container-low/40 backdrop-blur-2xl border-r border-white/5 shadow-2xl shadow-black/50 flex flex-col h-full py-md px-sm hidden md:flex">
{/* Header */}
<div className="flex items-center gap-sm px-4 pt-4 pb-8 border-b border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-surface-container-lowest font-bold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-black text-on-surface leading-tight">Nexus OS</h1>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest opacity-60">Obsidian Intelligence</p>
</div>
</div>
{/* CTA */}
<div className="px-2 py-4">
<button className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all font-label-md text-label-md rounded-lg py-3 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
                New Session
            </button>
</div>
{/* Main Navigation */}
<div className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto mt-4">
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all rounded-lg font-label-md text-label-md hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/chat">
<span className="material-symbols-outlined">chat</span>
                Nexus Chat
            </Link>
<Link className="bg-primary/10 text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 rounded-r-lg font-label-md text-label-md" to="/settings">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>apps</span>
                Marketplace
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all rounded-lg font-label-md text-label-md hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/analytics">
<span className="material-symbols-outlined">monitoring</span>
                Analytics
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all rounded-lg font-label-md text-label-md hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/knowledge">
<span className="material-symbols-outlined">folder_managed</span>
                Knowledge
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all rounded-lg font-label-md text-label-md hover:backdrop-brightness-125 hover:translate-x-1 duration-200" to="/settings">
<span className="material-symbols-outlined">settings</span>
                Settings
            </Link>
</div>
{/* Footer Navigation */}
<div className="mt-auto pt-4 border-t border-white/5 px-2 pb-4 flex flex-col gap-1">
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-2 flex items-center gap-3 transition-all rounded-lg font-label-md text-label-md" to="/help">
<span className="material-symbols-outlined text-[18px]">help</span>
                Help
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-2 flex items-center gap-3 transition-all rounded-lg font-label-md text-label-md" to="/account">
<span className="material-symbols-outlined text-[18px]">account_circle</span>
                Account
            </Link>
</div>
</nav>
{/* Main Content Canvas */}
<main className="flex-1 ml-0 md:ml-80 min-h-screen p-gutter pb-xxl max-w-container-max mx-auto w-full">
{/* Header Section */}
<header className="mb-xl pt-lg">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                Augment your Workflow
            </h2>
{/* Category Filters */}
<div className="flex flex-wrap gap-3">
<button className="px-6 py-2 rounded-full glass-panel border-primary text-primary font-label-md text-label-md hover:bg-white/5 transition-colors shadow-[0_0_15px_rgba(192,193,255,0.15)]">
                    All
                </button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:text-on-surface hover:bg-white/5 transition-colors">
                    Coding
                </button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:text-on-surface hover:bg-white/5 transition-colors">
                    Research
                </button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:text-on-surface hover:bg-white/5 transition-colors">
                    Creative
                </button>
<button className="px-6 py-2 rounded-full glass-panel text-on-surface-variant font-label-md text-label-md hover:text-on-surface hover:bg-white/5 transition-colors">
                    Finance
                </button>
</div>
</header>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[240px]">
{/* Featured Agent (Large Card spanning 8 cols, 2 rows) */}
<div className="bento-card glass-panel col-span-1 md:col-span-8 row-span-2 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
{/* Inner subtle gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none"></div>
<div className="flex justify-between items-start z-10 relative">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary-container/20 mb-4">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim shadow-[0_0_8px_rgba(0,230,57,0.5)]"></span>
<span className="font-label-sm text-label-sm text-secondary-fixed-dim">Active Users: 12.4k</span>
</div>
<h3 className="font-display-lg text-display-lg text-on-surface mb-2">Nexus Coder</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Full-stack autonomous development agent. Specialized in modern web frameworks, API integration, and performance optimization.</p>
</div>
<div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center border border-white/10 shadow-lg">
<span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
</div>
</div>
<div className="mt-auto z-10 relative flex items-center justify-between">
<div className="flex gap-2">
<span className="px-3 py-1 rounded-md bg-surface text-on-surface-variant font-label-sm text-label-sm border border-white/5">React</span>
<span className="px-3 py-1 rounded-md bg-surface text-on-surface-variant font-label-sm text-label-sm border border-white/5">Python</span>
<span className="px-3 py-1 rounded-md bg-surface text-on-surface-variant font-label-sm text-label-sm border border-white/5">System Arch</span>
</div>
<button className="magnetic-button bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(128,131,255,0.2)]">
<span className="material-symbols-outlined text-sm">download</span>
                        Install Agent
                    </button>
</div>
</div>
{/* Standard Card: Insight Analyst (4 cols, 1 row) */}
<div className="bento-card glass-panel col-span-1 md:col-span-4 row-span-1 rounded-2xl p-6 flex flex-col relative overflow-hidden">
<div className="flex justify-between items-start mb-4 relative z-10">
<h4 className="font-headline-lg text-headline-lg text-on-surface text-[24px]">Insight Analyst</h4>
<span className="material-symbols-outlined text-tertiary">query_stats</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 relative z-10 line-clamp-2">Real-time market data aggregation and predictive financial modeling.</p>
{/* Mini Sparkline visualization */}
<div className="mt-auto h-16 w-full relative z-10 flex items-end gap-1 opacity-70">
<div className="w-full bg-tertiary/20 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-tertiary/40 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-tertiary/60 rounded-t-sm h-[25%]"></div>
<div className="w-full bg-tertiary/80 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-tertiary rounded-t-sm h-[85%] shadow-[0_0_10px_rgba(47,217,244,0.3)]"></div>
</div>
</div>
{/* Standard Card: Copy Architect (4 cols, 1 row) */}
<div className="bento-card glass-panel col-span-1 md:col-span-4 row-span-1 rounded-2xl p-6 flex flex-col relative overflow-hidden">
<div className="flex justify-between items-start mb-4 relative z-10">
<h4 className="font-headline-lg text-headline-lg text-on-surface text-[24px]">Copy Architect</h4>
<span className="material-symbols-outlined text-primary-fixed">edit_document</span>
</div>
{/* Text streaming preview simulation */}
<div className="mt-auto bg-surface-container-lowest/50 rounded-lg p-3 border border-white/5 relative z-10">
<div className="flex gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
</div>
<p className="font-body-md text-body-md text-primary-fixed text-sm font-mono opacity-80">Generating brand narrative...</p>
<div className="w-1 h-4 bg-primary-fixed inline-block ml-1 animate-pulse"></div>
</div>
</div>
{/* Standard Card: Visualizer (4 cols, 2 rows) */}
<div className="bento-card glass-panel col-span-1 md:col-span-4 row-span-2 rounded-2xl p-0 flex flex-col relative overflow-hidden group">
{/* Aurora gradient thumbnail area */}
<div className="h-48 w-full bg-gradient-to-br from-tertiary-container via-surface-dim to-primary-container relative">
<div className="absolute inset-0 bg-black/20"></div>
<img alt="Abstract digital rendering of a liquid glass orb floating over a dark obsidian surface. Lit by neon cyan and deep violet rim lights, creating a high-tech, ethereal atmosphere suitable for an AI interface." className="w-full h-full object-cover mix-blend-overlay opacity-50" data-alt="A striking digital installation art piece featuring a glowing, generative geometric orb suspended over a dark, highly polished obsidian surface. The scene is illuminated by intense neon cyan and deep violet rim lights, creating a moody, high-tech, dark-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and iridescent reflections. The mood is mysterious yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzt715FAnPyqUOZAqp5WDIzFUBF9GLSwhdGOuPOZf2CsHm07pJlF6d0hwzOpKyDEy3DrbWjl3n1TVrBAmcZiiL8Ypn6W4AVGggqWyXcIK4sm7z3As9a3AwTKZXTE23MPceZWM9Mjjl8H4-Z-p-eRH4BO8HQhCUN0_or-bO5g-3E2kae06d32tUoUjLblSqk_7MNOHaLcU2VTO1MRVRiEwjDwIMFlnJ5rQK-FwwubY3CV6VymqLFL7Atsg6EatUVZzDPKDTDgk8AjYN"/>
<div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-2 py-1 rounded text-xs font-label-sm text-on-surface border border-white/10">
                        Pro
                    </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline-lg text-headline-lg text-on-surface text-[24px]">Visualizer</h4>
<span className="material-symbols-outlined text-surface-tint">palette</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Text-to-3D asset generation and environment mapping for immersive web experiences.</p>
<div className="mt-auto">
<button className="w-full bg-surface-bright/30 hover:bg-surface-bright/50 text-on-surface font-label-md text-label-md py-2 rounded-lg border border-white/5 transition-colors">
                            View Gallery
                        </button>
</div>
</div>
</div>
{/* Standard Card: System Ops (8 cols, 1 row) */}
<div className="bento-card glass-panel col-span-1 md:col-span-8 row-span-1 rounded-2xl p-6 flex items-center justify-between relative overflow-hidden">
<div className="flex items-center gap-6 z-10 relative">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/10">
<span className="material-symbols-outlined text-secondary-container">memory</span>
</div>
<div>
<h4 className="font-headline-lg text-headline-lg text-on-surface text-[20px] mb-1">System Ops Guardian</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Automated infrastructure monitoring and incident resolution.</p>
</div>
</div>
<div className="flex items-center gap-4 z-10 relative">
<div className="text-right hidden sm:block">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Uptime</div>
<div className="font-label-md text-label-md text-secondary-fixed">99.99%</div>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-on-surface transition-colors">
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
