import os
import re

pages = {
    'Knowledge': '/knowledge',
    'Settings': '/settings',
    'Help': '/help',
    'Account': '/account',
    'Docs': '/docs',
    'Pricing': '/pricing'
}

# We will create simple placeholder pages that use the sidebar layout from ChatWorkspace
# Wait, let's just make them simple centered text pages with Tailwind classes for now
# since extracting the exact sidebar into a shared layout requires refactoring all components.

os.makedirs('src/pages', exist_ok=True)

for name, path in pages.items():
    component_name = f"{name}Page"
    content = f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

export default function {component_name}() {{
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center noise-overlay">
      <div className="glass-panel p-xl rounded-[24px] text-center max-w-lg">
        <span className="material-symbols-outlined text-display-lg text-primary mb-md">construction</span>
        <h1 className="text-headline-xl font-bold mb-sm">{name}</h1>
        <p className="text-body-lg text-on-surface-variant mb-xl">
          This page is currently under construction.
        </p>
        <Link to="/" className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-full hover:brightness-110 transition-all inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}}
"""
    with open(f"src/pages/{component_name}.jsx", "w") as f:
        f.write(content)

print("Created placeholder pages!")
