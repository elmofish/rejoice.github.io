import re

def format_html_proper(content):
    lines = content.split('\n')
    formatted = []
    indent = 0
    indent_str = '\t'
    
    for line in lines:
        line = line.strip()
        
        if not line:
            continue
        
        # Closing tags reduce indent first
        if line.startswith('</'):
            indent = max(0, indent - 1)
        
        formatted.append(indent_str * indent + line)
        
        # Opening tags increase indent (except self-closing)
        if line.startswith('<') and not line.startswith('</'):
            if not line.endswith('/>') and not line.startswith('<!') and line != '<br>' and not line.startswith('<meta') and not line.startswith('<link'):
                indent += 1
    
    return '\n'.join(formatted)

files = ['index.html', 'checkdates.html', 'Contact.html']

for fname in files:
    try:
        with open(fname, 'r') as f:
            content = f.read()
        formatted = format_html_proper(content)
        with open(fname, 'w') as f:
            f.write(formatted)
        print( Formatted {fname}')f'
    except Exception as e:
        print(f'Error with {fname}: {e}')
