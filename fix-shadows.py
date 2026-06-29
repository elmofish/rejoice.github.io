import re

# Read the CSS file
with open('style.css', 'r') as f:
    content = f.read()

# Replace all shadow variations with the unified shadow
replacements = [
    ('--panel-shadow: 0 24px 60px rgba(0,0,0,0.16);', '--panel-shadow: 0 24px 60px rgba(0,0,0,0.2);'),
    ('box-shadow:0 6px 20px rgba(0,0,0,0.18)', 'box-shadow:0 24px 60px rgba(0,0,0,0.2)'),
    ('box-shadow:0 4px 14px rgba(156,48,204,0.2)', 'box-shadow:0 24px 60px rgba(0,0,0,0.2)'),
    ('box-shadow:0 8px 30px #1DB9541A', 'box-shadow:0 24px 60px rgba(0,0,0,0.2)'),
    ('box-shadow:0 12px 40px #1DB9542A', 'box-shadow:0 24px 60px rgba(0,0,0,0.2)'),
    ('box-shadow: 0 10px 30px rgba(12,8,38,0.15);', 'box-shadow: 0 24px 60px rgba(0,0,0,0.2);'),
    ('box-shadow: 0 8px 30px rgba(156,48,204,0.28);', 'box-shadow: 0 24px 60px rgba(0,0,0,0.2);'),
    ('box-shadow:0 16px 40px rgba(12,8,38,0.22);', 'box-shadow:0 24px 60px rgba(0,0,0,0.2);'),
]

for old, new in replacements:
    content = content.replace(old, new)

# Write the updated CSS
with open('style.css', 'w') as f:
    f.write(content)

 All shadows unified to 0 24px 60px rgba(0,0,0,0.2)')print('
