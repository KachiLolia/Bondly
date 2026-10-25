# Product Requirements Document (PRD) & Product Brief
## **Project**: Bondly — Interactive Chemistry Learning & Molecular Intelligence Platform
**Document Version:** 2.0.0 (Updated with Mobile-First UX Architecture & Art-Directed Scientific Guidelines)  
**Status:** Approved for Implementation & Visual Reference  
**Audience:** Product Managers, Design Engineers, Frontend & Scientific Computing Teams

---

## 1. Executive Summary & Product Vision

### 1.1 Vision
**Bondly** is an interactive, web-native chemistry education and exploration platform engineered to bridge the fundamental pedagogical gap between microscopic 3D molecular conformations and macroscopic physical, chemical, and pharmacological phenomena. Rather than presenting chemistry as static 2D planar textbook drawings or dense, disembodied tabular databases, Bondly articulates the causal links between atomic spatial geometry, functional group electronics, and observable real-world properties.

### 1.2 Core Value Proposition
> *"Understand how 3D atomic geometry and functional groups dictate macro-scale physical, biological, and chemical properties."*

Bondly enables students, educators, and science enthusiasts to:
1. **Discover** chemical entities via universal multi-format inputs (empirical formulas, IUPAC names, common aliases, CAS registry numbers) and reactive taxonomy portals.
2. **Inspect & Isolate** 3D molecular conformations and reactive pharmacophores (functional groups) in an optical inspection chamber.
3. **Connect Form to Function** through plain-language structure-property relationship narratives backed by verified empirical literature and crystallographic standards.
4. **Compare Congeners & Isomers** side-by-side to understand why subtle atomic substitutions (e.g. replacing an $-OH$ with an $-NH_2$ or $-OCH_3$) trigger massive divergences in boiling points, hydrogen bond networks, and bioactivity.

---

## 2. Target Personas & User Journeys

### 2.1 Personas
* **Undergraduate & AP Chemistry Students (Primary):**
  * *Pain points:* Difficulty conceptualizing 3D molecular geometries from planar skeletal diagrams; confusion regarding why constitutional isomers have radically divergent physical properties.
  * *Needs:* Interactive 3D visualization, tactile functional group isolation, and direct plain-language explanations of mechanism (e.g., resonance delocalization, H-bond networks).
* **Educators & Lecturers (Secondary):**
  * *Pain points:* Existing molecular viewers (e.g., PyMOL, Jmol) have steep learning curves, cluttered desktop-centric UIs, and lack integrated pedagogical narratives.
  * *Needs:* High-fidelity, clutter-free visual demonstration tools suited for both desktop classroom projectors and mobile touch exploration.
* **Biotech / Pharma Researchers & Cross-Discipline Scientists:**
  * *Pain points:* Need quick, trustworthy verification of fundamental physicochemical constants without navigating ad-heavy chemical encyclopedias.
  * *Needs:* Rapid access to verified IUPAC/CRC empirical values (LogP, pKa, tPSA, melting/boiling points) and crystallographic exports (CIF/PDB).

### 2.2 Core User Journey
$$\text{Universal Search / Taxonomy} \longrightarrow \text{3D Molecular Chamber} \longrightarrow \text{Isolate Reactive Group} \longrightarrow \text{Mechanistic Narrative} \longrightarrow \text{Differential Congener Comparison}$$

---

## 3. Product Scope & Functional Architecture

### 3.1 Feature Hierarchy

| Module | Route | Key Capabilities | Viewports Supported |
|---|---|---|---|
| **Discovery Hub** | `/discover` | Universal multi-format search, "Surprise Me" instant generator, 7 Reactive Taxonomy portals, Curated Isomer Spotlight cards. | Desktop & Mobile |
| **Exploration Workspace** | `/workspace/:id` | Optical 3D/2D molecular inspection chamber, synchronized functional group isolation, tabular physicochemical constants, mechanistic structure-property narratives, CIF/PDB export. | Desktop & Mobile (Touch Optimized) |
| **Family Comparison Matrix** | `/compare` | Side-by-side congener inspection ($C_2$ series), visual delta divergence indicators, H-bond mechanics breakdown, resonance delocalization schemas. | Desktop & Mobile |

---

### 3.2 Screen-by-Screen Functional Specifications

#### Screen 1: Compound Discovery Hub (`/discover`)
* **Header & Identity:**
  * Brand wordmark with version tag (`Bondly v2.4`), search quick-action icon, and user account avatar.
