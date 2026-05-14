import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      
{/* TopNavBar */}
<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-container-max z-50 rounded-full bg-surface/80 backdrop-blur-xl text-primary font-body-md border border-white/10 shadow-[0_0_40px_rgba(73,75,214,0.15)] flex justify-between items-center px-8 py-3">
<Link to="/" className="text-headline-lg font-headline-lg font-bold tracking-tighter text-on-surface">
            Nexus AI
        </Link>
<div className="hidden md:flex items-center gap-lg">
<Link className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" to="/chat">Products</Link>
<Link className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" to="/marketplace">Marketplace</Link>
<Link className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" to="/docs">Docs</Link>
<Link className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" to="/pricing">Pricing</Link>
</div>
<div className="flex items-center gap-md">
<button className="hidden md:block text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300">
                Login
            </button>
<button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-full scale-95 active:scale-90 transition-transform shadow-[0_0_15px_rgba(192,193,255,0.4)] hover:shadow-[0_0_25px_rgba(192,193,255,0.6)]">
                Get Started
            </button>
</div>
</nav>
<main className="w-full">
{/* Hero Section */}
<section className="relative pt-[160px] pb-xxl px-gutter max-w-container-max mx-auto flex flex-col items-center text-center overflow-hidden min-h-[90vh] flex justify-center">
{/* Aurora Background Illusion via CSS Gradients */}
<div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(73, 75, 214, 0.2) 0%, transparent 60%), radial-gradient(circle at 80% 60%, rgba(47, 217, 244, 0.15) 0%, transparent 50%)' }}></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-lg">
<div className="inline-flex items-center gap-sm px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-sm text-label-sm mb-md shadow-[0_0_20px_rgba(192,193,255,0.1)]">
<span className="material-symbols-outlined text-[16px]">flare</span>
                    Nexus OS 2.0 is now live
                </div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter leading-tight drop-shadow-2xl">
                    The Intelligence Layer <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">for Everything.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-md">
                    A unified ecosystem for chat, code, and autonomous agents. Built on Obsidian Intelligence principles for unprecedented clarity and power.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-md mt-xl">
<button className="bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-8 py-4 rounded-full shadow-[0_0_30px_rgba(114,255,112,0.3)] hover:shadow-[0_0_40px_rgba(114,255,112,0.5)] transition-shadow flex items-center gap-sm">
                        Get Started Free
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button className="glass-panel text-on-surface font-label-md text-label-md px-8 py-4 rounded-full hover:bg-white/5 transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[20px]">play_circle</span>
                        Watch Demo
                    </button>
