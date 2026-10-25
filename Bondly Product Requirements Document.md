# Bondly: Product Requirements Document

Oct 24, 2026 · @Lolia

## Overview

Bondly is a free web app where anyone types in a compound, spins it in 3D or flips to a 2D drawing, and reads how its structure explains its properties and, for drugs, its activity.

The problem: students meet functional groups and structure-activity relationships (SAR) as flat drawings on slides, then have to imagine the geometry on their own. Most molecule viewers show the shape but explain nothing, and most study notes explain but never show where a group sits in space.

The core idea is a link between the two. Every functional group in the information panel is clickable, and clicking it lights up that part of the model in both the 3D and 2D views. The idea came from the pharmaceutical chemistry course in 400 level (SAR, compound and drug synthesis), where changing one group on a structure, such as morphine to codeine, changed what the compound did.

Bondly is a side project, so the plan below favours a small, correct first version over a large one.

## Goals and non-goals

Version 1 succeeds if a student can open any compound in the library, find every functional group on the model within one click, and read a short, correct explanation of why the structure behaves as it does.

**Goals**

- Open any library compound with a rotatable 3D model and a 2D drawing in under 3 seconds on a mid-range phone.
- Make every functional group findable: click it in the panel, see it highlighted on the model.
- Give every curated compound a written story with sources and a named reviewer.
- Work for any chemistry learner, not only pharmacy students, so the app needs two kinds of story (see Content model).

**Non-goals**

- Predicting the activity or properties of molecules the user draws.
- Docking, binding simulation or any other physics beyond the basic 3D geometry.
- Automatic retrosynthesis or reaction prediction.
- Clinical content such as dosing, interactions or prescribing advice.
- Replacing a textbook. Bondly explains one compound at a time.

**Deliberately cut from the original idea**

- Free-form structure editing with effect prediction. No tool predicts the pharmacology of a modified molecule reliably, and a confident wrong answer teaches the wrong thing. Instead, curated analogue families show real modifications and what they did.
- Synthesis shown as 3D steps. Reactions are normally taught as 2D schemes, and 3D adds little. A curated version is planned for a later release, limited to non-controlled compounds.

## Users and use cases

The main user is a student who is preparing for an exam or trying to make sense of a drawing in a lecture, usually on a phone.

| User | What they need | How they use Bondly |
| --- | --- | --- |
| Chemistry undergraduate | See where functional groups sit in space, and why shape affects properties | Searches a compound, rotates it, taps each functional group, reads the structure-property note |
| Pharmacy student | Link structural changes to changes in drug action (SAR) | Opens a family such as the opioids and compares morphine, codeine and naloxone side by side |
| Lecturer or tutor | A visual to show in class or send to students | Shares a compound link, projects the 3D view, points to the highlighted group |
| Self-learner | Plain explanations without needing a textbook open | Reads the story and the glossary tips, follows related compounds |

## Release scope

Version 1 ships a fixed library of 15 compounds with everything precomputed, so it can be built and checked quickly; live lookup of any compound waits for version 2.

| Version | In | Out (comes later) |
| --- | --- | --- |
| 1: Starter library | 15 compounds, search, 3D and 2D viewer, information panel, clickable functional groups, curated stories, family comparison, shareable links, mobile layout, light and dark mode | Lookup of compounds outside the library, accounts, quizzes |
| 2: Open lookup | Search any compound through PubChem, computed panel for every result, measured activity data from ChEMBL for related analogues, saved compounds and simple quizzes (needs accounts) | Receptor view, synthesis routes |
| 3: Deeper teaching | Ligand in receptor view (for example opioids in the mu receptor), curated synthesis schemes for non-controlled compounds, lecturer collections | None planned yet |

## Functional requirements

