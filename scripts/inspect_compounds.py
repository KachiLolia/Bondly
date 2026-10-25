import json, re

with open('js/compounds-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract the JSON array
m = re.search(r'compounds:\s*(\[\s*\{.*\}\s*\])\s*};', text, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    print(f"Total compounds: {len(data)}")
    for c in data:
        print(f"Slug: {c.get('slug')}, has sdf_3d: {bool(c.get('sdf_3d'))}, smiles: '{c.get('smiles')}', mol_weight: {c.get('mol_weight')}")
else:
    print("Could not match compounds array")
