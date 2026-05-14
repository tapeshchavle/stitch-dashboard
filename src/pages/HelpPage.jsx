import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center noise-overlay">
      <div className="glass-panel p-xl rounded-[24px] text-center max-w-lg">
        <span className="material-symbols-outlined text-display-lg text-primary mb-md">construction</span>
        <h1 className="text-headline-xl font-bold mb-sm">Help</h1>
        <p className="text-body-lg text-on-surface-variant mb-xl">
          This page is currently under construction.
        </p>
        <Link to="/" className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-full hover:brightness-110 transition-all inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}