These are the requirements for version 1. "Must" means the release does not ship without it.

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-1 | Search by common name, IUPAC name, synonym or molecular formula, with suggestions after 2 characters | Must |
| FR-2 | Compound page loads all structure and panel data from stored records, with no chemistry calculation in the browser | Must |
| FR-3 | 3D viewer: drag to rotate, scroll or pinch to zoom, two-finger drag to pan, full touch support | Must |
| FR-4 | 3D styles: ball and stick, stick only, space filling | Must |
| FR-5 | Toggle between 3D and 2D without losing the selected functional group | Must |
| FR-6 | Reset view button, auto-spin toggle, atom labels toggle | Should |
| FR-7 | Identity card: names, formula, molecular weight, SMILES and InChIKey with copy buttons | Must |
| FR-8 | Calculated properties (logP, polar surface area, hydrogen bond donors and acceptors, rotatable bonds, ring count), each with a one-line plain explanation | Must |
| FR-9 | Functional group list: each group is a button that highlights its atoms in 3D and 2D and shows a short description | Must |
| FR-10 | Stereocentres listed with R or S labels, each clickable to highlight | Should |
| FR-11 | Structure story for each curated compound, either SAR or structure-property, with references and reviewer | Must |
| FR-12 | Compounds without a story still show the computed panel, plus a plain note that no written story exists yet | Must |
| FR-13 | Family view: related compounds as chips, with a side-by-side table of calculated properties | Should |
| FR-14 | Shareable address for each compound, for example /c/aspirin | Should |
| FR-15 | Works at 360 px screen width, in light and dark mode, and by keyboard | Must |
| FR-16 | If WebGL is unavailable, fall back to the 2D view with a short message | Must |
| FR-17 | Glossary tooltips for terms such as logP, pharmacophore and stereocentre | Could |

## Content model and curation

The written stories are the part that makes Bondly useful, and they are written by hand and reviewed once, never generated at the moment someone searches.

There are two story types, because SAR only applies to compounds that act on the body.

- **SAR story** (drugs): which group changed relative to a parent compound, what that did to activity, and the reason (for example, binding to the receptor). Example: methylating the 3-OH of morphine gives codeine.
- **Structure-property story** (everything else): which structural feature causes a property, with a contrast compound. Example: ethanol boils at 78 °C and its isomer dimethyl ether at about −24 °C, because only ethanol has an O-H group that can donate hydrogen bonds.

Every story has a body of 120 to 250 words, at least one reference (textbook chapter, review or paper), a reviewer name and a review date. A story with no reviewer is saved as a draft and never shown to the public.

Drafting with an AI tool is allowed, but only as a draft. Each claim must be checked against its reference before the story is marked reviewed.

**Version 1 library (15 compounds, 7 families)**

| Family | Story type | Compounds |
| --- | --- | --- |
| Simple organics | Structure-property | Ethanol, dimethyl ether, benzene |
| Analgesics and anti-inflammatories | SAR | Aspirin, paracetamol, ibuprofen |
| Opioids | SAR | Morphine, codeine, naloxone |
| Beta-lactam antibiotics | SAR | Penicillin G, amoxicillin |
| Sulfonamides | SAR | Sulfanilamide, sulfamethoxazole |
| Beta-blockers | SAR | Propranolol |
| Xanthines | Structure-property | Caffeine |

Beta-blockers and xanthines have one compound each in version 1. They grow in version 2, or can be dropped if the review work runs long.

## Data sources and what is computed

Almost everything on a compound page is calculated from the structure by one offline script; only the stories are written by people.

| Data | Source | How it is produced | Label shown to the user |
| --- | --- | --- | --- |
| Names, synonyms, identifiers | PubChem, through its free web interface | Fetched once while preparing the library and stored | None |
| 2D drawing | RDKit (open-source chemistry toolkit) | Drawn to SVG, with one extra copy per functional group highlighted | None |
| 3D coordinates | RDKit | Generated by embedding plus force-field energy minimisation (ETKDG, then MMFF94) | "Computed 3D shape", not an experimental structure |
| Properties (logP, polar surface area, donors, acceptors, rotatable bonds) | RDKit | Calculated | "Calculated" beside each value |
| Stereocentre labels (R or S) | RDKit CIP labeller | Calculated | None |
| Functional groups | Pattern library kept in this project (about 25 SMARTS patterns plus a few custom ring systems) | Matched on every compound, atom positions stored | None |
| Stories and references | Written and reviewed by hand | Stored in the database | Reviewer and date |
| Measured activity (version 2) | ChEMBL | Pulled for analogues in a family | Source and assay type |
| Receptor structures (version 3) | RCSB Protein Data Bank | Selected by hand per family | PDB code |

Two honest limits to carry into the interface. A computed 3D shape is one low-energy arrangement, and flexible molecules (ibuprofen, propranolol) adopt many shapes in reality. And logP here is a calculated estimate, which can differ from the measured value by a unit or more.

## Technical architecture and stack

Version 1 is a Next.js site reading from a Supabase database that one offline Python script fills, so no chemistry runs on the visitor's phone.

&#91;embedded content: architecture · 5 parts, 2 lanes\]

The curation script is the only place chemistry is calculated; the live site reads stored records and draws them.

