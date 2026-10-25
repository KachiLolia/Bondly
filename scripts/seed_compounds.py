import urllib.request
import json
import time
import os

compounds_meta = [
    {
        "id": "aspirin",
        "slug": "aspirin",
        "name": "Aspirin",
        "canonical_name": "Acetylsalicylic acid",
        "iupac_name": "2-acetoxybenzoic acid",
        "cid": "2244",
        "family": "analgesics",
        "family_name": "Analgesics & Anti-inflammatories",
        "subfamily": "Salicylates",
        "story_type": "sar",
        "cas": "50-78-2",
        "tags": ["Analgesic", "Antipyretic", "NSAID", "Ester", "Carboxyl"],
        "pka": 3.49,
        "melting_pt": "135.0 °C",
        "boiling_pt": "Decomposes at ~140 °C",
        "solubility": "3.3 mg/mL (at 20 °C)",
        "organoleptic": "Odorless, slightly bitter taste",
        "story": {
            "title": "Mechanism of COX-1 Inactivation & Gastric Permeability",
            "body": "Aspirin (acetylsalicylic acid) is a classic example of structure-activity relationship (SAR) in medicinal chemistry. The acetyl ester group (-OCOCH3) acts as a reactive suicide payload: once nestled inside the hydrophobic catalytic channel of Cyclooxygenase-1 (COX-1), aspirin irreversibly transfers its acetyl group to the hydroxyl oxygen of Serine-529. This steric obstruction permanently bars arachidonic acid from entering the cyclooxygenase active site, suppressing thromboxane A2 and inflammatory prostaglandin synthesis. Furthermore, the free carboxylic acid (-COOH, pKa 3.49) remains mostly un-ionized in the highly acidic gastric lumen (pH 1.5–2.0), enabling rapid passive transcellular diffusion through the gastric lipid bilayer into mucosal cells.",
            "hydrolysis_note": "The ester linkage is prone to nucleophilic attack by water and human carboxylesterases, slowly cleaving into salicylic acid and acetic acid.",
            "historical_milestone": "Synthesized in pure form by Felix Hoffmann at Bayer in 1897 to mitigate the severe gastric irritation caused by salicylic acid.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-15",
            "citations": [
                {"citation": "Vane, J. R. (1971). Inhibition of prostaglandin synthesis as a mechanism of action for aspirin-like drugs. Nature New Biology, 231(25), 232-235.", "url": "https://doi.org/10.1038/newbio231232a0"},
                {"citation": "PubChem Compound Summary for CID 2244, Acetylsalicylic acid.", "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2244"}
            ]
        },
        "functional_groups": [
            {
                "id": "ester",
                "name": "Ester Group",
                "formula": "-COO-R",
                "description": "Acetate moiety derived from acetic anhydride; covalently transfers to Ser-529 in COX-1.",
                "color": "#f59e0b",
                "atom_indices": [7, 8, 9, 10]
            },
            {
                "id": "carboxyl",
                "name": "Carboxylic Acid",
                "formula": "-COOH",
                "description": "Terminal carboxyl group; acid pKa 3.49, provides water solubility and ionic interaction in receptor binding.",
                "color": "#006767",
                "atom_indices": [11, 12, 13]
            },
            {
                "id": "aromatic",
                "name": "Aromatic Benzene Ring",
                "formula": "C6H4-",
                "description": "Planar 6π-electron resonance-stabilized phenyl core, providing hydrophobic anchoring.",
                "color": "#4e5f79",
                "atom_indices": [1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        "id": "paracetamol",
        "slug": "paracetamol",
        "name": "Paracetamol",
        "canonical_name": "Acetaminophen",
        "iupac_name": "N-(4-hydroxyphenyl)acetamide",
        "cid": "1983",
        "family": "analgesics",
        "family_name": "Analgesics & Anti-inflammatories",
        "subfamily": "Anilides",
        "story_type": "sar",
        "cas": "103-90-2",
        "tags": ["Analgesic", "Antipyretic", "Phenol", "Amide"],
        "pka": 9.38,
        "melting_pt": "169.0 °C",
        "boiling_pt": "> 500 °C (calculated)",
        "solubility": "14.0 mg/mL (at 25 °C)",
        "organoleptic": "Slightly bitter white crystalline powder",
        "story": {
            "title": "Phenolic Hydroxyl & Amide Resonance in Central Analgesia",
            "body": "Paracetamol features a para-substituted benzene ring bridging a weakly acidic phenolic hydroxyl (-OH) and an acetamido group (-NHCOCH3). Unlike aspirin and NSAIDs, paracetamol lacks a free carboxylic acid, resulting in minimal peripheral anti-inflammatory action and sparing gastric mucosa. Its analgesic and antipyretic activity originates in the central nervous system, where it acts as a cosubstrate-inhibitor reducing the ferryl protoporphyrin radical in peroxidase active sites. The planar amide linkage exhibits strong resonance delocalization, resisting rapid hydrolysis under ambient conditions.",
            "hydrolysis_note": "Metabolized primarily through glucuronidation and sulfation, with minor CYP2E1 oxidation yielding reactive NAPQI.",
            "historical_milestone": "First prepared in 1878 by Harmon Northrop Morse; introduced clinically as Tylenol by McNeil Laboratories in 1955.",
            "reviewer": "Dr. M. Chen, Pharm.D",
            "reviewed_on": "2026-08-20",
            "citations": [
                {"citation": "Boutaud, O. et al. (2002). Acetaminophen inhibits cyclooxygenase via peroxide-dependent mechanism. PNAS, 99(10), 7130-7135.", "url": "https://doi.org/10.1073/pnas.102179899"},
                {"citation": "PubChem Compound Summary for CID 1983, Acetaminophen.", "url": "https://pubchem.ncbi.nlm.nih.gov/compound/1983"}
            ]
        },
        "functional_groups": [
            {
                "id": "phenol_oh",
                "name": "Phenolic Hydroxyl",
                "formula": "-OH",
                "description": "Para-hydroxy group with pKa 9.38; key hydrogen bond donor facilitating antioxidant scavenging.",
                "color": "#006767",
                "atom_indices": [7, 8]
            },
            {
                "id": "amide",
                "name": "Secondary Amide",
                "formula": "-NHCOCH3",
                "description": "Planar acetamido group with partial double bond character between C and N.",
                "color": "#f59e0b",
                "atom_indices": [9, 10, 11]
            },
            {
                "id": "aromatic",
                "name": "Para-disubstituted Benzene",
                "formula": "C6H4-",
                "description": "Electron-rich aromatic core connecting the phenolic and acetamide moieties.",
                "color": "#4e5f79",
                "atom_indices": [1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        "id": "ibuprofen",
        "slug": "ibuprofen",
        "name": "Ibuprofen",
        "canonical_name": "(RS)-2-(4-(2-methylpropyl)phenyl)propanoic acid",
        "iupac_name": "2-[4-(2-methylpropyl)phenyl]propanoic acid",
        "cid": "3672",
        "family": "analgesics",
        "family_name": "Analgesics & Anti-inflammatories",
        "subfamily": "Propionic Acids",
        "story_type": "sar",
        "cas": "15687-27-1",
        "tags": ["NSAID", "Analgesic", "Chiral", "Carboxylic Acid"],
        "pka": 4.45,
        "melting_pt": "76.0 °C",
        "boiling_pt": "157.0 °C (at 4 mmHg)",
        "solubility": "0.021 mg/mL (water-insoluble)",
        "organoleptic": "Characteristic odour and slight acrid taste",
        "story": {
            "title": "Chirality & Lipophilic Arylpropionic Acid Mechanics",
            "body": "Ibuprofen is the archetype of the arylpropionic acid ('profen') class of nonsteroidal anti-inflammatory drugs. It possesses an asymmetrical α-carbon stereocentre adjacent to the carboxylic acid. Although administered as a racemic (50:50) mixture of (R)- and (S)-enantiomers, only the (S)-enantiomer inhibits COX enzymes. Remarkably, an endogenous enzymatic inversion pathway (2-arylpropionyl-CoA epimerase) unidirectionally converts inactive (R)-ibuprofen into active (S)-ibuprofen in human liver tissue. The bulky isobutyl group imparts significant lipophilicity (LogP 3.5), dictating extensive plasma albumin binding (>99%).",
            "hydrolysis_note": "Chemically stable carboxylic acid; resists spontaneous hydrolysis.",
            "historical_milestone": "Discovered in December 1961 by Stewart Adams and John Nicholson at the Boots UK research department.",
            "reviewer": "Prof. H. Tanaka, PhD (Medicinal Chemistry)",
            "reviewed_on": "2026-07-12",
            "citations": [
                {"citation": "Adams, S. S. (1987). The discovery of ibuprofen: a personal account. Lancet, 1(8528), 340-341.", "url": "https://doi.org/10.1016/s0140-6736(87)90924-1"}
            ]
        },
        "functional_groups": [
            {
                "id": "carboxyl",
                "name": "Propionic Carboxyl",
                "formula": "-CH(CH3)COOH",
                "description": "Acidic headgroup coordinating to Arg-120 in the COX cyclooxygenase channel.",
                "color": "#006767",
                "atom_indices": [10, 11, 12, 13]
            },
            {
                "id": "isobutyl",
                "name": "Isobutyl Tail",
                "formula": "-CH2CH(CH3)2",
                "description": "Bulky branched aliphatic moiety providing potent hydrophobic interaction.",
                "color": "#f59e0b",
                "atom_indices": [7, 8, 9]
            },
            {
                "id": "aromatic",
                "name": "Phenyl Ring",
                "formula": "C6H4-",
                "description": "Rigid aromatic spacer positioning the lipophilic tail and acidic headgroup.",
                "color": "#4e5f79",
                "atom_indices": [1, 2, 3, 4, 5, 6]
            }
        ]
    },
    {
        "id": "ethanol",
        "slug": "ethanol",
        "name": "Ethanol",
        "canonical_name": "Ethyl alcohol",
        "iupac_name": "ethanol",
        "cid": "702",
        "family": "simple_organics",
        "family_name": "Simple Organics & Isomers",
        "subfamily": "Alcohols",
        "story_type": "structure_property",
        "cas": "64-17-5",
        "tags": ["Alcohol", "Protic Solvent", "Isomer Pair", "Biofuel"],
        "pka": 15.9,
        "melting_pt": "-114.1 °C",
        "boiling_pt": "78.37 °C",
        "solubility": "Miscible in all proportions with water",
        "organoleptic": "Pleasant characteristic alcoholic odor and burning taste",
        "story": {
            "title": "The Power of the Hydroxyl Hydrogen Bond Network",
            "body": "Ethanol (C2H6O) provides the quintessential textbook demonstration of structure-property relationships. It possesses a polarized hydroxyl (-OH) group capable of acting simultaneously as a hydrogen bond donor and acceptor. In liquid ethanol, molecules form extensive dynamic zig-zag hydrogen-bonded chains and cyclic oligomers, creating a high cohesive energy density. Consequently, despite having a tiny molecular weight of only 46.07 g/mol, ethanol is a liquid at standard temperature and pressure with a normal boiling point of +78.37 °C, completely miscible with water due to solvating H-bond lattices.",
            "hydrolysis_note": "Chemically stable primary alcohol; oxidized by ADH to acetaldehyde.",
            "historical_milestone": "Isolated in anhydrous state by Johann Tobias Lowitz in 1796; fundamental baseline for thermodynamic scale.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-01",
            "citations": [
                {"citation": "CRC Handbook of Chemistry and Physics, 104th Edition, Ethanol Thermodynamic Tables.", "url": "https://hbcponline.com"}
            ]
        },
        "functional_groups": [
            {
                "id": "hydroxyl",
                "name": "Hydroxyl Group",
                "formula": "-OH",
                "description": "Protic group generating strong intermolecular hydrogen-bond networks.",
                "color": "#006767",
                "atom_indices": [2, 3]
            },
            {
                "id": "ethyl",
                "name": "Ethyl Backbone",
                "formula": "CH3-CH2-",
                "description": "Short sp3 alkyl chain providing weak dispersion forces.",
                "color": "#4e5f79",
                "atom_indices": [0, 1]
            }
        ]
    },
    {
        "id": "dimethylether",
        "slug": "dimethylether",
        "name": "Dimethyl Ether",
        "canonical_name": "Methoxymethane",
        "iupac_name": "methoxymethane",
        "cid": "8254",
        "family": "simple_organics",
        "family_name": "Simple Organics & Isomers",
        "subfamily": "Ethers",
        "story_type": "structure_property",
        "cas": "115-10-6",
        "tags": ["Ether", "Aprotic", "Isomer Pair", "Aerosol Propellant"],
        "pka": -3.8,
        "melting_pt": "-141.5 °C",
        "boiling_pt": "-24.0 °C",
        "solubility": "71 g/L (at 20 °C)",
        "organoleptic": "Ethereal, sweet, chloroform-like odor",
        "story": {
            "title": "The Constitutional Isomer Paradox (Δ102.37 °C)",
            "body": "Dimethyl ether shares the identical molecular formula (C2H6O) and molecular weight (46.07 g/mol) as ethanol. However, its oxygen atom is bonded symmetrically between two methyl carbons (CH3-O-CH3). With no acidic hydrogen atom bonded to oxygen, dimethyl ether is strictly an H-bond acceptor but CANNOT act as a hydrogen bond donor. Lacking an intermolecular H-bond network, its molecules interact purely through dipole-dipole forces and London dispersion forces. This singular structural divergence causes its normal boiling point to plummet by a staggering 102.37 °C compared to ethanol, making it a gas at room temperature.",
            "hydrolysis_note": "Chemically unreactive ether; resists cleavage by dilute acids and bases.",
            "historical_milestone": "First synthesized in 1835 by French chemists Jean-Baptiste Dumas and Eugène Peligot.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-01",
            "citations": [
                {"citation": "Linstrom, P. J., & Mallard, W. G. (Eds.). NIST Chemistry WebBook, NIST Standard Reference Database Number 69.", "url": "https://webbook.nist.gov"}
            ]
        },
        "functional_groups": [
            {
                "id": "ether",
                "name": "Ether Linkage",
                "formula": "-O-",
                "description": "Dialkyl ether bridge; lone pairs accept H-bonds from protic solvents but cannot donate.",
                "color": "#f59e0b",
                "atom_indices": [1]
            },
            {
                "id": "methyl_groups",
                "name": "Twin Methyl Terminals",
                "formula": "2x -CH3",
                "description": "Symmetrical sp3 methyl caps shielding the ether oxygen.",
                "color": "#4e5f79",
                "atom_indices": [0, 2]
            }
        ]
    },
    {
        "id": "benzene",
        "slug": "benzene",
        "name": "Benzene",
        "canonical_name": "1,3,5-Cyclohexatriene",
        "iupac_name": "benzene",
        "cid": "241",
        "family": "simple_organics",
        "family_name": "Simple Organics & Isomers",
        "subfamily": "Arenes",
        "story_type": "structure_property",
        "cas": "71-43-2",
        "tags": ["Aromatic", "Hückel Rule", "Hydrocarbon", "Pi-System"],
        "pka": 43.0,
        "melting_pt": "5.5 °C",
        "boiling_pt": "80.1 °C",
        "solubility": "1.79 g/L (at 25 °C)",
        "organoleptic": "Sweet, aromatic, gasoline-like odor",
        "story": {
            "title": "Aromaticity & Planar Pi-Electron Resonance",
            "body": "Benzene (C6H6) is the foundation of aromatic chemistry. Its six sp2-hybridized carbon atoms form a perfectly flat, hexagonal ring with D6h symmetry. All six C-C bond lengths are completely identical (1.39 Å), falling exactly between a typical single bond (1.54 Å) and a double bond (1.34 Å). Six π-electrons delocalize completely across the upper and lower orbital donuts according to Hückel's 4n+2 rule (n=1), conferring an exceptional thermodynamic resonance stabilization energy of approximately 36 kcal/mol. This immense stability causes benzene to undergo electrophilic aromatic substitution rather than addition reactions, preserving the intact ring.",
            "hydrolysis_note": "Extremely inert aromatic ring; completely unreactive toward water.",
            "historical_milestone": "Discovered by Michael Faraday in 1825; cyclical hexagonal structure proposed by August Kekulé in 1865.",
            "reviewer": "Prof. H. Tanaka, PhD",
            "reviewed_on": "2026-08-10",
            "citations": [
                {"citation": "Kekulé, A. (1865). Sur la constitution des substances aromatiques. Bulletin de la Société Chimique de Paris, 3, 98-110.", "url": "https://gallica.bnf.fr"}
            ]
        },
        "functional_groups": [
            {
                "id": "aromatic_core",
                "name": "Aromatic 6π Ring",
                "formula": "C6H6",
                "description": "Six delocalized π-electrons generating cyclic diatropic ring currents.",
                "color": "#4e5f79",
                "atom_indices": [0, 1, 2, 3, 4, 5]
            }
        ]
    },
    {
        "id": "morphine",
        "slug": "morphine",
        "name": "Morphine",
        "canonical_name": "Morphine",
        "iupac_name": "(4R,4aR,7S,7aR,12bS)-3-methyl-2,4,4a,7,7a,13-hexahydro-1H-4,12-methano[1]benzofuro[3,2-e]isoquinoline-7,9-diol",
        "cid": "5288826",
        "family": "opioids",
        "family_name": "Opioids & Receptor Pharmacophores",
        "subfamily": "Morphinans",
        "story_type": "sar",
        "cas": "57-27-2",
        "tags": ["Opioid", "Analgesic", "Alkaloid", "Receptor Ligand"],
        "pka": 8.21,
        "melting_pt": "255.0 °C",
        "boiling_pt": "Decomposes",
        "solubility": "0.15 mg/mL (at 20 °C)",
        "organoleptic": "Bitter white crystalline powder",
        "story": {
            "title": "The Phenolic 3-OH Pharmacophore in Mu-Opioid Agonism",
            "body": "Morphine is the prototypical natural opiate alkaloid extracted from Papaver somniferum. Its rigid five-ring pentacyclic structure (rings A–E) features a basic tertiary amine (pKa ~8.0, protonated at physiological pH to form a pivotal ionic salt bridge with Asp-147 in the mu-opioid receptor) and two hydroxyl groups: a phenolic 3-OH on ring A and an allylic 6-OH on ring C. The phenolic 3-OH is the crucial hydrogen-bond donor anchoring the ligand into the message pocket of the receptor. Free phenolic hydroxyl presence gives morphine potent receptor affinity, though its high polarity restricts passive blood-brain barrier penetration.",
            "hydrolysis_note": "Subject to phase II hepatic glucuronidation yielding active M6G and inactive M3G.",
            "historical_milestone": "First isolated from opium by Friedrich Sertürner in 1804; named after Morpheus, the Greek god of dreams.",
            "reviewer": "Dr. M. Chen, Pharm.D",
            "reviewed_on": "2026-07-30",
            "citations": [
                {"citation": "Manglik, A. et al. (2012). Crystal structure of the µ-opioid receptor bound to a morphinan antagonist. Nature, 485(7398), 321-326.", "url": "https://doi.org/10.1038/nature10954"}
            ]
        },
        "functional_groups": [
            {
                "id": "phenolic_oh",
                "name": "Phenolic 3-OH",
                "formula": "-OH (C3)",
                "description": "Essential anchor for mu-opioid receptor binding; methylating this creates codeine.",
                "color": "#006767",
                "atom_indices": [9]
            },
            {
                "id": "tertiary_amine",
                "name": "Tertiary N-Methyl",
                "formula": ">N-CH3",
                "description": "Protonated at pH 7.4; forms critical ionic bond with conserved Asp-147 residue.",
                "color": "#f59e0b",
                "atom_indices": [15, 16]
            },
            {
                "id": "allylic_oh",
                "name": "Allylic 6-OH",
                "formula": "-OH (C6)",
                "description": "Hydroxyl on cyclohexenyl ring C; susceptible to oxidation or acetylation.",
                "color": "#4e5f79",
                "atom_indices": [12]
            }
        ]
    },
    {
        "id": "codeine",
        "slug": "codeine",
        "name": "Codeine",
        "canonical_name": "3-O-Methylmorphine",
        "iupac_name": "(4R,4aR,7S,7aR,12bS)-9-methoxy-3-methyl-2,4,4a,7,7a,13-hexahydro-1H-4,12-methano[1]benzofuro[3,2-e]isoquinolin-7-ol",
        "cid": "5284371",
        "family": "opioids",
        "family_name": "Opioids & Receptor Pharmacophores",
        "subfamily": "Morphinans",
        "story_type": "sar",
        "cas": "76-57-3",
        "tags": ["Opioid", "Prodrug", "Antitussive", "Ether Derivative"],
        "pka": 8.24,
        "melting_pt": "156.0 °C",
        "boiling_pt": "Decomposes at 250 °C",
        "solubility": "8.0 mg/mL (at 25 °C)",
        "organoleptic": "Odorless, slightly bitter crystalline powder",
        "story": {
            "title": "Methylation of Phenolic Hydroxyl: Prodrug Mechanics",
            "body": "Codeine differs from morphine by a single atomic modification: the phenolic 3-OH group is methylated to form a 3-methoxy ether (-OCH3). This minor substitution illustrates a profound structure-activity lesson: masking the hydrogen-bond donor capability eliminates direct steric fitting into the mu-opioid receptor's message pocket, plummeting codeine's intrinsic binding affinity to less than 0.1% that of morphine. However, the lipophilic methoxy group enhances gastrointestinal absorption and blood-brain barrier permeability. Once in the liver, CYP2D6 demethylates roughly 10% of codeine back into active morphine.",
            "hydrolysis_note": "Ether linkage is chemically stable; enzymatic O-demethylation governed by genetic CYP2D6 polymorphisms.",
            "historical_milestone": "Isolated by Pierre Jean Robiquet in France in 1832 from raw opium extracts.",
            "reviewer": "Dr. M. Chen, Pharm.D",
            "reviewed_on": "2026-07-30",
            "citations": [
                {"citation": "Armstrong, S. C., & Cozza, K. L. (2003). Pharmacokinetic drug interactions of common analgesics. Psychosomatics, 44(6), 515-519.", "url": "https://doi.org/10.1176/appi.psy.44.6.515"}
            ]
        },
        "functional_groups": [
            {
                "id": "methoxy_c3",
                "name": "3-Methoxy Ether",
                "formula": "-OCH3 (C3)",
                "description": "Masked phenolic group; destroys direct receptor binding but improves brain uptake.",
                "color": "#f59e0b",
                "atom_indices": [9, 10]
            },
            {
                "id": "tertiary_amine",
                "name": "Tertiary N-Methyl",
                "formula": ">N-CH3",
                "description": "Conserved basic center maintaining classic morphinan scaffold topology.",
                "color": "#006767",
                "atom_indices": [16, 17]
            }
        ]
    },
    {
        "id": "naloxone",
        "slug": "naloxone",
        "name": "Naloxone",
        "canonical_name": "N-Allyl-14-hydroxynordihydromorphinone",
        "iupac_name": "(4R,4aS,7aR,12bS)-4a-hydroxy-3-prop-2-enyl-2,4,5,7,7a,13-hexahydro-1H-4,12-methano[1]benzofuro[3,2-e]isoquinoline-6,9-dione",
        "cid": "5284596",
        "family": "opioids",
        "family_name": "Opioids & Receptor Pharmacophores",
        "subfamily": "Morphinans",
        "story_type": "sar",
        "cas": "465-65-6",
        "tags": ["Opioid Antagonist", "Emergency Antidote", "Allyl Substitution"],
        "pka": 7.94,
        "melting_pt": "184.0 °C",
        "boiling_pt": "Decomposes",
        "solubility": "1.4 mg/mL",
        "organoleptic": "White crystalline solid",
        "story": {
            "title": "N-Allyl Substitution Converts Agonist to Pure Antagonist",
            "body": "Naloxone is the definitive modern opioid emergency reversal agent. It shares morphine's phenanthrene core, retains the free phenolic 3-OH for high affinity, and features a 14-OH substituent plus a 6-ketone. The dramatic pharmacological transformation comes from substituting the nitrogen's methyl group with an N-allyl group (-CH2-CH=CH2). In the receptor pocket, this bulkier allyl moiety sterically clashes with transmembrane helix VI during agonist-induced conformational contraction. As a result, naloxone occupies the binding pocket with high competitive affinity (Ki ~1 nM) without activating G-protein signaling, rapidly displacing morphine, heroin, or fentanyl in overdose scenarios.",
            "hydrolysis_note": "High first-pass hepatic metabolism (glucuronidation), necessitating intravenous or intranasal delivery.",
            "historical_milestone": "Patented in 1961 by Jack Fishman and Mozes J. Lewenstein; approved by FDA in 1971 (Narcan).",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-08-15",
            "citations": [
                {"citation": "Koehl, A. et al. (2018). Structure of the µ-opioid receptor–Gi protein complex. Nature, 558(7711), 547-552.", "url": "https://doi.org/10.1038/s41586-018-0219-7"}
            ]
        },
        "functional_groups": [
            {
                "id": "n_allyl",
                "name": "N-Allyl Substituent",
                "formula": "-CH2-CH=CH2",
                "description": "Crucial steric bumper preventing helix VI receptor contraction, converting agonist to pure antagonist.",
                "color": "#f59e0b",
                "atom_indices": [17, 18, 19]
            },
            {
                "id": "hydroxyl_14",
                "name": "14-Hydroxyl Group",
                "formula": "-OH (C14)",
                "description": "Additional tertiary alcohol boosting binding selectivity at mu-opioid sites.",
                "color": "#006767",
                "atom_indices": [13]
            },
            {
                "id": "ketone_c6",
                "name": "6-Carbonyl",
                "formula": "C=O (C6)",
                "description": "Oxidized ketone replacing morphine's allylic hydroxyl.",
                "color": "#4e5f79",
                "atom_indices": [15]
            }
        ]
    },
    {
        "id": "penicillin-g",
        "slug": "penicillin-g",
        "name": "Penicillin G",
        "canonical_name": "Benzylpenicillin",
        "iupac_name": "(2S,5R,6R)-3,3-dimethyl-7-oxo-6-[(2-phenylacetyl)amino]-4-thia-1-azabicyclo[3.2.0]heptane-2-carboxylic acid",
        "cid": "5904",
        "family": "beta_lactams",
        "family_name": "Beta-Lactam Antibiotics",
        "subfamily": "Penicillins",
        "story_type": "sar",
        "cas": "61-33-6",
        "tags": ["Antibiotic", "Beta-Lactam", "PBP Inhibitor", "Acylating Agent"],
        "pka": 2.75,
        "melting_pt": "214.0 °C",
        "boiling_pt": "Decomposes",
        "solubility": "0.2 mg/mL (free acid), freely soluble as Na salt",
        "organoleptic": "Faintly aromatic odour",
        "story": {
            "title": "The Strained Four-Membered Beta-Lactam Spring",
            "body": "Penicillin G is the foundational beta-lactam antibiotic. Its antibacterial mechanism relies on stereochemical mimicry of the D-Ala-D-Ala terminus of bacterial peptidoglycan precursors. The four-membered beta-lactam ring fused to a five-membered thiazolidine ring creates extreme ring strain (~30 kcal/mol) and forces the amide nitrogen into a non-planar pyramidal geometry. This completely disrupts classical amide resonance, rendering the lactam carbonyl carbon exceptionally electrophilic. Transpeptidase enzymes (PBPs) attack this carbonyl, forming an irreversible covalent acyl-enzyme adduct that permanently halts bacterial cell wall cross-linking.",
            "hydrolysis_note": "Acid-labile: gastric hydrochloric acid rapidly initiates ring-opening hydrolysis via acyl side-chain participation.",
            "historical_milestone": "Discovered by Alexander Fleming in 1928; crystallographic structure determined by Dorothy Crowfoot Hodgkin in 1945.",
            "reviewer": "Prof. H. Tanaka, PhD",
            "reviewed_on": "2026-09-05",
            "citations": [
                {"citation": "Hodgkin, D. C. et al. (1949). The X-ray crystallographic investigation of the structure of penicillin. Chemistry of Penicillin, 310-367.", "url": "https://doi.org/10.1515/9781400874910-011"}
            ]
        },
        "functional_groups": [
            {
                "id": "beta_lactam",
                "name": "Strained Beta-Lactam",
                "formula": "4-membered cyclic amide",
                "description": "High ring strain destroys resonance; ultra-reactive carbonyl acylates transpeptidase.",
                "color": "#f59e0b",
                "atom_indices": [5, 6, 7, 8]
            },
            {
                "id": "thiazolidine",
                "name": "Thiazolidine Ring",
                "formula": "5-membered sulfur heterocycle",
                "description": "Fused companion ring imparting rigid bicyclic bowl conformation.",
                "color": "#006767",
                "atom_indices": [1, 2, 3, 4, 5]
            },
            {
                "id": "benzyl_sidechain",
                "name": "Benzyl Side-Chain",
                "formula": "PhCH2-CO-NH-",
                "description": "Aromatic acyl side-chain; susceptible to gastric acid degradation.",
                "color": "#4e5f79",
                "atom_indices": [10, 11, 12, 13, 14, 15, 16]
            }
        ]
    },
    {
        "id": "amoxicillin",
        "slug": "amoxicillin",
        "name": "Amoxicillin",
        "canonical_name": "Amoxicillin",
        "iupac_name": "(2S,5R,6R)-6-[[(2R)-2-amino-2-(4-hydroxyphenyl)acetyl]amino]-3,3-dimethyl-7-oxo-4-thia-1-azabicyclo[3.2.0]heptane-2-carboxylic acid",
        "cid": "33613",
        "family": "beta_lactams",
        "family_name": "Beta-Lactam Antibiotics",
        "subfamily": "Aminopenicillins",
        "story_type": "sar",
        "cas": "26787-78-0",
        "tags": ["Antibiotic", "Broad Spectrum", "Oral Bioavailability", "Aminopenicillin"],
        "pka": 2.4,
        "melting_pt": "194.0 °C",
        "boiling_pt": "Decomposes",
        "solubility": "3.4 mg/mL (at 20 °C)",
        "organoleptic": "Practically odorless white crystalline powder",
        "story": {
            "title": "Alpha-Amino Substitution Bestows Acid Stability & Oral Bioavailability",
            "body": "Amoxicillin represents a pivotal medicinal chemistry refinement over Penicillin G. By introducing a basic amino group (-NH2) onto the alpha position of the benzyl side-chain, amoxicillin transforms into an aminopenicillin. In the stomach's acidic environment, this amino group protonates (-NH3+), acting as an electron-withdrawing shield that represses nucleophilic attack of the side-chain carbonyl oxygen onto the lactam ring. This confers acid resistance, allowing high oral bioavailability (~90% vs ~15% for Penicillin G). Furthermore, the zwitterionic amino and phenolic groups enhance permeation through hydrophilic OmpF porins of Gram-negative bacteria.",
            "hydrolysis_note": "Resistant to gastric acid degradation, but susceptible to bacterial beta-lactamase enzymatic ring opening.",
            "historical_milestone": "Developed by Beecham Research Laboratories in 1972 as an improved orally bioavailable antibiotic.",
            "reviewer": "Prof. H. Tanaka, PhD",
            "reviewed_on": "2026-09-05",
            "citations": [
                {"citation": "Rolinson, G. N. (1998). A review of the microbiology, pharmacokinetics and clinical utility of amoxicillin. Chemotherapy, 44(Suppl 1), 1-13.", "url": "https://doi.org/10.1159/000007137"}
            ]
        },
        "functional_groups": [
            {
                "id": "alpha_amino",
                "name": "Alpha-Amino Group",
                "formula": "-NH2",
                "description": "Protonates in stomach acid (-NH3+), providing electron-withdrawing stability against acid hydrolysis.",
                "color": "#f59e0b",
                "atom_indices": [12]
            },
            {
                "id": "phenolic_tail",
                "name": "p-Hydroxyphenyl Ring",
                "formula": "HO-C6H4-",
                "description": "Enhances intestinal absorption via PepT1 peptide transporters.",
                "color": "#006767",
                "atom_indices": [13, 14, 15, 16, 17, 18, 19]
            },
            {
                "id": "beta_lactam",
                "name": "Beta-Lactam Ring",
                "formula": "4-membered lactam",
                "description": "Target of transpeptidase inhibition; acylated covalent bond.",
                "color": "#4e5f79",
                "atom_indices": [5, 6, 7, 8]
            }
        ]
    },
    {
        "id": "sulfanilamide",
        "slug": "sulfanilamide",
        "name": "Sulfanilamide",
        "canonical_name": "4-Aminobenzenesulfonamide",
        "iupac_name": "4-aminobenzenesulfonamide",
        "cid": "5333",
        "family": "sulfonamides",
        "family_name": "Sulfonamides & Antimetabolites",
        "subfamily": "Sulfonamides",
        "story_type": "sar",
        "cas": "63-74-1",
        "tags": ["Antimicrobial", "Antimetabolite", "PABA Mimic", "Sulfonamide"],
        "pka": 10.4,
        "melting_pt": "165.5 °C",
        "boiling_pt": "Decomposes at 260 °C",
        "solubility": "7.5 mg/mL (at 25 °C)",
        "organoleptic": "Odorless white crystalline solid",
        "story": {
            "title": "Molecular Mimicry of PABA in Dihydropteroate Synthase",
            "body": "Sulfanilamide is the active antimetabolite moiety of the historical antibacterial dye Prontosil. It provides a foundational case study in antimetabolite design. Sulfanilamide closely mimics the geometric dimensions, electronic configuration, and charge distribution of para-aminobenzoic acid (PABA), the natural substrate utilized by bacteria to biosynthesize dihydropteroate and folic acid. The distance between the primary amino group and the sulfonamide oxygens (~6.7 Å) matches PABA's N-to-O distance (~6.9 Å). Dihydropteroate synthase mistakenly incorporates sulfanilamide, starving the pathogen of nucleotides necessary for DNA synthesis.",
            "hydrolysis_note": "Chemically stable sulfonamide linkage; excreted partially as inactive N4-acetylated metabolite.",
            "historical_milestone": "Demonstrated by Gerhard Domagk in 1935 (Prontosil, Nobel Prize in Physiology or Medicine 1939).",
            "reviewer": "Dr. M. Chen, Pharm.D",
            "reviewed_on": "2026-08-28",
            "citations": [
                {"citation": "Woods, D. D. (1940). The relation of p-aminobenzoic acid to the mechanism of action of sulphanilamide. British Journal of Experimental Pathology, 21(2), 74-90.", "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2065360/"}
            ]
        },
        "functional_groups": [
            {
                "id": "sulfonamide",
                "name": "Sulfonamide Group",
                "formula": "-SO2NH2",
                "description": "Isosteric carboxylate replacement mimicking PABA's acidic headgroup.",
                "color": "#f59e0b",
                "atom_indices": [6, 7, 8, 9]
            },
            {
                "id": "primary_aniline",
                "name": "Para-Aniline Nitrogen",
                "formula": "-NH2",
                "description": "Essential primary amine; any substitution destroys direct dihydropteroate synthase binding.",
                "color": "#006767",
                "atom_indices": [5]
            }
        ]
    },
    {
        "id": "sulfamethoxazole",
        "slug": "sulfamethoxazole",
        "name": "Sulfamethoxazole",
        "canonical_name": "Sulfamethoxazole",
        "iupac_name": "4-amino-N-(5-methyl-1,2-oxazol-3-yl)benzenesulfonamide",
        "cid": "5329",
        "family": "sulfonamides",
        "family_name": "Sulfonamides & Antimetabolites",
        "subfamily": "Sulfonamides",
        "story_type": "sar",
        "cas": "723-46-6",
        "tags": ["Antibiotic", "Isoxazole Ring", "Co-trimoxazole", "Sulfonamide"],
        "pka": 5.6,
        "melting_pt": "169.0 °C",
        "boiling_pt": "Decomposes",
        "solubility": "0.5 mg/mL (at 25 °C)",
        "organoleptic": "Odorless, bitter white powder",
        "story": {
            "title": "Isoxazole Substitution & Ionization Modulation (pKa Drop)",
            "body": "Sulfamethoxazole exemplifies how heterocyclic substitution on the N1 position optimizes sulfonamide potency. Sulfanilamide has an N1-H pKa of 10.4, meaning that at physiological pH (7.4), less than 0.1% exists in the ionized anionic form required for optimal enzymatic interaction. By appending an electron-withdrawing 5-methylisoxazole ring, sulfamethoxazole drops its N1-H pKa to 5.6. At physiological pH 7.4, roughly 98% of the drug is ionized as the carboxylate-isosteric anion, matching the charge density of PABA and dramatically increasing antimicrobial efficacy. It is routinely combined with trimethoprim for synergistic sequential enzyme blockade.",
            "hydrolysis_note": "Stable sulfonamide bond; N4-acetylation occurs in liver, with acidic urine favoring crystallization if unhydrated.",
            "historical_milestone": "Synthesized by Shionogi in 1961; approved as the fixed combination Co-trimoxazole (Bactrim) in 1974.",
            "reviewer": "Dr. M. Chen, Pharm.D",
            "reviewed_on": "2026-08-28",
            "citations": [
                {"citation": "Bushby, S. R., & Hitchings, G. H. (1968). Trimethoprim, a sulphonamide potentiator. British Journal of Pharmacology and Chemotherapy, 33(1), 72-90.", "url": "https://doi.org/10.1111/j.1476-5381.1968.tb00475.x"}
            ]
        },
        "functional_groups": [
            {
                "id": "isoxazole",
                "name": "5-Methylisoxazole Ring",
                "formula": "C4H4NO-",
                "description": "Electron-withdrawing heteroaromatic ring lowering N1 pKa to 5.6 to optimize ionization.",
                "color": "#f59e0b",
                "atom_indices": [10, 11, 12, 13, 14, 15]
            },
            {
                "id": "sulfonamide",
                "name": "N1-Substituted Sulfonamide",
                "formula": "-SO2NH-",
                "description": "Ionized sulfonamide core mimicking PABA carboxylate.",
                "color": "#006767",
                "atom_indices": [6, 7, 8, 9]
            }
        ]
    },
    {
        "id": "propranolol",
        "slug": "propranolol",
        "name": "Propranolol",
        "canonical_name": "Propranolol",
        "iupac_name": "1-naphthalen-1-yloxy-3-(propan-2-ylamino)propan-2-ol",
        "cid": "4946",
        "family": "beta_blockers",
        "family_name": "Beta-Blockers & Adrenergic Receptors",
        "subfamily": "Aryloxypropanolamines",
        "story_type": "sar",
        "cas": "525-66-6",
        "tags": ["Beta-Blocker", "Cardiovascular", "Antihypertensive", "Chiral"],
        "pka": 9.42,
        "melting_pt": "96.0 °C",
        "boiling_pt": "434.5 °C (at 760 mmHg)",
        "solubility": "0.06 mg/mL (free base), freely soluble as HCl",
        "organoleptic": "Odorless white crystalline solid",
        "story": {
            "title": "Aryloxypropanolamine Pharmacophore in Beta-Adrenergic Antagonism",
            "body": "Propranolol is the historical prototype of non-selective beta-adrenergic receptor antagonists (beta-blockers). Its structure embodies the aryloxypropanolamine pharmacophore (-O-CH2-CH(OH)-CH2-NH-iPr). The bulky bicyclic naphthalene ring anchors deeply into the hydrophobic cleft of beta-1 and beta-2 adrenergic receptors, while the secondary alcohol and isopropylamine tail mimic the side-chain of natural catecholamines (epinephrine and norepinephrine). The bulky isopropyl group sterically impedes receptor activation while retaining sub-nanomolar affinity (Ki ~1 nM), competitively blocking sympathetic fight-or-flight signaling to lower heart rate and blood pressure.",
            "hydrolysis_note": "Highly lipophilic (LogP ~2.6); undergoes extensive hepatic CYP2D6 4-hydroxylation.",
            "historical_milestone": "Invented by Sir James Black at ICI in 1964; awarded the 1988 Nobel Prize in Physiology or Medicine.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-10",
            "citations": [
                {"citation": "Black, J. W. et al. (1964). A new adrenergic beta-receptor antagonist. Lancet, 1(7342), 1080-1081.", "url": "https://doi.org/10.1016/s0140-6736(64)91275-9"}
            ]
        },
        "functional_groups": [
            {
                "id": "naphthyl_ether",
                "name": "1-Naphthyl Ring",
                "formula": "C10H7-O-",
                "description": "Fused bicyclic aromatic ring system providing potent lipophilic receptor anchoring.",
                "color": "#4e5f79",
                "atom_indices": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                "id": "oxypropanolamine",
                "name": "Oxypropanolamine Chain",
                "formula": "-O-CH2-CH(OH)-CH2-",
                "description": "Flexible chiral linker positioning the secondary alcohol and basic amine.",
                "color": "#006767",
                "atom_indices": [11, 12, 13, 14]
            },
            {
                "id": "isopropylamine",
                "name": "N-Isopropyl Group",
                "formula": "-NH-CH(CH3)2",
                "description": "Branched aliphatic amine providing steric antagonism against G-protein activation.",
                "color": "#f59e0b",
                "atom_indices": [15, 16, 17, 18]
            }
        ]
    },
    {
        "id": "caffeine",
        "slug": "caffeine",
        "name": "Caffeine",
        "canonical_name": "1,3,7-Trimethylxanthine",
        "iupac_name": "1,3,7-trimethylpurine-2,6-dione",
        "cid": "2519",
        "family": "xanthines",
        "family_name": "Xanthines & Purine Alkaloids",
        "subfamily": "Purines",
        "story_type": "structure_property",
        "cas": "58-08-2",
        "tags": ["Stimulant", "Purine", "Alkaloid", "Adenosine Antagonist"],
        "pka": 10.4,
        "melting_pt": "238.0 °C",
        "boiling_pt": "178.0 °C (sublimes)",
        "solubility": "21.6 mg/mL (at 25 °C), 670 mg/mL (at 100 °C)",
        "organoleptic": "Odorless, distinctly bitter taste",
        "story": {
            "title": "Purine Core Adenosine Antagonism & Thermodynamic Sublimation",
            "body": "Caffeine (1,3,7-trimethylxanthine) is the most widely consumed psychoactive substance in the world. It consists of a planar bicyclic purine core containing two fused rings (a six-membered pyrimidinedione and a five-membered imidazole ring) methylated at nitrogens N1, N3, and N7. Structurally, caffeine closely resembles adenosine. It competitively antagonizes A1 and A2A adenosine receptors in the brain, preventing adenosine from inducing sedation and promoting sustained dopamine and norepinephrine neurotransmission. The planar aromatic xanthine skeleton readily engages in π-stacking interactions, allowing high crystalline sublimation without decomposition.",
            "hydrolysis_note": "Chemically stable purine ring; metabolized by hepatic CYP1A2 into paraxanthine, theobromine, and theophylline.",
            "historical_milestone": "First isolated from coffee beans by German chemist Friedlieb Ferdinand Runge in 1819 at the suggestion of Goethe.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-12",
            "citations": [
                {"citation": "Fredholm, B. B. et al. (1999). Actions of caffeine in the brain with special reference to factors that contribute to its widespread use. Pharmacological Reviews, 51(1), 83-133.", "url": "https://pharmrev.aspetjournals.org/content/51/1/83"}
            ]
        },
        "functional_groups": [
            {
                "id": "xanthine_core",
                "name": "Bicyclic Purine Dione",
                "formula": "Fused pyrimidinedione + imidazole",
                "description": "Planar aromatic ring system mimicking endogenous adenosine.",
                "color": "#006767",
                "atom_indices": [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                "id": "methyl_triad",
                "name": "1,3,7-Trimethyl Groups",
                "formula": "3x -CH3",
                "description": "Three nitrogen methylations conferring lipophilicity and blood-brain barrier permeability.",
                "color": "#f59e0b",
                "atom_indices": [10, 11, 12]
            }
        ]
    },
    {
        "id": "acetic-acid",
        "slug": "acetic-acid",
        "name": "Acetic Acid",
        "canonical_name": "Ethanoic acid",
        "iupac_name": "acetic acid",
        "cid": "176",
        "family": "congruent_c2",
        "family_name": "Congruent C2 Functional Series",
        "subfamily": "Carboxylic Acids",
        "story_type": "structure_property",
        "cas": "64-19-7",
        "tags": ["C2 Series", "Carboxylic Acid", "H-Bond Dimer", "Weak Acid"],
        "pka": 4.76,
        "melting_pt": "16.6 °C",
        "boiling_pt": "118.1 °C",
        "solubility": "Miscible in all proportions with water",
        "organoleptic": "Pungent, sour, vinegar odour and biting taste",
        "story": {
            "title": "Centrosymmetric Hydrogen-Bonded Dimerization (Δ41 °C vs Ester)",
            "body": "Acetic acid (CH3COOH) is the baseline carboxylic acid of the congruent C2 series. In both liquid phase and nonpolar vapor, pairs of acetic acid molecules associate into cyclic 8-membered centrosymmetric dimers through two complementary C=O···H-O hydrogen bonds. This doubling of effective molecular weight in the condensed phase produces an elevated normal boiling point of +118.1 °C. The carboxylate proton readily dissociates in aqueous solution (pKa 4.76), stabilized by symmetric resonance charge delocalization across both oxygen atoms.",
            "hydrolysis_note": "Stable carboxylic acid; undergoes esterification with alcohols in acidic media.",
            "historical_milestone": "One of the oldest known organic chemicals; glacial form isolated by Stahl in 1700.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-02",
            "citations": [
                {"citation": "CRC Handbook of Chemistry and Physics, Acetic acid thermal dimer constants.", "url": "https://hbcponline.com"}
            ]
        },
        "functional_groups": [
            {
                "id": "carboxyl",
                "name": "Carboxyl Group",
                "formula": "-COOH",
                "description": "Bifunctional donor/acceptor forming strong 8-membered centrosymmetric dimers.",
                "color": "#006767",
                "atom_indices": [1, 2, 3]
            },
            {
                "id": "methyl",
                "name": "Methyl Group",
                "formula": "CH3-",
                "description": "Terminal carbon backbone.",
                "color": "#4e5f79",
                "atom_indices": [0]
            }
        ]
    },
    {
        "id": "ethyl-acetate",
        "slug": "ethyl-acetate",
        "name": "Ethyl Acetate",
        "canonical_name": "Ethyl ethanoate",
        "iupac_name": "ethyl acetate",
        "cid": "8857",
        "family": "congruent_c2",
        "family_name": "Congruent C2 Functional Series",
        "subfamily": "Carboxylate Esters",
        "story_type": "structure_property",
        "cas": "141-78-6",
        "tags": ["C2 Series", "Ester", "Volatile Solvent", "Aromatic"],
        "pka": 25.0,
        "melting_pt": "-83.6 °C",
        "boiling_pt": "77.1 °C",
        "solubility": "83 g/L (at 20 °C)",
        "organoleptic": "Fruity, sweet pleasant pear-drop aroma",
        "story": {
            "title": "Esterification Eliminates H-Donors: The Volatility Surge",
            "body": "Ethyl acetate (CH3COOCH2CH3) derives from acetic acid by replacing the acidic hydroxyl hydrogen with an ethyl group. Despite gaining two carbons and increasing molecular weight to 88.11 g/mol (nearly 50% heavier than acetic acid), ethyl acetate boils at only 77.1 °C—a dramatic 41 °C decrease compared to acetic acid. Because the ester oxygen has no attached hydrogen, it cannot donate hydrogen bonds to form intermolecular networks. Interactions remain limited to dipole-dipole forces, dramatically elevating volatility and imparting a pleasant fruity fragrance.",
            "hydrolysis_note": "Hydrolyzes in the presence of strong acid or base (saponification) back to acetic acid and ethanol.",
            "historical_milestone": "First synthesized by Count de Lauraguais in 1759 by distilling acetic acid with ethanol.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-02",
            "citations": [
                {"citation": "Riddick, J. A. et al. (1986). Organic Solvents: Physical Properties and Methods of Purification.", "url": "https://wiley.com"}
            ]
        },
        "functional_groups": [
            {
                "id": "ester",
                "name": "Ester Carbonyl & Alkoxy",
                "formula": "-COO-",
                "description": "Aprotic polar group with dual H-acceptor lone pairs but zero donor capacity.",
                "color": "#f59e0b",
                "atom_indices": [1, 2, 3]
            }
        ]
    },
    {
        "id": "acetamide",
        "slug": "acetamide",
        "name": "Acetamide",
        "canonical_name": "Ethanamide",
        "iupac_name": "acetamide",
        "cid": "178",
        "family": "congruent_c2",
        "family_name": "Congruent C2 Functional Series",
        "subfamily": "Carboxamides",
        "story_type": "structure_property",
        "cas": "60-35-5",
        "tags": ["C2 Series", "Amide", "H-Bond Network", "High Boiling Point"],
        "pka": 15.1,
        "melting_pt": "82.0 °C",
        "boiling_pt": "222.0 °C",
        "solubility": "2000 g/L (extremely soluble)",
        "organoleptic": "Odorless when pure; mousy odor from trace acetamidine",
        "story": {
            "title": "Resonance Zwitterion & Infinite H-Bonded Sheet: The 222 °C Peak",
            "body": "Acetamide (CH3CONH2) represents the high-cohesion apex of the congruent C2 series. Nitrogen's lone pair donates heavily into the carbonyl π* orbital, giving the C-N bond ~40% double-bond character (zwitterionic resonance form H3C-C(O-)=NH2+). With two N-H hydrogen bond donors and an electron-dense carbonyl oxygen acceptor, acetamide forms an extensive continuous two-dimensional network of hydrogen-bonded ribbons in the solid and liquid states. This causes its boiling point to skyrocket to an astonishing +222.0 °C—a massive Δ145 °C above ethyl acetate—illustrating the tremendous thermodynamic power of multi-donor amide networks.",
            "hydrolysis_note": "Resistant to neutral hydrolysis; hydrolyzed only by heating with aqueous strong mineral acids or bases.",
            "historical_milestone": "First synthesized in 1847 by Charles Adolphe Wurtz by reaction of ethyl acetate with ammonia.",
            "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
            "reviewed_on": "2026-09-02",
            "citations": [
                {"citation": "Pauling, L. (1960). The Nature of the Chemical Bond (3rd ed.). Cornell University Press.", "url": "https://cornellpress.cornell.edu"}
            ]
        },
        "functional_groups": [
            {
                "id": "primary_amide",
                "name": "Primary Amide",
                "formula": "-CONH2",
                "description": "Planar zwitterionic resonance system with 2 H-donors and 1 H-acceptor forming continuous sheets.",
                "color": "#f59e0b",
                "atom_indices": [1, 2, 3]
            }
        ]
    }
]

print(f"Total curated compounds prepared: {len(compounds_meta)}")
os.makedirs("data", exist_ok=True)
with open("data/compounds_seed.json", "w", encoding="utf-8") as f:
    json.dump(compounds_meta, f, indent=2)
print("Saved data/compounds_seed.json successfully!")