</div>
</div>
{/* Central Preview Window */}
<div className="relative z-10 w-full max-w-5xl mt-[80px] glass-panel rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
{/* Mac-style top bar */}
<div className="w-full h-10 bg-surface-container-highest/50 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-outline-variant/50"></div>
<div className="w-3 h-3 rounded-full bg-outline-variant/50"></div>
<div className="w-3 h-3 rounded-full bg-outline-variant/50"></div>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-12 gap-md h-[400px]">
<div className="col-span-4 flex flex-col gap-md border-r border-white/5 pr-md">
<div className="h-10 w-3/4 bg-surface-container/50 rounded-lg"></div>
<div className="h-4 w-full bg-surface-container/30 rounded mt-auto"></div>
<div className="h-4 w-5/6 bg-surface-container/30 rounded"></div>
<div className="h-4 w-4/6 bg-surface-container/30 rounded"></div>
</div>
<div className="col-span-8 flex flex-col font-mono text-sm text-tertiary-fixed gap-2 pl-md relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-container/80 z-10 pointer-events-none"></div>
<div className="text-outline"># Initializing Obsidian Agent Core...</div>
<div><span className="text-secondary-fixed">import</span> nexus <span className="text-secondary-fixed">from</span> '@nexus/core'</div>
<div className="mt-4 text-on-surface">const agent = new nexus.Agent(&#123;</div>
<div className="pl-4">model: <span className="text-primary">'obsidian-v2'</span>,</div>
<div className="pl-4">capabilities: [<span className="text-primary">'code'</span>, <span className="text-primary">'data_analysis'</span>]</div>
<div className="text-on-surface">&#125;);</div>
<div className="mt-4 text-outline">// Agent stream established. Waiting for prompt...</div>
<div className="mt-4 flex items-center gap-2">
<span className="w-2 h-4 bg-tertiary inline-block"></span>
</div>
</div>
</div>
</div>
</section>
{/* Partner Marquee (Static representation) */}
<section className="py-xl border-y border-white/5 bg-surface-container-lowest/50 backdrop-blur-md overflow-hidden flex flex-col items-center gap-lg">
<p className="font-label-sm text-label-sm text-outline-variant uppercase tracking-widest text-center">Trusted by forward-thinking teams</p>
<div className="flex justify-center flex-wrap gap-xxl opacity-50 filter grayscale">
{/* Placeholders for logos */}
<div className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined">api</span> Acme Corp</div>
<div className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined">webhook</span> Globex</div>
<div className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined">schema</span> Initech</div>
<div className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined">hub</span> Soylent</div>
</div>
</section>
{/* AI Capabilities Bento Grid */}
<section className="py-xxl px-gutter max-w-container-max mx-auto">
<div className="mb-xl text-center max-w-2xl mx-auto">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-sm">Unleash Obsidian Power</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Three pillars of intelligence, working in perfect synchrony within a beautifully minimal interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
{/* Chat (Large) */}
<div className="md:col-span-8 glass-panel rounded-[24px] p-xl flex flex-col justify-between group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-md border border-primary/20">
<span className="material-symbols-outlined text-primary">forum</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Intuitive Chat</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Conversational interfaces that feel less like a tool and more like an extension of your own thought process.</p>
</div>
<div className="mt-xl relative h-48 w-full rounded-lg overflow-hidden border border-white/5 bg-surface-container-low/50">
{/* Image generated with strict prompt */}
<div className="absolute inset-0 bg-center bg-cover" data-alt="A macro, close-up shot of a sophisticated chat interface screen floating in a dark, minimalist environment. The UI features frosted glass panels with glowing neon-blue and cyan text, embodying the 'Obsidian Intelligence' aesthetic. Soft, diffuse light reveals subtle grain textures on the dark slate background, suggesting high-end, premium software design." style={{ backgroundImage: "url('https://placeholder.pics/svg/300')" }}></div>
</div>
</div>
{/* Build (Small, vertical) */}
<div className="md:col-span-4 glass-panel rounded-[24px] p-xl flex flex-col justify-between relative overflow-hidden group">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary/10 blur-[60px] rounded-full group-hover:bg-tertiary/20 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-md border border-tertiary/20">
<span className="material-symbols-outlined text-tertiary">code_blocks</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Build Faster</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Generate production-ready code with deep contextual awareness of your entire codebase.</p>
</div>
</div>
{/* Automate (Wide) */}
<div className="md:col-span-12 glass-panel rounded-[24px] p-xl flex flex-col md:flex-row items-center gap-xl relative overflow-hidden border-t-0 border-r-0 border-b-2 border-l-0" style={{ borderImage: 'linear-gradient(to right, transparent, rgba(114,255,112,0.3), transparent) 1' }}>
<div className="flex-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 text-secondary-fixed text-label-sm font-label-sm mb-md border border-secondary-fixed/20 shadow-[0_0_15px_rgba(114,255,112,0.1)]">
<span className="w-2 h-2 rounded-full bg-secondary-fixed"></span> Active
                        </div>
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Agentic Automation</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Deploy specialized AI agents that execute complex, multi-step workflows autonomously in the background.</p>
</div>
<div className="flex-1 w-full h-64 bg-surface-container-high/30 rounded-xl border border-white/5 relative flex items-center justify-center overflow-hidden">
<div className="absolute w-32 h-32 border border-outline-variant/30 rounded-full animate-pulse"></div>
<div className="absolute w-48 h-48 border border-outline-variant/20 rounded-full"></div>
<span className="material-symbols-outlined text-[48px] text-surface-tint drop-shadow-[0_0_15px_rgba(192,193,255,0.5)]">robot_2</span>
</div>
</div>
</div>
</section>
{/* Pricing Preview */}
<section className="py-xxl px-gutter max-w-container-max mx-auto relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="text-center mb-xl relative z-10">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-sm">Transparent Pricing</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Scale your intelligence layer as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg relative z-10">
{/* Starter */}
<div className="glass-panel rounded-xl p-lg flex flex-col gap-md">
<h3 className="font-headline-lg text-headline-lg text-on-surface">Starter</h3>
<div className="text-display-lg font-display-lg text-on-surface">$0<span className="text-headline-lg text-on-surface-variant">/mo</span></div>
<ul className="flex flex-col gap-sm mt-md font-body-md text-on-surface-variant flex-1">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-outline">check</span> Basic Chat</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-outline">check</span> Community Support</li>
</ul>
<button className="w-full py-3 rounded-lg border border-outline-variant text-on-surface font-label-md hover:bg-white/5 transition-colors mt-lg">Start Free</button>
</div>
{/* Pro (Featured) */}
<div className="glass-panel rounded-xl p-lg flex flex-col gap-md border-tertiary/50 shadow-[0_0_40px_rgba(47,217,244,0.15)] relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-tertiary text-on-tertiary rounded-full font-label-sm text-label-sm shadow-[0_0_20px_rgba(47,217,244,0.4)]">Most Popular</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface">Pro</h3>
<div className="text-display-lg font-display-lg text-on-surface">$49<span className="text-headline-lg text-on-surface-variant">/mo</span></div>
<ul className="flex flex-col gap-sm mt-md font-body-md text-on-surface-variant flex-1">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-tertiary">check</span> Unlimited Chat</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-tertiary">check</span> 5 Autonomous Agents</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-tertiary">check</span> Priority Processing</li>
</ul>
<button className="w-full py-3 rounded-lg bg-tertiary text-on-tertiary font-label-md shadow-[0_0_20px_rgba(47,217,244,0.3)] hover:shadow-[0_0_30px_rgba(47,217,244,0.5)] transition-shadow mt-lg">Upgrade to Pro</button>
</div>
{/* Enterprise */}
<div className="glass-panel rounded-xl p-lg flex flex-col gap-md">
<h3 className="font-headline-lg text-headline-lg text-on-surface">Enterprise</h3>
<div className="text-headline-lg font-headline-lg text-on-surface mt-2 mb-[14px]">Custom</div>
<ul className="flex flex-col gap-sm mt-md font-body-md text-on-surface-variant flex-1">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-outline">check</span> Custom Models</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-outline">check</span> Unlimited Agents</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-outline">check</span> Dedicated SLA</li>
</ul>
<button className="w-full py-3 rounded-lg border border-outline-variant text-on-surface font-label-md hover:bg-white/5 transition-colors mt-lg">Contact Sales</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="w-full mt-xxl bg-surface-container-lowest border-t border-outline-variant/20 max-w-container-max mx-auto px-gutter py-xl flex flex-col md:flex-row justify-between items-center gap-md font-label-sm text-label-sm text-on-surface-variant">
<div className="text-body-lg font-bold text-on-surface">
            Nexus AI
        </div>
<div className="flex items-center gap-lg">
<Link className="text-on-surface-variant hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100" to="#">Privacy Policy</Link>
<Link className="text-on-surface-variant hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100" to="#">Terms of Service</Link>
<Link className="text-on-surface-variant hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100" to="#">Security</Link>
<Link className="text-on-surface-variant hover:text-on-surface hover:underline transition-all opacity-80 hover:opacity-100" to="#">Status</Link>
</div>
<div>
            © 2024 Nexus AI. Obsidian Intelligence Systems.
        </div>
</footer>

    </>
  );
}