| Layer | Choice | Reason |
| --- | --- | --- |
| Front end | Next.js 14 (App Router), TypeScript, Tailwind, shadcn/ui | Familiar stack, no new tools to learn |
| 3D viewer | 3Dmol.js, loaded only on compound pages | Open source, touch support, no plugin needed |
| 2D drawings | SVG made by RDKit ahead of time | Sharp at any size, no drawing code in the browser |
| Chemistry | RDKit in a Python script, run by hand when the library changes | All calculations in one place, easy to check |
| Database | Supabase (Postgres) with row-level security | Public reads published rows only; writes need the admin account |
| Hosting | Vercel, one statically generated page per compound | Fast loads, and each compound can show up in search results |
| Search | Postgres full-text and prefix search over compound\_names | The library is small, so no separate search service |
| Version 2 lookup | A server route that calls PubChem, plus RDKit compiled to WebAssembly or a small Python server | Open question 3 |

**Performance budget:** stored data for one compound under 100 KB, and the 3D model interactive in under 3 seconds on a mid-range phone on 4G.

## Data model

The database has nine tables; the curation script fills the chemistry columns and an admin screen (or the Supabase dashboard at first) edits the stories.

| Table | Key fields | Notes |
| --- | --- | --- |
| compounds | id, slug, canonical\_name, iupac\_name, formula, smiles, inchikey, mol\_weight, logp, tpsa, hbd, hba, rotatable\_bonds, molblock\_3d, svg\_2d, status | status is draft, reviewed or published |
| compound\_names | compound\_id, name, kind | kind is common, iupac, trade or synonym; powers search |
| functional\_groups | id, name, smarts, description | The shared pattern library with plain explanations |
| compound\_groups | compound\_id, group\_id, atom\_indices, svg\_highlight | atom\_indices include attached hydrogens so the 3D highlight looks whole |
| stereocentres | compound\_id, atom\_index, label | label is R or S |
| families | id, name, story\_type, summary | story\_type is sar or structure\_property |
| family\_members | family\_id, compound\_id, role, change\_note | role is parent or analogue; change\_note says what differs from the parent |
| stories | compound\_id, kind, body, reviewed\_by, reviewed\_on | Public view returns reviewed rows only |
| story\_references | id, story\_id, citation, url | At least one per story |

Access rules: the public can read published rows only; only the admin account can write. Version 1 has no user accounts, so there is no personal data to store.

## Screens and user experience

The compound page is the product; the other screens exist to get people to it.

**Home.** A single large search box, tiles for each family (Opioids, Beta-lactams and so on), and a "surprise me" button that opens a random compound.

**Compound page.** On a wide screen the viewer takes about 60 percent of the width on the left, with the information panel on the right. On a phone the viewer sits on top at roughly 45 percent of the screen height, and the panel scrolls underneath it.

- Viewer toolbar: 3D or 2D toggle, style (ball and stick, stick, space filling), labels, auto-spin, reset view.
- Panel tabs: Overview (names, formula, identifiers), Groups (clickable functional groups), Properties (calculated values with explanations), Story.
- Selecting a group dims the other atoms and enlarges the chosen ones in 3D, and shades the same atoms in 2D. The group name and its plain-language description appear in the panel.
- Tapping an atom in 3D shows its element and number. Dragging rotates; a double tap resets.

**Family page.** A parent compound with its analogues as chips and a side-by-side table of calculated properties, with the structural change for each analogue written in one line.

**About and sources.** Where each number comes from, who reviewed the stories, and the licence notes.

**States to design:** loading skeleton for the viewer; no search result (suggest the nearest names); WebGL not available (show 2D with a short message); compound has no story yet (computed panel plus a plain note).

**Accessibility.** Group buttons are real buttons reachable by keyboard. Highlights never rely on colour alone (size and outline change too). The 2D view doubles as the accessible alternative to the 3D canvas, and every drawing carries a text description.

## **Accuracy, safety and content policy**

Bondly teaches structure; it never gives clinical advice, and it never publishes a number or a claim without saying where it came from.

- **No clinical content.** No dosing, interactions, indications or prescribing advice. A short footer on every compound page says the app is for learning.
- **Every number is labelled** as calculated or measured. The 3D view is labelled as a computed shape.
- **Every story cites its sources** and shows who reviewed it and when. Unreviewed stories are never public.
- **Controlled substances.** Structures, properties and concept-level SAR for compounds such as morphine and codeine are standard textbook material and are included. The app will not include reagents, quantities, reaction conditions or step-by-step synthesis for controlled substances or their precursors, in version 3 or at any time. Origin notes are fine at the level of "extracted from the opium poppy" or "made semi-synthetically from thebaine".
- **Privacy.** Version 1 has no accounts and collects no personal data. If analytics are added, they must work without cookies that identify a person.
- **Licences.** Attribution for PubChem, RDKit, 3Dmol.js and, from version 2, ChEMBL (which is share-alike) goes on the About page.

