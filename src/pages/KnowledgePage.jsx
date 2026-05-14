import React from 'react';
import { Link } from 'react-router-dom';

export default function KnowledgePage() {
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
            <Link className="bg-primary/10 text-primary border-l-4 border-primary rounded-r-lg px-4 py-3 flex items-center gap-3" to="/knowledge">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>folder_managed</span>
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
      <main className="flex-1 ml-0 md:ml-[320px] p-gutter max-w-container-max relative z-10 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-xl">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Knowledge Base</h2>
            <p className="text-body-md font-body-md text-on-surface-variant">Manage your external data sources and document integrations.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-full scale-95 hover:scale-100 active:scale-95 transition-all shadow-[0_0_15px_rgba(192,193,255,0.4)]">
              Upload File
            </button>
          </div>
        </header>

        {/* Connect Source Section */}
        <section className="mb-xl">
          <h3 className="font-label-md text-label-md text-on-surface mb-4">Connect Data Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            <div className="glass-panel rounded-xl p-lg flex items-center gap-4 group hover:bg-white/5 cursor-pointer transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-headline-sm text-on-surface">Google Drive</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Sync documents</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">add</span>
            </div>

            <div className="glass-panel rounded-xl p-lg flex items-center gap-4 group hover:bg-white/5 cursor-pointer transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <div className="flex-1">
                <h4 className="font-headline-sm text-on-surface">Notion</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Sync workspaces</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">add</span>
            </div>

            <div className="glass-panel rounded-xl p-lg flex items-center gap-4 group hover:bg-white/5 cursor-pointer transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <span className="material-symbols-outlined text-tertiary">api</span>
              </div>
              <div className="flex-1">
                <h4 className="font-headline-sm text-on-surface">Custom API</h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant">Webhooks & REST</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">add</span>
            </div>

          </div>
        </section>

        {/* Indexed Documents Table */}
        <section className="glass-panel rounded-xl p-0 overflow-hidden relative">
          <div className="p-lg border-b border-white/5 flex justify-between items-center bg-surface-container-low/50">
            <h3 className="font-label-md text-label-md text-on-surface">Indexed Documents</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">search</span>
              <input type="text" placeholder="Search..." className="bg-surface-variant/50 border border-outline-variant/30 rounded-full pl-10 pr-4 py-1.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-64" />
            </div>
          </div>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-surface-variant/20">
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Document Name</th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Source</th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Size</th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Last Sync</th>
                  <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="p-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-body-md text-on-surface">
                
                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                    Q3_Metrics_Final.csv
                  </td>
                  <td className="p-4 text-on-surface-variant">Google Drive</td>
                  <td className="p-4 text-on-surface-variant">2.4 MB</td>
                  <td className="p-4 text-on-surface-variant">10 mins ago</td>
                  <td className="p-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container/10 border border-secondary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(19,255,67,0.8)]"></span>
                      <span className="font-label-sm text-[11px] text-secondary-container uppercase">Synced</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-outline-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">api</span>
                    API_Docs_v2.md
                  </td>
                  <td className="p-4 text-on-surface-variant">Local Upload</td>
                  <td className="p-4 text-on-surface-variant">45 KB</td>
                  <td className="p-4 text-on-surface-variant">1 hour ago</td>
                  <td className="p-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container/10 border border-secondary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(19,255,67,0.8)]"></span>
                      <span className="font-label-sm text-[11px] text-secondary-container uppercase">Synced</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-outline-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/60 text-[20px]">description</span>
                    Q2_Architecture_Review.pdf
                  </td>
                  <td className="p-4 text-on-surface-variant">Google Drive</td>
                  <td className="p-4 text-on-surface-variant">12.1 MB</td>
                  <td className="p-4 text-on-surface-variant">Just now</td>
                  <td className="p-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                      <span className="w-3 h-3 rounded-full border-2 border-primary border-t-transparent animate-spin"></span>
                      <span className="font-label-sm text-[11px] text-primary uppercase">Indexing</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-outline-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