* **Universal Search Bar:**
  * Search by empirical formula (e.g., `C9H8O4`), IUPAC nomenclature (*2-acetoxybenzoic acid*), common trivial names (*Aspirin*), and CAS registry numbers (`50-78-2`).
  * Instant auto-suggest chips with compound classification tags (*Analgesic*, *Salicylate*, *Ester*).
* **Curated Isomer Spotlight:**
  * Interactive contrast module demonstrating constitutional isomers: **Ethanol vs. Dimethyl Ether** ($\text{C}_2\text{H}_6\text{O}$), visually framing their massive $\Delta 102.37^\circ\text{C}$ boiling point divergence due to intermolecular hydrogen bonding.
* **7 Reactive Family Portals:**
  1. *Carboxylic Acids* (`-COOH`)
  2. *Alcohols & Phenols* (`-OH`)
  3. *Esters & Aromas* (`-COOR`)
  4. *Amines & Alkaloids* (`-NH2 / -NR2`)
  5. *Carbonyls (Aldehydes & Ketones)* (`C=O`)
  6. *Aromatic Rings* (`C6H5-`)
  7. *Amides & Peptides* (`-CONH-`)
* **Editorial Chemistry Insight:**
  * Rotating pedagogical spotlight (e.g. *Chirality & Thalidomide enantiomeric contrast*).

#### Screen 2: Compound Exploration Workspace (`/workspace/:compound_id`)
* **Molecular Viewer Chamber (Visual Centerpiece):**
  * High-contrast optical navy background (`#0B1522` / `#08111E`) optimizing emissive atomic glow and depth perception.
  * **2D/3D Mode Switch:** High-contrast segmented switch between 3D Ball & Stick, 2D Skeletal structure, and CPK space-filling models.
  * **HUD Measurement Controls:** Bottom docked glassmorphic HUD indicating FOV, Ångström resolution ($1.05\,\text{Å}$), dipole moment ($\mu = 2.14\,\text{D}$), camera rotation, and recenter toggles.
  * **CPK Element Standard:** Carbon (Slate `#2D3748`), Oxygen (Red `#E53E3E`), Hydrogen (White `#EDF2F7`), Nitrogen (Blue `#3182CE`).
* **Synchronized Functional Group Isolation:**
  * Interactive functional group selector:
    - *Ester Group (`-COO-R`)* — Amber highlight state (`#F2B84B` / `#D97706`), atom count pill (`4 atoms highlighted`), directly corresponding to glowing orbital volume in 3D viewer.
    - *Carboxylic Acid (`-COOH`)* — Ionization profile at physiological pH ($pK_a = 3.49$).
    - *Aromatic Ring (`C6H4-`)* — Planar $\pi$-electron resonance system.
* **Tabular Physicochemical Metrics:**
  * Clean 2x2 / 2x3 matrix displaying Molar Mass ($180.16\,\text{g/mol}$), Partition $\log P$ ($1.19$), Melting Point ($135.0^\circ\text{C}$), Water Solubility ($3.3\,\text{mg/mL}$), $pK_a$, and Polar Surface Area ($t\text{PSA}$). All numeric figures rendered in tabular monospace font.
* **Mechanistic & Pharmacological Narratives:**
  * *Hydrolytic Susceptibility:* Explaining ester cleavage in the presence of water and human carboxylesterases to yield salicylic acid and acetic acid.
  * *Gastric Transcellular Permeability:* Explaining why un-ionized carboxyl groups in gastric acid ($pH\text{ 1.5–2.0}$) rapidly cross the lipophilic mucosal bilayer.
  * *Historical Milestone Card:* Felix Hoffmann's 1897 acetylation breakthrough at Bayer Laboratories with formal peer-reviewed citation (*Vane, J. R., Nature New Biol. 1971*).
* **Export Actions:**
  * Primary action: Compare with congener (*Salicylic Acid*).
  * Secondary action: Crystallographic export (*CIF · PDB*).

#### Screen 3: Compound Family Comparison Matrix (`/compare`)
* **Congener Inspector Bar:**
  * Synchronized comparison of congruent $C_2$ carbon skeletons: **Acetic Acid** vs. **Ethyl Acetate** vs. **Acetamide**.