## Success metrics

The targets below are proposals, set before any real usage exists, so adjust them after the first month.

| Metric | Target 90 days after launch | Why it matters |
| --- | --- | --- |
| Time until the 3D model is interactive, mid-range phone on 4G | Under 3 seconds | The viewer is the product; a slow one loses students |
| Visits where at least one functional group is clicked | 50 percent | Shows the core idea is understood and used |
| Compounds opened per visit | 3 or more | Shows people explore families, not just look up one name |
| Stories published with a named reviewer | 15 of 15 | Accuracy is the trust the app depends on |
| Unreviewed stories visible to the public | 0 | Hard rule |
| Lecturers or tutors who share a link | 5 | Early sign it is useful for teaching |
| Reported factual errors still open after 7 days | 0 | Keeps the corrections promise credible |

## Risks and open questions

The biggest risk is not technical: it is that writing 15 reviewed stories takes longer than building the app.

| Risk | Why it matters | Response |
| --- | --- | --- |
| Story writing is slow | Content is the long pole; the code is a few weeks, the reviewed stories may take longer | Start with 8 stories (opioids, beta-lactams, simple organics), publish those, add the rest weekly |
| A wrong claim in a story | Students will trust it | Reference and reviewer on every story; visible "report an error" link |
| Computed 3D shape read as a real structure | Flexible molecules look rigid and fixed | Label it, and mention flexibility in the properties explanation |
| The name Kekulé is not unique | Kekule.js is an existing open-source chemistry toolkit, so searches for the name will show it first | Check domain and search results before launch; keep an alternative name ready |
| Phone graphics performance | Some low-end phones struggle with WebGL | Test on a low-end Android phone; default to ball and stick; fall back to 2D |
| Data licence terms | ChEMBL requires attribution and share-alike; some PubChem records carry depositor terms | Read the terms before launch; store only the facts needed |
| Side project fatigue | Many other projects compete for the same hours | Time-box version 1 to the milestones below; ship at the first milestone that is usable |

**Open questions**

1. Is Bondly free forever, or could it carry a paid tier later (for example lecturer collections)? This affects whether accounts come in version 2.
2. Who reviews stories besides the owner? One reviewer is a bottleneck, and a lecturer or a classmate could act as second reviewer.
3. Should version 2 live lookup run in the browser (RDKit compiled to WebAssembly, several megabytes to download) or on a small server? The first is cheaper to run, the second loads faster on phones.
4. Which domain and launch channel? Posting the first families in short videos on the existing content channels could bring the first students.

## Build plan

Version 1 is about 18 working days of build for one person, plus the story writing, and the order below keeps something usable at every step. The day counts are estimates.

1. **Chemistry pipeline (2 days).** Python script with RDKit that takes a list of names or SMILES and produces records, 2D drawings, 3D coordinates, properties, stereocentres and functional group matches. Done when all 15 compounds produce a clean record and the group matches are checked by eye.
2. **Project skeleton and database (2 days).** Next.js app, Supabase tables from the data model, access rules, and the 15 records loaded. Done when a compound page renders its name and formula from the database.
3. **Viewer (2 days).** 3Dmol.js canvas with rotate, zoom, styles, the 3D and 2D toggle and the WebGL fallback. Done when all 15 compounds rotate smoothly on a mid-range phone.
4. **Information panel and highlighting (3 days).** Identity card, properties with explanations, clickable functional groups that highlight in both views, stereocentres. Done when every group on every compound highlights the right atoms.
5. **Search and home (2 days).** Search over names, synonyms and formulas, suggestions, family tiles, one statically generated page per compound for search engines. Done when "aspirin", "acetylsalicylic acid" and "C9H8O4" all find the same page.
6. **Stories and family pages (5 days, spread over several weeks).** Write, reference and review the stories; build the family comparison table. Done when the first 8 stories are published with reviewers.
7. **Polish and launch (2 days).** Mobile pass, accessibility pass, performance check, About page, footer notices, error reporting link. Done when the metrics baseline is recorded and the first families are announced.

After your approval of this document, the first thing to build is milestone 1, because it produces the data every other milestone depends on.
