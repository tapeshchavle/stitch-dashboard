import urllib.request
import re
import os

urls = {
    'LandingPage': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2M2OTJjNTZhN2JhNDQ4MmFiZmU0NDRhMjAzMDlhZGEyEgsSBxDmx9eg-A8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYxMjAwMDgyMjU3ODM1Nzk2MQ&filename=&opi=89354086',
    'ChatWorkspace': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Q2YmQ5YmFlYjQ0ZTRjNGY5NDE5MTY2YjIyZGQyZjhmEgsSBxDmx9eg-A8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYxMjAwMDgyMjU3ODM1Nzk2MQ&filename=&opi=89354086',
    'AgentsMarketplace': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzYzMDY1NTZlN2ViODRiYmZiNDliMzdkOTBiZWFmMzk2EgsSBxDmx9eg-A8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYxMjAwMDgyMjU3ODM1Nzk2MQ&filename=&opi=89354086',
    'AnalyticsDashboard': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdiNTdhNDcxYzYyZTQzMzk5NjRkNmJlYmUxNTE2Nzc4EgsSBxDmx9eg-A8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYxMjAwMDgyMjU3ODM1Nzk2MQ&filename=&opi=89354086'
}

def html_to_jsx(html):
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        content = body_match.group(1)
    else:
        content = html

    # Basic replacements
    content = content.replace('class="', 'className="')
    content = content.replace('for="', 'htmlFor="')
    content = content.replace('<!--', '{/*')
    content = content.replace('-->', '*/}')
    content = content.replace('stroke-width', 'strokeWidth')
    content = content.replace('stroke-linecap', 'strokeLinecap')
    content = content.replace('stroke-linejoin', 'strokeLinejoin')
    
    # Close self-closing tags
    content = re.sub(r'<(img|input|br|hr)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    # Handle style objects roughly (this regex is fragile but might work for stitch's simple inline styles)
    # style="background-image: url('...'); background: ..."
    def style_replacer(match):
        style_str = match.group(1)
        styles = [s.strip() for s in style_str.split(';') if s.strip()]
        obj_props = []
        for s in styles:
            if ':' in s:
                k, v = s.split(':', 1)
                k = k.strip()
                v = v.strip()
                # camelCase keys
                k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                if "'" in v:
                    obj_props.append(f'{k}: "{v}"')
                else:
                    obj_props.append(f"{k}: '{v}'")
        return 'style={{ ' + ', '.join(obj_props) + ' }}'
    
    content = re.sub(r'style="([^"]*)"', style_replacer, content)

    # Some SVG props
    content = content.replace('clip-rule', 'clipRule')
    content = content.replace('fill-rule', 'fillRule')

    return content

os.makedirs('src/pages', exist_ok=True)

for name, url in urls.items():
    print(f"Downloading {name}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    jsx = html_to_jsx(html)
    
    component = f"""import React from 'react';

export default function {name}() {{
  return (
    <>
      {jsx}
    </>
  );
}}
"""
    with open(f'src/pages/{name}.jsx', 'w') as f:
        f.write(component)

print("Done converting screens!")
