# Bondly — Interactive Chemistry Learning & Molecular Intelligence Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)]()
[![Platform: Web Native](https://img.shields.io/badge/Platform-Web%20Native-purple.svg)]()

> **Understand how 3D atomic geometry and functional groups dictate macro-scale physical, biological, and chemical properties.**

Bondly is an interactive, web-native chemistry education and exploration platform engineered to bridge the fundamental pedagogical gap between microscopic 3D molecular conformations and macroscopic physical, chemical, and pharmacological phenomena.

---

## 🌟 Key Features

- 🔬 **Optical 3D Molecular Chamber**: Real-time 3D rendered conformations with multi-mode representations (Ball & Stick, Spacefill/vdW, Stick, Surface) powered by 3Dmol.js.
- 🎯 **Functional Group Highlighting**: Dynamic, color-coded pharmacophore and functional group isolation directly synced between the property panel and the 3D viewer.
- 🧪 **Interactive Periodic Table**: Full interactive periodic system with elemental classifications, electron configurations, and periodic trends.
- 📊 **Congener & Isomer Comparison Matrix**: Side-by-side comparative inspection highlighting subtle atomic substitutions and delta divergences in boiling points, LogP, and hydrogen bonding.
- 🔍 **Universal Compound Discovery**: Search by IUPAC name, common alias, empirical formula, SMILES, or CAS number with categorized taxonomy filters.
- 💾 **Crystallographic Data Export**: Direct export of standardized 3D coordinate formats (SDF, PDB) for academic and laboratory workflows.

---

## 🚀 Quick Start

Bondly is built with web-native HTML5, CSS3, and modern ES6 JavaScript. No compilation step is required.

### 1. Clone the repository
```bash
git clone https://github.com/<username>/bondly-website.git
cd bondly-website
```

### 2. Run locally
You can serve the application using any static HTTP server:

**Using Python:**
```bash
python -m http.server 3000
```

**Using Node (`serve` or `http-server`):**
```bash
npx serve .
```

Open your browser at `http://localhost:3000`.

---

## 📁 Directory Structure

```text
├── index.html                     # Core application single-page interface
├── css/
│   └── styles.css                 # Design system, responsive layout, glassmorphic themes
├── js/
│   ├── app.js                     # State management, router, 3D chamber controller
│   ├── compounds-data.js          # Curated compound library with 3D models and constants
│   └── periodic-data.js           # 118-element periodic table dataset
├── data/
│   ├── compounds.json             # Expanded molecular dataset
│   └── sdf_3d/                    # Curated 3D SDF crystallographic coordinates
└── scripts/
    ├── fetch_pubchem_data.py      # PubChem PUG-REST API ingestion pipeline
    ├── generate_full_periodic.py  # Periodic table data generator
    └── seed_compounds.py          # Data curation and validation scripts
```

---

## 🔬 Scientific Data Sources

- **PubChem PUG-REST API**: Chemical structures, IUPAC names, 3D conformer coordinates.
- **CRC Handbook of Chemistry & Physics**: Thermodynamic and physicochemical benchmarks.
- **RSC ChemSpider & NIST WebBook**: Empirical spectra and physical constants.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