* **Differential Metric Matrix:**
  * Comparative normal boiling point rows with proportional data bars and explicit divergence flags:
    - Acetamide ($222.0^\circ\text{C}$) vs. Ethyl Acetate ($77.1^\circ\text{C}$) — highlighting the immense $\Delta 145^\circ\text{C}$ boiling point paradox.
  * Hydrogen-bond donor:acceptor ratios (Acid 1:2, Ester 0:2, Amide 2:1).
  * Organoleptic & Acidity differential profiles (pungent vinegar vs. fruity pear drop vs. mild mouse-like).
* **Mechanistic Breakdown:**
  * Visual resonance delocalization diagram showing amide zwitterionic canonical structures and continuous solid-state hydrogen-bonded sheet formation.

---

## 4. Visual Identity & Design System Guidelines

### 4.1 Aesthetic Concept: *Modern Scientific Editorial*
Combines the exacting visual precision of peer-reviewed scientific journals (*Nature*, *Science*) with the legibility, typography rhythm, and restraint of high-end editorial publications.

### 4.2 Core Color Tokens
| Token | Hex | Semantic Role |
|---|---|---|
| `surface-base` | `#F7F8F5` | Warm neutral scientific canvas background |
| `surface-card` | `#FFFFFF` / `#EFF4F7` | Editorial containers and metric cards |
| `surface-chamber` | `#0B1522` / `#08111E` | Deep navy optical inspection chamber |
| `text-primary` | `#14263D` | Primary titles, compound names, and headers |
| `text-muted` | `#536471` / `#627B8A` | Formula labels, captions, metadata |
| `accent-teal` | `#168C8C` | Primary interaction accent, active tabs, buttons |
| `accent-amber` | `#F2B84B` / `#D97706` | Active functional group highlight, divergence delta alerts |
| `border-subtle` | `#E2E8F0` / `#D1DCE5` | Fine 1px hairline card borders and tabular rules |

### 4.3 Typography & Tabulation Rules
* **Primary Family:** *Manrope* (clean geometric sans-serif for editorial clarity).
* **Metric & Formula Sub-scale:** Tabular figures (`JetBrains Mono` / Monospace) for all formulas ($\text{C}_9\text{H}_8\text{O}_4$), Ångström bond lengths, dipole moments, CAS numbers, and numeric metrics.
* **Micro-Labels:** Uppercase tracking (`tracking-wider`, `text-[10px]` to `text-[11px]`) for scientific category labels and matrix headers.

### 4.4 Mobile-First Touch Standards
* Minimum tap target height of 44px–48px for all interactive pills, tabs, and buttons.
* Elimination of horizontal content overflow: full-width segmented tab pills and stacked functional group selector cards on mobile viewports.
* Persistent optical chamber anchor (~42vh) preserving molecular context during vertical property inspection.

---

## 5. Non-Functional & Scientific Integrity Constraints

1. **Empirical Scientific Fidelity:** All chemical values, molecular masses, $pK_a$ figures, boiling points, and literature references must strictly match verified databases (IUPAC, PubChem, CRC Handbook of Chemistry and Physics, Cambridge Structural Database). Hallucinated chemical properties are strictly disallowed.
2. **Pedagogical Clarity over Jargon:** Technical concepts (e.g. ester hydrolysis, resonance delocalization) must be paired with intuitive plain-language causal narratives.
3. **No Decorative Clutter:** Avoid gamified beakers, cartoon bubbles, heavy drop shadows, or ungrounded SaaS dashboard widgets. Every visual element must serve scientific legibility.
4. **Performance Benchmarks:**
   * 3D molecular viewer must sustain 60 FPS on mobile and desktop WebGL viewports.
   * Universal search response time $< 80\,\text{ms}$.
5. **Accessibility (WCAG 2.1 AA):**
   * Minimum 4.5:1 contrast ratio across all text and background combinations.
   * Element classification and functional group highlights must never rely solely on color; always pair with explicit text labels, formulas, or icons.

---

## 6. Release Roadmap

* **Phase 1 (Delivered):** High-fidelity Discovery Portal, 3D/2D Molecular Workspace (Desktop & Mobile Touch-Optimized), and Family Comparison Matrix.
* **Phase 2 (Interactive Simulation):** Dynamic pH titration slider showing real-time protonation/deprotonation of carboxylic acids and amine bases.
* **Phase 3 (Curriculum & Presentation Mode):** Educator classroom viewports, custom bookmarkable molecule collections, and deep-linked 3D state coordinates.
