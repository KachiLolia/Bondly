import json
import os

with open("data/compounds.json", "r", encoding="utf-8") as f:
    compounds = json.load(f)

os.makedirs("js", exist_ok=True)

# Generate js/compounds-data.js
js_content = "/**\n * Bondly Chemical Intelligence Database - Curated v2.4\n * Precomputed 3D coordinates, verified IUPAC/CRC properties, and reviewed SAR stories.\n */\n"
js_content += "window.BONDLY_DATABASE = {\n"
js_content += f"  version: '2.4.0',\n"
js_content += f"  updated: '2026-10-24',\n"
js_content += f"  count: {len(compounds)},\n"
js_content += "  compounds: " + json.dumps(compounds, indent=2) + "\n"
js_content += "};\n"

with open("js/compounds-data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated js/compounds-data.js ({len(js_content)} bytes)")
