import os
import re

directory = 'src/pages'

files_to_process = [
    'LandingPage.jsx',
    'ChatWorkspace.jsx',
    'AgentsMarketplace.jsx',
    'AnalyticsDashboard.jsx'
]

routes = {
    'Nexus Chat': '/chat',
    'Marketplace': '/marketplace',
    'Analytics': '/analytics',
    'Knowledge': '/knowledge',
    'Settings': '/settings',
    'Help': '/help',
    'Account': '/account',
    'Products': '/chat',
    'Docs': '/docs',
    'Pricing': '/pricing'
}

for filename in files_to_process:
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r') as f:
        content = f.read()

    # Add import if missing
    if "import { Link } from 'react-router-dom'" not in content:
        content = content.replace("import React from 'react';", "import React from 'react';\nimport { Link } from 'react-router-dom';")

    # The format in the JSX is typically:
    # <a className="..." href="#">
    #   <span ...>icon</span>
    #   Text
    # </a>
    # Or just <a href="#">Text</a>
    
    # 1. Replace all <a ... href="..."> with <Link ... to="...">
    # We will use regex to find <a> tags and replace with <Link>
    
    # Simple regex to replace <a and </a>
    content = re.sub(r'<a\b', r'<Link', content)
    content = re.sub(r'</a>', r'</Link>', content)
    
    # Replace href= with to=
    content = re.sub(r'\bhref=', r'to=', content)

    # Now, we need to map the to="#" or to="/" to the correct paths based on the text inside the link.
    # A link might look like: <Link to="#">\n<span ...>icon</span>\n  Nexus Chat\n</Link>
    # We can use regex to find `<Link ... to="X" ...> ... Text ... </Link>` and replace X with the correct route.
    
    for text, route in routes.items():
        # Regex to find to="..." inside a <Link> that contains the specific text before the closing </Link>
        # This regex matches the `to="..."` part, captures everything up to the text, and replaces the `to` value.
        # It handles newlines and nested spans.
        pattern = r'(<Link[^>]*?to=)"[^"]*"([^>]*>(?:(?!</Link>).)*?' + re.escape(text) + r'(?:(?!</Link>).)*?</Link>)'
        content = re.sub(pattern, r'\1"' + route + r'"\2', content, flags=re.DOTALL)

    # Wrap the logo in a Link to="/"
    # The logo is typically:
    # <div className="text-headline-lg font-headline-lg font-bold tracking-tighter text-on-surface">Nexus AI</div>
    content = content.replace(
        '<div className="text-headline-lg font-headline-lg font-bold tracking-tighter text-on-surface">\n            Nexus AI\n        </div>',
        '<Link to="/" className="text-headline-lg font-headline-lg font-bold tracking-tighter text-on-surface">\n            Nexus AI\n        </Link>'
    )

    with open(filepath, 'w') as f:
        f.write(content)

print("Links fixed robustly!")
