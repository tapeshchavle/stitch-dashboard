import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatWorkspace() {
  return (
    <>
      
{/* SideNavBar */}
<nav className="hidden md:flex flex-col h-full py-md px-sm bg-surface-container-low/40 backdrop-blur-2xl text-tertiary font-label-md text-label-md fixed left-4 top-4 bottom-4 w-72 rounded-xl z-40 border-r border-white/5 shadow-2xl shadow-black/50">
<div className="flex items-center gap-sm mb-xl px-sm">
<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
<span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-black text-on-surface leading-none">Nexus OS</h1>
<p className="text-[10px] text-on-surface-variant tracking-widest uppercase mt-1 opacity-70">Obsidian Intelligence</p>
</div>
</div>
<button className="mb-lg mx-sm w-[calc(100%-16px)] bg-gradient-to-r from-primary-container/80 to-primary/80 text-on-primary-container py-2.5 rounded-lg flex items-center justify-center gap-sm font-label-md text-label-md shadow-ambient hover:brightness-110 transition-all magnetic-btn">
<span className="material-symbols-outlined text-sm">add</span>
            New Session
        </button>
<div className="flex-1 overflow-y-auto space-y-xs pr-2 custom-scrollbar">
<Link className="bg-primary/10 text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 rounded-r-lg" to="/settings">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Nexus Chat
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200 rounded-lg border-l-4 border-transparent hover:backdrop-brightness-125" to="/marketplace">
<span className="material-symbols-outlined">apps</span>
                Marketplace
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200 rounded-lg border-l-4 border-transparent hover:backdrop-brightness-125" to="/analytics">
<span className="material-symbols-outlined">monitoring</span>
                Analytics
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200 rounded-lg border-l-4 border-transparent hover:backdrop-brightness-125" to="/knowledge">
<span className="material-symbols-outlined">folder_managed</span>
                Knowledge
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200 rounded-lg border-l-4 border-transparent hover:backdrop-brightness-125" to="/settings">
<span className="material-symbols-outlined">settings</span>
                Settings
            </Link>
</div>
<div className="mt-auto pt-md border-t border-white/5 space-y-xs">
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-2 flex items-center gap-3 transition-all rounded-lg text-sm" to="/help">
<span className="material-symbols-outlined text-sm">help</span>
                Help
            </Link>
<Link className="text-on-surface-variant hover:bg-white/5 px-4 py-2 flex items-center gap-3 transition-all rounded-lg text-sm" to="/account">
<span className="material-symbols-outlined text-sm">account_circle</span>
                Account
            </Link>
</div>
</nav>
{/* Main Content Area */}
<main className="flex-1 ml-0 md:ml-[320px] h-full flex flex-col p-4 md:p-6 relative">
{/* Top App Bar / Header (Mobile fallback or additional context) */}
<header className="flex justify-between items-center mb-6 px-4 md:px-0">
<div className="flex items-center gap-3">
<div className="md:hidden w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm">menu</span>
</div>
<div>
<h2 className="text-body-lg font-bold text-on-surface flex items-center gap-2">
                        Project Alpha Analysis
                        <span className="glow-chip text-primary px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ml-2">Active</span>
</h2>
<p className="text-label-sm font-label-sm text-on-surface-variant opacity-60">Using Model: Obsidian-V4</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-on-surface transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5">
<span className="material-symbols-outlined">share</span>
</button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</header>
{/* Chat & Context Layout */}
<div className="flex-1 flex gap-6 min-h-0 relative">
{/* Chat Container */}
<div className="flex-1 flex flex-col glass-panel rounded-2xl relative overflow-hidden">
{/* Chat Feed */}
<div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar relative z-10">
{/* User Message */}
<div className="flex flex-col items-end gap-2 max-w-[85%] ml-auto">
<div className="bg-surface-variant text-on-surface p-4 rounded-2xl rounded-tr-sm border border-white/5 shadow-ambient">
<p>Can you analyze the performance metrics from the Q3 database dump and generate a python script to visualize the anomalies?</p>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant opacity-50 px-2">10:42 AM</span>
</div>
{/* AI Message */}
<div className="flex flex-col items-start gap-2 max-w-[90%]">
<div className="flex items-center gap-3 mb-1">
<div className="w-6 h-6 rounded-full bg-tertiary/20 flex items-center justify-center border border-tertiary/30">
<span className="material-symbols-outlined text-tertiary text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
</div>
<span className="text-label-sm font-label-sm text-tertiary">Nexus</span>
</div>
<div className="bg-surface-container-low text-on-surface p-0 rounded-2xl rounded-tl-sm border border-white/5 shadow-ambient w-full overflow-hidden">
{/* Reasoning Accordion (Collapsed) */}
<div className="border-b border-white/5 px-4 py-2 bg-surface-container/50 cursor-pointer hover:bg-surface-container/80 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-2 text-on-surface-variant text-sm group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">psychology</span>
<span className="font-label-md">Reasoning Process (3 steps)</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-sm transition-transform">expand_more</span>
</div>
<div className="p-5 space-y-4">
<p className="leading-relaxed">I've analyzed the Q3 dump. The primary anomalies appear in the late-August transaction processing times. Here is a python script utilizing pandas and matplotlib to visualize these specific outliers.</p>
{/* Code Block */}
<div className="code-block rounded-lg overflow-hidden my-4">
<div className="flex justify-between items-center px-4 py-2 bg-surface-container-lowest border-b border-white/5">
<span className="text-label-sm text-on-surface-variant font-mono">python</span>
<div className="flex gap-2">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
                                            </button>
</div>
</div>
<div className="p-4 overflow-x-auto text-sm font-mono text-on-surface opacity-90 leading-relaxed">
<pre><code>import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('q3_metrics.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])

# Filter anomalies (Z-score &gt; 3)
mean_latency = df['latency_ms'].mean()
std_latency = df['latency_ms'].std()
anomalies = df[abs(df['latency_ms'] - mean_latency) &gt; 3 * std_latency]

# Plot
plt.figure(figsize=(12, 6))
plt.plot(df['timestamp'], df['latency_ms'], alpha=0.5, label='Normal')
plt.scatter(anomalies['timestamp'], anomalies['latency_ms'], color='red', label='Anomaly')
plt.title('Q3 Latency Anomalies')
plt.legend()
plt.show()</code></pre>
</div>
</div>
</div>
{/* Action Footer */}
<div className="px-4 py-2 bg-surface-container/30 border-t border-white/5 flex justify-end gap-3">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 text-[11px] uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[14px]">thumb_up</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 text-[11px] uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[14px]">thumb_down</span>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 text-[11px] uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[14px]">refresh</span> Regenerate
                                </button>
</div>
</div>
</div>
{/* Streaming / Thinking State */}
<div className="flex flex-col items-start gap-2 max-w-[90%] opacity-80">
<div className="flex items-center gap-3 mb-1">
<div className="w-6 h-6 rounded-full bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
<span className="material-symbols-outlined text-tertiary text-[12px]">smart_toy</span>
</div>
<span className="text-label-sm font-label-sm text-tertiary animate-pulse">Nexus is thinking...</span>
</div>
<div className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-tl-sm border border-white/5 shadow-ambient flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-tertiary animate-ping opacity-75"></div>
<div className="h-2 w-24 bg-white/10 rounded overflow-hidden">
<div className="h-full bg-tertiary/50 w-1/2 animate-[translateX_1s_infinite]"></div>
</div>
</div>
</div>
{/* Spacer for input */}
<div className="h-24"></div>
</div>
{/* Input Layer */}
<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="glass-panel rounded-xl p-2 flex flex-col gap-2 aurora-border bg-surface-container-high/80">
<textarea className="w-full bg-transparent border-none text-on-surface focus:ring-0 resize-none h-14 p-3 font-body-md text-sm placeholder-on-surface-variant/50 custom-scrollbar" placeholder="Ask Nexus..." style={{ outline: 'none' }}></textarea>
<div className="flex justify-between items-center px-2 pb-1">
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors" title="Attach File">
<span className="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-tertiary hover:bg-white/5 transition-colors" title="Voice Input">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-white/5 transition-colors" title="Tools">
<span className="material-symbols-outlined text-[20px]">construction</span>
</button>
</div>
<button className="bg-primary text-on-primary-container px-4 py-1.5 rounded-lg flex items-center gap-2 font-label-md text-sm magnetic-btn shadow-[0_0_15px_rgba(192,193,255,0.3)] hover:shadow-[0_0_25px_rgba(192,193,255,0.5)] transition-shadow">
                                Send
                                <span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
<div className="text-center mt-2">
<span className="text-[10px] text-on-surface-variant/40 font-label-sm uppercase tracking-widest">Nexus AI may produce inaccurate information.</span>
</div>
</div>
</div>
{/* Right Sidebar: Context & Tools */}
<aside className="hidden xl:flex w-80 flex-col gap-6">
{/* Attached Context */}
<div className="glass-panel rounded-xl p-5 flex flex-col gap-4">
<h3 className="text-label-md font-label-md text-on-surface flex items-center gap-2 border-b border-white/5 pb-2">
<span className="material-symbols-outlined text-sm">inventory_2</span> Active Context
                    </h3>
<div className="space-y-2">
<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
<span className="material-symbols-outlined text-secondary text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
<div className="flex-1 min-w-0">
<p className="text-sm text-on-surface truncate">q3_metrics.csv</p>
<p className="text-[10px] text-on-surface-variant">Spreadsheet • 2.4 MB</p>
</div>
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
<span className="material-symbols-outlined text-tertiary text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>api</span>
<div className="flex-1 min-w-0">
<p className="text-sm text-on-surface truncate">API_Docs_v2.md</p>
<p className="text-[10px] text-on-surface-variant">Markdown • 45 KB</p>
</div>
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
</div>
<button className="w-full py-2 border border-dashed border-white/10 rounded-lg text-xs text-on-surface-variant hover:text-on-surface hover:border-white/20 transition-all flex items-center justify-center gap-2 mt-2">
<span className="material-symbols-outlined text-[14px]">add</span> Add Context
                    </button>
</div>
{/* Active Agents */}
<div className="glass-panel rounded-xl p-5 flex flex-col gap-4 flex-1 min-h-0">
<h3 className="text-label-md font-label-md text-on-surface flex items-center justify-between border-b border-white/5 pb-2">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm">group_work</span> Connected Agents
                        </span>
<span className="glow-chip text-tertiary px-1.5 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">2 Active</span>
</h3>
<div className="overflow-y-auto pr-1 space-y-3 custom-scrollbar">
{/* Agent Card */}
<div className="p-3 bg-surface-container-low rounded-lg border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>
<div className="flex justify-between items-start mb-2 pl-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-sm">code</span>
<span className="text-sm font-label-md">Code Interpreter</span>
</div>
<div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#ecffe3]"></div>
</div>
<p className="text-xs text-on-surface-variant pl-2 leading-relaxed">Executing python sandbox environments for data analysis.</p>
</div>
{/* Agent Card */}
<div className="p-3 bg-surface-container-low rounded-lg border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
<div className="flex justify-between items-start mb-2 pl-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-sm">travel_explore</span>
<span className="text-sm font-label-md">Web Search</span>
</div>
<div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#ecffe3]"></div>
</div>
<p className="text-xs text-on-surface-variant pl-2 leading-relaxed">Accessing live internet data to verify recent documentation.</p>
</div>
{/* Inactive Agent Card */}
<div className="p-3 bg-surface-container-lowest rounded-lg border border-white/5 relative overflow-hidden opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface text-sm">image</span>
<span className="text-sm font-label-md">Image Gen</span>
</div>
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">Generate visual assets from text descriptions.</p>
</div>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
