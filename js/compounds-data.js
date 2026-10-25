/**
 * Bondly Chemical Intelligence Database - Curated v2.4
 * Precomputed 3D coordinates, verified IUPAC/CRC properties, and reviewed SAR stories.
 */
window.BONDLY_DATABASE = {
  version: '2.4.0',
  updated: '2026-10-24',
  count: 18,
  compounds: [
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
    "tags": [
      "Analgesic",
      "Antipyretic",
      "NSAID",
      "Ester",
      "Carboxyl"
    ],
    "pka": 3.49,
    "melting_pt": "135.0 \u00b0C",
    "boiling_pt": "Decomposes at ~140 \u00b0C",
    "solubility": "3.3 mg/mL (at 20 \u00b0C)",
    "organoleptic": "Odorless, slightly bitter taste",
    "story": {
      "title": "Mechanism of COX-1 Inactivation & Gastric Permeability",
      "body": "Aspirin (acetylsalicylic acid) is a classic example of structure-activity relationship (SAR) in medicinal chemistry. The acetyl ester group (-OCOCH3) acts as a reactive suicide payload: once nestled inside the hydrophobic catalytic channel of Cyclooxygenase-1 (COX-1), aspirin irreversibly transfers its acetyl group to the hydroxyl oxygen of Serine-529. This steric obstruction permanently bars arachidonic acid from entering the cyclooxygenase active site, suppressing thromboxane A2 and inflammatory prostaglandin synthesis. Furthermore, the free carboxylic acid (-COOH, pKa 3.49) remains mostly un-ionized in the highly acidic gastric lumen (pH 1.5\u20132.0), enabling rapid passive transcellular diffusion through the gastric lipid bilayer into mucosal cells.",
      "hydrolysis_note": "The ester linkage is prone to nucleophilic attack by water and human carboxylesterases, slowly cleaving into salicylic acid and acetic acid.",
      "historical_milestone": "Synthesized in pure form by Felix Hoffmann at Bayer in 1897 to mitigate the severe gastric irritation caused by salicylic acid.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-15",
      "citations": [
        {
          "citation": "Vane, J. R. (1971). Inhibition of prostaglandin synthesis as a mechanism of action for aspirin-like drugs. Nature New Biology, 231(25), 232-235.",
          "url": "https://doi.org/10.1038/newbio231232a0"
        },
        {
          "citation": "PubChem Compound Summary for CID 2244, Acetylsalicylic acid.",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/2244"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "ester",
        "name": "Ester Group",
        "formula": "-COO-R",
        "description": "Acetate moiety derived from acetic anhydride; covalently transfers to Ser-529 in COX-1.",
        "color": "#f59e0b",
        "atom_indices": [
          7,
          8,
          9,
          10
        ]
      },
      {
        "id": "carboxyl",
        "name": "Carboxylic Acid",
        "formula": "-COOH",
        "description": "Terminal carboxyl group; acid pKa 3.49, provides water solubility and ionic interaction in receptor binding.",
        "color": "#006767",
        "atom_indices": [
          11,
          12,
          13
        ]
      },
      {
        "id": "aromatic",
        "name": "Aromatic Benzene Ring",
        "formula": "C6H4-",
        "description": "Planar 6\u03c0-electron resonance-stabilized phenyl core, providing hydrophobic anchoring.",
        "color": "#4e5f79",
        "atom_indices": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      }
    ],
    "formula": "C9H8O4",
    "mol_weight": 180.16,
    "exact_mass": 180.04225873,
    "smiles": "CC(=O)Oc1ccccc1C(=O)O",
    "inchikey": "BSYNRYMUTXBXSQ-UHFFFAOYSA-N",
    "logp": 1.2,
    "tpsa": 63.6,
    "hbd": 1,
    "hba": 4,
    "rotatable_bonds": 3,
    "heavy_atoms": 13,
    "sdf_3d": "2244\n  -OEChem-10242605413D\n\n 21 21  0     0  0  0  0  0  0999 V2000\n    1.2333    0.5540    0.7792 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.6952   -2.7148   -0.7502 O   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7958   -2.1843    0.8685 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.7813    0.8105   -1.4821 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0857    0.6088    0.4403 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7927   -0.5515    0.1244 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7288    1.8464    0.4133 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1426   -0.4741   -0.2184 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.0787    1.9238    0.0706 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7855    0.7636   -0.2453 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1409   -1.8536    0.1477 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1094    0.6715   -0.3113 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5305    0.5996    0.1635 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1851    2.7545    0.6593 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7247   -1.3605   -0.4564 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5797    2.8872    0.0506 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.8374    0.8238   -0.5090 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.7290    1.4184    0.8593 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2045    0.6969   -0.6924 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.7105   -0.3659    0.6426 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2555   -3.5916   -0.7337 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  5  1  0  0  0  0\n  1 12  1  0  0  0  0\n  2 11  1  0  0  0  0\n  2 21  1  0  0  0  0\n  3 11  2  0  0  0  0\n  4 12  2  0  0  0  0\n  5  6  1  0  0  0  0\n  5  7  2  0  0  0  0\n  6  8  2  0  0  0  0\n  6 11  1  0  0  0  0\n  7  9  1  0  0  0  0\n  7 14  1  0  0  0  0\n  8 10  1  0  0  0  0\n  8 15  1  0  0  0  0\n  9 10  2  0  0  0  0\n  9 16  1  0  0  0  0\n 10 17  1  0  0  0  0\n 12 13  1  0  0  0  0\n 13 18  1  0  0  0  0\n 13 19  1  0  0  0  0\n 13 20  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n2244\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.6\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n11\n10\n3\n15\n17\n13\n5\n16\n7\n14\n9\n8\n4\n18\n6\n12\n2\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n18\n1 -0.23\n10 -0.15\n11 0.63\n12 0.66\n13 0.06\n14 0.15\n15 0.15\n16 0.15\n17 0.15\n2 -0.65\n21 0.5\n3 -0.57\n4 -0.57\n5 0.08\n6 0.09\n7 -0.15\n8 -0.15\n9 -0.15\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n3\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n5\n1 2 acceptor\n1 3 acceptor\n1 4 acceptor\n3 2 3 11 anion\n6 5 6 7 8 9 10 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n13\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n000008C400000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n39.5952\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n25.432\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n1 1 18265615372930943622\n100427 49 16967750034970055351\n12138202 97 18271247217817981012\n12423570 1 16692715976000295083\n12524768 44 16753525617747228747\n12716758 59 18341332292274886536\n13024252 1 17968377969333732145\n14181834 199 17830728755827362645\n14614273 12 18262232214645093005\n15207287 21 17703787037639964108\n15775835 57 18340488876329928641\n16945 1 18271533103414939405\n193761 8 17907860604865584321\n20645476 183 17677348215414174190\n20871998 184 18198632231250704846\n21040471 1 18411412921197846465\n21501502 16 18123463883164380929\n23402539 116 18271795865171824860\n23419403 2 13539898140662769886\n23552423 10 18048876295495619569\n23559900 14 18272369794190581304\n241688 4 16179044415907240795\n257057 1 17478316999871287486\n2748010 2 18339085878070479087\n305870 269 18263645056784260212\n528862 383 18117272558388284091\n53812653 8 18410289211719108569\n7364860 26 17910392788380644719\n81228 2 18050568744116491203\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n244.06\n3.86\n2.45\n0.89\n1.95\n1.58\n0.15\n-1.85\n0.38\n-0.61\n-0.02\n0.29\n0.01\n-0.33\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n513.037\n\n> <PUBCHEM_SHAPE_VOLUME>\n136\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Analgesic",
      "Antipyretic",
      "Phenol",
      "Amide"
    ],
    "pka": 9.38,
    "melting_pt": "169.0 \u00b0C",
    "boiling_pt": "> 500 \u00b0C (calculated)",
    "solubility": "14.0 mg/mL (at 25 \u00b0C)",
    "organoleptic": "Slightly bitter white crystalline powder",
    "story": {
      "title": "Phenolic Hydroxyl & Amide Resonance in Central Analgesia",
      "body": "Paracetamol features a para-substituted benzene ring bridging a weakly acidic phenolic hydroxyl (-OH) and an acetamido group (-NHCOCH3). Unlike aspirin and NSAIDs, paracetamol lacks a free carboxylic acid, resulting in minimal peripheral anti-inflammatory action and sparing gastric mucosa. Its analgesic and antipyretic activity originates in the central nervous system, where it acts as a cosubstrate-inhibitor reducing the ferryl protoporphyrin radical in peroxidase active sites. The planar amide linkage exhibits strong resonance delocalization, resisting rapid hydrolysis under ambient conditions.",
      "hydrolysis_note": "Metabolized primarily through glucuronidation and sulfation, with minor CYP2E1 oxidation yielding reactive NAPQI.",
      "historical_milestone": "First prepared in 1878 by Harmon Northrop Morse; introduced clinically as Tylenol by McNeil Laboratories in 1955.",
      "reviewer": "Dr. M. Chen, Pharm.D",
      "reviewed_on": "2026-08-20",
      "citations": [
        {
          "citation": "Boutaud, O. et al. (2002). Acetaminophen inhibits cyclooxygenase via peroxide-dependent mechanism. PNAS, 99(10), 7130-7135.",
          "url": "https://doi.org/10.1073/pnas.102179899"
        },
        {
          "citation": "PubChem Compound Summary for CID 1983, Acetaminophen.",
          "url": "https://pubchem.ncbi.nlm.nih.gov/compound/1983"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "phenol_oh",
        "name": "Phenolic Hydroxyl",
        "formula": "-OH",
        "description": "Para-hydroxy group with pKa 9.38; key hydrogen bond donor facilitating antioxidant scavenging.",
        "color": "#006767",
        "atom_indices": [
          7,
          8
        ]
      },
      {
        "id": "amide",
        "name": "Secondary Amide",
        "formula": "-NHCOCH3",
        "description": "Planar acetamido group with partial double bond character between C and N.",
        "color": "#f59e0b",
        "atom_indices": [
          9,
          10,
          11
        ]
      },
      {
        "id": "aromatic",
        "name": "Para-disubstituted Benzene",
        "formula": "C6H4-",
        "description": "Electron-rich aromatic core connecting the phenolic and acetamide moieties.",
        "color": "#4e5f79",
        "atom_indices": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      }
    ],
    "formula": "C8H9NO2",
    "mol_weight": 151.16,
    "exact_mass": 151.06332853,
    "smiles": "CC(=O)Nc1ccc(O)cc1",
    "inchikey": "RZVAJINKPMORJF-UHFFFAOYSA-N",
    "logp": 0.5,
    "tpsa": 49.3,
    "hbd": 2,
    "hba": 2,
    "rotatable_bonds": 1,
    "heavy_atoms": 11,
    "sdf_3d": "1983\n  -OEChem-10242605413D\n\n 20 20  0     0  0  0  0  0  0999 V2000\n    3.8509    0.4516    0.0012 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5999    1.4041   -0.0018 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.5705   -0.7171    0.0001 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2066   -0.4231   -0.0002 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.2205    0.9047    0.0004 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7298   -1.4570   -0.0007 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5841    1.1986    0.0002 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0933   -1.1629   -0.0007 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5204    0.1648   -0.0003 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6485    0.1782    0.0009 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.9735   -0.5420    0.0010 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4436    1.7577    0.0012 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4113   -2.4963   -0.0010 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.8010   -1.7086    0.0001 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.9053    2.2370    0.0009 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.8180   -1.9726   -0.0008 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.0655   -1.1463   -0.9058 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.7904    0.1844    0.0288 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.0445   -1.1886    0.8802 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.9650    1.4176    0.0017 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  9  1  0  0  0  0\n  1 20  1  0  0  0  0\n  2 10  2  0  0  0  0\n  3  4  1  0  0  0  0\n  3 10  1  0  0  0  0\n  3 14  1  0  0  0  0\n  4  5  2  0  0  0  0\n  4  6  1  0  0  0  0\n  5  7  1  0  0  0  0\n  5 12  1  0  0  0  0\n  6  8  2  0  0  0  0\n  6 13  1  0  0  0  0\n  7  9  2  0  0  0  0\n  7 15  1  0  0  0  0\n  8  9  1  0  0  0  0\n  8 16  1  0  0  0  0\n 10 11  1  0  0  0  0\n 11 17  1  0  0  0  0\n 11 18  1  0  0  0  0\n 11 19  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n1983\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n2\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n17\n1 -0.53\n10 0.57\n11 0.06\n12 0.15\n13 0.15\n14 0.37\n15 0.15\n16 0.15\n2 -0.57\n20 0.45\n3 -0.55\n4 0.12\n5 -0.15\n6 -0.15\n7 -0.15\n8 -0.15\n9 0.08\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n2\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n4\n1 1 donor\n1 2 acceptor\n1 3 donor\n6 4 5 6 7 8 9 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n11\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n4\n\n> <PUBCHEM_CONFORMER_ID>\n000007BF00000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n29.3225\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n20.297\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10219947 1 18113338621837817764\n11062470 55 18411419518204251026\n12032990 46 18411707547554542334\n12932764 1 17203596078260793835\n13380535 76 18408886260652285810\n14144814 61 18411136913877994947\n14325111 11 18410856538196653569\n15775835 57 18272936041829235069\n16945 1 18410575114838704230\n17844478 74 18113625564592914661\n20201158 50 18335140894964588331\n20645477 70 18339636729639669727\n20871998 22 17982735177796030006\n21040471 1 18338799051918016902\n23235685 24 18409442613778059272\n23402539 116 18337099151254697655\n23402655 69 18341040836126580581\n2748010 2 18194397788770795348\n3248919 1 16877955914211802171\n528886 8 18411414033747415386\n53812653 166 18343296011552328384\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n209.66\n5.89\n1.4\n0.59\n2.62\n0.02\n0\n-0.3\n0\n-0.18\n0\n0\n0.01\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n432.756\n\n> <PUBCHEM_SHAPE_VOLUME>\n120.2\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "NSAID",
      "Analgesic",
      "Chiral",
      "Carboxylic Acid"
    ],
    "pka": 4.45,
    "melting_pt": "76.0 \u00b0C",
    "boiling_pt": "157.0 \u00b0C (at 4 mmHg)",
    "solubility": "0.021 mg/mL (water-insoluble)",
    "organoleptic": "Characteristic odour and slight acrid taste",
    "story": {
      "title": "Chirality & Lipophilic Arylpropionic Acid Mechanics",
      "body": "Ibuprofen is the archetype of the arylpropionic acid ('profen') class of nonsteroidal anti-inflammatory drugs. It possesses an asymmetrical \u03b1-carbon stereocentre adjacent to the carboxylic acid. Although administered as a racemic (50:50) mixture of (R)- and (S)-enantiomers, only the (S)-enantiomer inhibits COX enzymes. Remarkably, an endogenous enzymatic inversion pathway (2-arylpropionyl-CoA epimerase) unidirectionally converts inactive (R)-ibuprofen into active (S)-ibuprofen in human liver tissue. The bulky isobutyl group imparts significant lipophilicity (LogP 3.5), dictating extensive plasma albumin binding (>99%).",
      "hydrolysis_note": "Chemically stable carboxylic acid; resists spontaneous hydrolysis.",
      "historical_milestone": "Discovered in December 1961 by Stewart Adams and John Nicholson at the Boots UK research department.",
      "reviewer": "Prof. H. Tanaka, PhD (Medicinal Chemistry)",
      "reviewed_on": "2026-07-12",
      "citations": [
        {
          "citation": "Adams, S. S. (1987). The discovery of ibuprofen: a personal account. Lancet, 1(8528), 340-341.",
          "url": "https://doi.org/10.1016/s0140-6736(87)90924-1"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "carboxyl",
        "name": "Propionic Carboxyl",
        "formula": "-CH(CH3)COOH",
        "description": "Acidic headgroup coordinating to Arg-120 in the COX cyclooxygenase channel.",
        "color": "#006767",
        "atom_indices": [
          10,
          11,
          12,
          13
        ]
      },
      {
        "id": "isobutyl",
        "name": "Isobutyl Tail",
        "formula": "-CH2CH(CH3)2",
        "description": "Bulky branched aliphatic moiety providing potent hydrophobic interaction.",
        "color": "#f59e0b",
        "atom_indices": [
          7,
          8,
          9
        ]
      },
      {
        "id": "aromatic",
        "name": "Phenyl Ring",
        "formula": "C6H4-",
        "description": "Rigid aromatic spacer positioning the lipophilic tail and acidic headgroup.",
        "color": "#4e5f79",
        "atom_indices": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      }
    ],
    "formula": "C13H18O2",
    "mol_weight": 206.28,
    "exact_mass": 206.130679813,
    "smiles": "CC(C)Cc1ccc(C(C)C(=O)O)cc1",
    "inchikey": "HEFNNWSXXWATRW-UHFFFAOYSA-N",
    "logp": 3.5,
    "tpsa": 37.3,
    "hbd": 1,
    "hba": 2,
    "rotatable_bonds": 4,
    "heavy_atoms": 15,
    "sdf_3d": "3672\n  -OEChem-10242605413D\n\n 33 33  0     1  0  0  0  0  0999 V2000\n   -4.4457   -1.0032    0.4113 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4005   -1.9114    0.0531 O   0  0  0  0  0  0  0  0  0  0  0  0\n    3.9024   -0.4411    0.0362 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1486    0.8194   -0.4313 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6528    0.7393   -0.2472 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.0946    0.5935    0.0901 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5728    0.5152    0.2719 C   0  0  1  0  0  0  0  0  0  0  0  0\n    3.6076   -0.7760    1.5005 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5239   -1.6299   -0.8505 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.8690    0.2281   -1.2695 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.0897    1.1791    0.9405 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5135    0.1549   -1.0998 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2929    1.1057    1.1102 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.3736    1.3495   -0.7486 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1004   -0.9233    0.2332 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.9775   -0.2527   -0.0735 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.3789    1.0242   -1.4854 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5298    1.6907    0.1182 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.8243    0.8896    1.2739 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5794   -1.1167    1.6574 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.7958    0.0879    2.1462 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2658   -1.5849    1.8375 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.1778   -2.4814   -0.6301 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4964   -1.9688   -0.6863 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.6494   -1.3895   -1.9115 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3084   -0.1099   -2.2035 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.7024    1.5855    1.7398 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1208   -0.2449   -1.9075 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7290    1.4534    2.0430 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.0012    2.3792   -0.7840 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.3032    0.9294   -1.7582 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.4357    1.3895   -0.4835 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.7639   -1.9305    0.3782 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1 15  1  0  0  0  0\n  1 33  1  0  0  0  0\n  2 15  2  0  0  0  0\n  3  4  1  0  0  0  0\n  3  8  1  0  0  0  0\n  3  9  1  0  0  0  0\n  3 16  1  0  0  0  0\n  4  5  1  0  0  0  0\n  4 17  1  0  0  0  0\n  4 18  1  0  0  0  0\n  5 10  2  0  0  0  0\n  5 11  1  0  0  0  0\n  6  7  1  0  0  0  0\n  6 12  2  0  0  0  0\n  6 13  1  0  0  0  0\n  7 14  1  0  0  0  0\n  7 15  1  0  0  0  0\n  7 19  1  0  0  0  0\n  8 20  1  0  0  0  0\n  8 21  1  0  0  0  0\n  8 22  1  0  0  0  0\n  9 23  1  0  0  0  0\n  9 24  1  0  0  0  0\n  9 25  1  0  0  0  0\n 10 12  1  0  0  0  0\n 10 26  1  0  0  0  0\n 11 13  2  0  0  0  0\n 11 27  1  0  0  0  0\n 12 28  1  0  0  0  0\n 13 29  1  0  0  0  0\n 14 30  1  0  0  0  0\n 14 31  1  0  0  0  0\n 14 32  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n3672\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.6\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n5\n7\n3\n8\n6\n2\n4\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n16\n1 -0.65\n10 -0.15\n11 -0.15\n12 -0.15\n13 -0.15\n15 0.66\n2 -0.57\n26 0.15\n27 0.15\n28 0.15\n29 0.15\n33 0.5\n4 0.14\n5 -0.14\n6 -0.14\n7 0.2\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n4\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n6\n1 1 acceptor\n1 14 hydrophobe\n1 2 acceptor\n3 1 2 15 anion\n3 3 8 9 hydrophobe\n6 5 6 10 11 12 13 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n15\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n1\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n00000E5800000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n33.4346\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n30.505\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10465860 250 18272083885699767521\n10498660 4 8214144032056245195\n11132069 177 15410610363439031820\n11543360 7 17967825984648297108\n11769659 78 18260544537130987450\n11796584 16 18334575759136973235\n12251169 10 17060054878225422048\n124424 183 18202276983600822165\n12500047 106 18335693906485038525\n12644460 14 17845655996570124680\n12670546 177 13984958366832545714\n13296908 3 18202004309038201860\n13581323 91 18411984680203064389\n13675066 3 18059849537336259340\n13705890 14 18260550034921403748\n13760787 19 18334863822345186868\n14252887 29 17346887732449257614\n14289901 80 18189054346875352032\n14350558 41 18409738369510538278\n14993402 34 16153426177173977401\n15239191 94 18187363242109512154\n15309172 13 16200434654194781052\n15653759 3 18343864445994474073\n16945 1 16774082881614120108\n177051 138 18413112757784933046\n17834074 16 18409167701221551503\n18186145 218 17967532350550644900\n19026448 4 18335416872225196860\n19026448 5 18113059332984013340\n19422 9 17748544839928157189\n19862831 5 15502367915896170501\n200 152 17531247240940792456\n20281407 28 18344149189404302224\n20281475 54 18271816704506015112\n20645477 70 18335985345548531462\n20671657 53 17385441046277079573\n21501925 9 18060419127087554672\n22485316 2 18040994021158574356\n22854114 59 14764349331638486346\n231179 274 7853574604211708072\n23402539 116 15864345818900273028\n23559900 14 18342739568706371380\n26918003 58 18342731871993121138\n474 4 13182732671689590650\n4990 188 15213299746264963379\n568465 68 16988572362965321379\n58051976 100 18040435469230493885\n76465 3 18129653227232560959\n81228 2 17344650135555013136\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n296.95\n7.71\n1.56\n1.23\n0.51\n0.46\n0.07\n2.86\n0.57\n0.4\n0.06\n-0.61\n-0.06\n0.41\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n605.093\n\n> <PUBCHEM_SHAPE_VOLUME>\n172.2\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Alcohol",
      "Protic Solvent",
      "Isomer Pair",
      "Biofuel"
    ],
    "pka": 15.9,
    "melting_pt": "-114.1 \u00b0C",
    "boiling_pt": "78.37 \u00b0C",
    "solubility": "Miscible in all proportions with water",
    "organoleptic": "Pleasant characteristic alcoholic odor and burning taste",
    "story": {
      "title": "The Power of the Hydroxyl Hydrogen Bond Network",
      "body": "Ethanol (C2H6O) provides the quintessential textbook demonstration of structure-property relationships. It possesses a polarized hydroxyl (-OH) group capable of acting simultaneously as a hydrogen bond donor and acceptor. In liquid ethanol, molecules form extensive dynamic zig-zag hydrogen-bonded chains and cyclic oligomers, creating a high cohesive energy density. Consequently, despite having a tiny molecular weight of only 46.07 g/mol, ethanol is a liquid at standard temperature and pressure with a normal boiling point of +78.37 \u00b0C, completely miscible with water due to solvating H-bond lattices.",
      "hydrolysis_note": "Chemically stable primary alcohol; oxidized by ADH to acetaldehyde.",
      "historical_milestone": "Isolated in anhydrous state by Johann Tobias Lowitz in 1796; fundamental baseline for thermodynamic scale.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-01",
      "citations": [
        {
          "citation": "CRC Handbook of Chemistry and Physics, 104th Edition, Ethanol Thermodynamic Tables.",
          "url": "https://hbcponline.com"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "hydroxyl",
        "name": "Hydroxyl Group",
        "formula": "-OH",
        "description": "Protic group generating strong intermolecular hydrogen-bond networks.",
        "color": "#006767",
        "atom_indices": [
          2,
          3
        ]
      },
      {
        "id": "ethyl",
        "name": "Ethyl Backbone",
        "formula": "CH3-CH2-",
        "description": "Short sp3 alkyl chain providing weak dispersion forces.",
        "color": "#4e5f79",
        "atom_indices": [
          0,
          1
        ]
      }
    ],
    "formula": "C2H6O",
    "mol_weight": 46.07,
    "exact_mass": 46.041864811,
    "smiles": "CCO",
    "inchikey": "LFQSCWFLJHTTHZ-UHFFFAOYSA-N",
    "logp": -0.1,
    "tpsa": 20.2,
    "hbd": 1,
    "hba": 1,
    "rotatable_bonds": 0,
    "heavy_atoms": 3,
    "sdf_3d": "702\n  -OEChem-10242605413D\n\n  9  8  0     0  0  0  0  0  0999 V2000\n   -1.1712    0.2997    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0463   -0.5665    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2175    0.2668    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0958   -1.2120    0.8819 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0952   -1.1938   -0.8946 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1050   -0.3720   -0.0177 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2426    0.9307   -0.8704 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2616    0.9052    0.8886 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1291    0.8364    0.8099 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0  0  0  0\n  1  9  1  0  0  0  0\n  2  3  1  0  0  0  0\n  2  4  1  0  0  0  0\n  2  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  3  7  1  0  0  0  0\n  3  8  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n702\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n3\n1 -0.68\n2 0.28\n9 0.4\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n0\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n2\n1 1 acceptor\n1 1 donor\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n3\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n000002BE00000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n-1.3096\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n10.148\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n139733 1 18410856563987595332\n21015797 1 18192151726869919494\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n55.87\n1.48\n0.75\n0.58\n0.08\n0.07\n0\n-0.26\n0\n-0.01\n0\n0.04\n0.01\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n84.621\n\n> <PUBCHEM_SHAPE_VOLUME>\n41.5\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Ether",
      "Aprotic",
      "Isomer Pair",
      "Aerosol Propellant"
    ],
    "pka": -3.8,
    "melting_pt": "-141.5 \u00b0C",
    "boiling_pt": "-24.0 \u00b0C",
    "solubility": "71 g/L (at 20 \u00b0C)",
    "organoleptic": "Ethereal, sweet, chloroform-like odor",
    "story": {
      "title": "The Constitutional Isomer Paradox (\u0394102.37 \u00b0C)",
      "body": "Dimethyl ether shares the identical molecular formula (C2H6O) and molecular weight (46.07 g/mol) as ethanol. However, its oxygen atom is bonded symmetrically between two methyl carbons (CH3-O-CH3). With no acidic hydrogen atom bonded to oxygen, dimethyl ether is strictly an H-bond acceptor but CANNOT act as a hydrogen bond donor. Lacking an intermolecular H-bond network, its molecules interact purely through dipole-dipole forces and London dispersion forces. This singular structural divergence causes its normal boiling point to plummet by a staggering 102.37 \u00b0C compared to ethanol, making it a gas at room temperature.",
      "hydrolysis_note": "Chemically unreactive ether; resists cleavage by dilute acids and bases.",
      "historical_milestone": "First synthesized in 1835 by French chemists Jean-Baptiste Dumas and Eug\u00e8ne Peligot.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-01",
      "citations": [
        {
          "citation": "Linstrom, P. J., & Mallard, W. G. (Eds.). NIST Chemistry WebBook, NIST Standard Reference Database Number 69.",
          "url": "https://webbook.nist.gov"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "ether",
        "name": "Ether Linkage",
        "formula": "-O-",
        "description": "Dialkyl ether bridge; lone pairs accept H-bonds from protic solvents but cannot donate.",
        "color": "#f59e0b",
        "atom_indices": [
          1
        ]
      },
      {
        "id": "methyl_groups",
        "name": "Twin Methyl Terminals",
        "formula": "2x -CH3",
        "description": "Symmetrical sp3 methyl caps shielding the ether oxygen.",
        "color": "#4e5f79",
        "atom_indices": [
          0,
          2
        ]
      }
    ],
    "formula": "C2H6O",
    "mol_weight": 46.07,
    "exact_mass": 46.041864811,
    "smiles": "COC",
    "inchikey": "LCGLNKUTAGEVQW-UHFFFAOYSA-N",
    "logp": 0.1,
    "tpsa": 9.2,
    "hbd": 0,
    "hba": 1,
    "rotatable_bonds": 0,
    "heavy_atoms": 3,
    "sdf_3d": "8254\n  -OEChem-10242605413D\n\n  9  8  0     0  0  0  0  0  0999 V2000\n    0.0000    0.5330    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1750   -0.2665    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1750   -0.2665    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2129   -0.8918    0.8972 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0436    0.3974    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2129   -0.8918   -0.8972 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2129   -0.8918    0.8973 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2128   -0.8919   -0.8973 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.0436    0.3974   -0.0001 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0  0  0  0\n  1  3  1  0  0  0  0\n  2  4  1  0  0  0  0\n  2  5  1  0  0  0  0\n  2  6  1  0  0  0  0\n  3  7  1  0  0  0  0\n  3  8  1  0  0  0  0\n  3  9  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n8254\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n3\n1 -0.56\n2 0.28\n3 0.28\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n0\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n1\n1 1 acceptor\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n3\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n0000203E00000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n6.0891\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n5.074\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n139733 1 18410856563934789348\n20096714 4 9367340448818790286\n21015797 1 18052817236757859399\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n55.87\n1.6\n0.71\n0.58\n0\n0.01\n0\n0.23\n0\n0\n0\n0\n0.02\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n84.008\n\n> <PUBCHEM_SHAPE_VOLUME>\n42.3\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Aromatic",
      "H\u00fcckel Rule",
      "Hydrocarbon",
      "Pi-System"
    ],
    "pka": 43.0,
    "melting_pt": "5.5 \u00b0C",
    "boiling_pt": "80.1 \u00b0C",
    "solubility": "1.79 g/L (at 25 \u00b0C)",
    "organoleptic": "Sweet, aromatic, gasoline-like odor",
    "story": {
      "title": "Aromaticity & Planar Pi-Electron Resonance",
      "body": "Benzene (C6H6) is the foundation of aromatic chemistry. Its six sp2-hybridized carbon atoms form a perfectly flat, hexagonal ring with D6h symmetry. All six C-C bond lengths are completely identical (1.39 \u00c5), falling exactly between a typical single bond (1.54 \u00c5) and a double bond (1.34 \u00c5). Six \u03c0-electrons delocalize completely across the upper and lower orbital donuts according to H\u00fcckel's 4n+2 rule (n=1), conferring an exceptional thermodynamic resonance stabilization energy of approximately 36 kcal/mol. This immense stability causes benzene to undergo electrophilic aromatic substitution rather than addition reactions, preserving the intact ring.",
      "hydrolysis_note": "Extremely inert aromatic ring; completely unreactive toward water.",
      "historical_milestone": "Discovered by Michael Faraday in 1825; cyclical hexagonal structure proposed by August Kekul\u00e9 in 1865.",
      "reviewer": "Prof. H. Tanaka, PhD",
      "reviewed_on": "2026-08-10",
      "citations": [
        {
          "citation": "Kekul\u00e9, A. (1865). Sur la constitution des substances aromatiques. Bulletin de la Soci\u00e9t\u00e9 Chimique de Paris, 3, 98-110.",
          "url": "https://gallica.bnf.fr"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "aromatic_core",
        "name": "Aromatic 6\u03c0 Ring",
        "formula": "C6H6",
        "description": "Six delocalized \u03c0-electrons generating cyclic diatropic ring currents.",
        "color": "#4e5f79",
        "atom_indices": [
          0,
          1,
          2,
          3,
          4,
          5
        ]
      }
    ],
    "formula": "C6H6",
    "mol_weight": 78.11,
    "exact_mass": 78.0469501914,
    "smiles": "c1ccccc1",
    "inchikey": "UHOVQNZJYSORNB-UHFFFAOYSA-N",
    "logp": 2.1,
    "tpsa": 0.0,
    "hbd": 0,
    "hba": 0,
    "rotatable_bonds": 0,
    "heavy_atoms": 6,
    "sdf_3d": "241\n  -OEChem-10242605413D\n\n 12 12  0     0  0  0  0  0  0999 V2000\n   -1.2131   -0.6884    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2028    0.7064    0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0103   -1.3948    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0104    1.3948   -0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2028   -0.7063    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2131    0.6884    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1577   -1.2244    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1393    1.2564    0.0001 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0184   -2.4809   -0.0001 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0184    2.4808    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1394   -1.2563    0.0001 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1577    1.2245    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  1  3  1  0  0  0  0\n  1  7  1  0  0  0  0\n  2  4  1  0  0  0  0\n  2  8  1  0  0  0  0\n  3  5  2  0  0  0  0\n  3  9  1  0  0  0  0\n  4  6  2  0  0  0  0\n  4 10  1  0  0  0  0\n  5  6  1  0  0  0  0\n  5 11  1  0  0  0  0\n  6 12  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n241\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n12\n1 -0.15\n10 0.15\n11 0.15\n12 0.15\n2 -0.15\n3 -0.15\n4 -0.15\n5 -0.15\n6 -0.15\n7 0.15\n8 0.15\n9 0.15\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n0\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n1\n6 1 2 3 4 5 6 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n6\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n000000F100000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n13.148\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n5.074\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n16714656 1 18123201108121732318\n20096714 4 18339082562313515547\n21015797 1 9222644709913001990\n21040471 1 18194402190896164549\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n123.48\n1.59\n1.59\n0.62\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n251.998\n\n> <PUBCHEM_SHAPE_VOLUME>\n67.5\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Opioid",
      "Analgesic",
      "Alkaloid",
      "Receptor Ligand"
    ],
    "pka": 8.21,
    "melting_pt": "255.0 \u00b0C",
    "boiling_pt": "Decomposes",
    "solubility": "0.15 mg/mL (at 20 \u00b0C)",
    "organoleptic": "Bitter white crystalline powder",
    "story": {
      "title": "The Phenolic 3-OH Pharmacophore in Mu-Opioid Agonism",
      "body": "Morphine is the prototypical natural opiate alkaloid extracted from Papaver somniferum. Its rigid five-ring pentacyclic structure (rings A\u2013E) features a basic tertiary amine (pKa ~8.0, protonated at physiological pH to form a pivotal ionic salt bridge with Asp-147 in the mu-opioid receptor) and two hydroxyl groups: a phenolic 3-OH on ring A and an allylic 6-OH on ring C. The phenolic 3-OH is the crucial hydrogen-bond donor anchoring the ligand into the message pocket of the receptor. Free phenolic hydroxyl presence gives morphine potent receptor affinity, though its high polarity restricts passive blood-brain barrier penetration.",
      "hydrolysis_note": "Subject to phase II hepatic glucuronidation yielding active M6G and inactive M3G.",
      "historical_milestone": "First isolated from opium by Friedrich Sert\u00fcrner in 1804; named after Morpheus, the Greek god of dreams.",
      "reviewer": "Dr. M. Chen, Pharm.D",
      "reviewed_on": "2026-07-30",
      "citations": [
        {
          "citation": "Manglik, A. et al. (2012). Crystal structure of the \u00b5-opioid receptor bound to a morphinan antagonist. Nature, 485(7398), 321-326.",
          "url": "https://doi.org/10.1038/nature10954"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "phenolic_oh",
        "name": "Phenolic 3-OH",
        "formula": "-OH (C3)",
        "description": "Essential anchor for mu-opioid receptor binding; methylating this creates codeine.",
        "color": "#006767",
        "atom_indices": [
          9
        ]
      },
      {
        "id": "tertiary_amine",
        "name": "Tertiary N-Methyl",
        "formula": ">N-CH3",
        "description": "Protonated at pH 7.4; forms critical ionic bond with conserved Asp-147 residue.",
        "color": "#f59e0b",
        "atom_indices": [
          15,
          16
        ]
      },
      {
        "id": "allylic_oh",
        "name": "Allylic 6-OH",
        "formula": "-OH (C6)",
        "description": "Hydroxyl on cyclohexenyl ring C; susceptible to oxidation or acetylation.",
        "color": "#4e5f79",
        "atom_indices": [
          12
        ]
      }
    ],
    "formula": "C17H19NO3",
    "mol_weight": 285.34,
    "exact_mass": 285.13649347,
    "smiles": "CN1CCC23C4C1CC5=C2C(=C(C=C5)O)OC3C(C=C4)O",
    "inchikey": "BQJCRHHNABKAKU-KBQPJGBKSA-N",
    "logp": 0.8,
    "tpsa": 52.9,
    "hbd": 2,
    "hba": 4,
    "rotatable_bonds": 0,
    "heavy_atoms": 21,
    "sdf_3d": "5288826\n  -OEChem-10242605413D\n\n 40 44  0     1  0  0  0  0  0999 V2000\n   -1.9930   -0.4740    1.2005 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7826   -2.5168   -0.2218 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.6220    1.8421    0.5579 O   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1777   -0.0101    0.4474 N   0  0  2  0  0  0  0  0  0  0  0  0\n    0.3699   -0.7149    0.6616 C   0  0  1  0  0  0  0  0  0  0  0  0\n    1.2913   -1.3046   -0.4170 C   0  0  2  0  0  0  0  0  0  0  0  0\n    2.3441   -0.2023   -0.7640 C   0  0  1  0  0  0  0  0  0  0  0  0\n   -0.9377   -1.4750    0.9848 C   0  0  2  0  0  0  0  0  0  0  0  0\n    1.1988   -0.3907    1.9201 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2516    0.5302    0.1205 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6887    1.1052   -1.3279 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4315    0.4754    1.6126 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.3384    1.4306   -0.7480 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.3631   -2.5067   -0.0924 C   0  0  2  0  0  0  0  0  0  0  0  0\n    0.5066   -1.8183   -1.5971 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.5672    0.6306    0.5136 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7155   -2.3492   -1.4425 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3733    0.7916    0.2084 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4184    2.5415   -1.1246 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.3310    1.7217    0.1620 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.7382    2.6936   -0.6541 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8278   -2.1759   -0.0118 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0029   -0.6035   -1.5465 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.8451   -2.0128    1.9373 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5366   -1.3335    2.3712 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.5899    0.1174    2.6790 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5474    0.9596   -2.4075 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.3530    1.9680   -1.2194 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1271    1.5205    1.4760 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0801    0.4584    2.4975 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.0772   -3.5067    0.2593 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.9601   -1.7947   -2.5831 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2300   -2.7505   -2.3109 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.1500    1.8479    0.0287 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.9380    0.4055   -0.6472 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.0444    0.7352    1.0730 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0062    3.2824   -1.8043 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.3121    3.5638   -0.9645 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1557   -2.6446    0.6672 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.8483    1.0686    1.1031 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  8  1  0  0  0  0\n  1 16  1  0  0  0  0\n  2 14  1  0  0  0  0\n  2 39  1  0  0  0  0\n  3 20  1  0  0  0  0\n  3 40  1  0  0  0  0\n  4  7  1  0  0  0  0\n  4 12  1  0  0  0  0\n  4 18  1  0  0  0  0\n  5  6  1  0  0  0  0\n  5  8  1  0  0  0  0\n  5  9  1  0  0  0  0\n  5 10  1  0  0  0  0\n  6  7  1  0  0  0  0\n  6 15  1  0  0  0  0\n  6 22  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 23  1  0  0  0  0\n  8 14  1  0  0  0  0\n  8 24  1  0  0  0  0\n  9 12  1  0  0  0  0\n  9 25  1  0  0  0  0\n  9 26  1  0  0  0  0\n 10 13  2  0  0  0  0\n 10 16  1  0  0  0  0\n 11 13  1  0  0  0  0\n 11 27  1  0  0  0  0\n 11 28  1  0  0  0  0\n 12 29  1  0  0  0  0\n 12 30  1  0  0  0  0\n 13 19  1  0  0  0  0\n 14 17  1  0  0  0  0\n 14 31  1  0  0  0  0\n 15 17  2  0  0  0  0\n 15 32  1  0  0  0  0\n 16 20  2  0  0  0  0\n 17 33  1  0  0  0  0\n 18 34  1  0  0  0  0\n 18 35  1  0  0  0  0\n 18 36  1  0  0  0  0\n 19 21  2  0  0  0  0\n 19 37  1  0  0  0  0\n 20 21  1  0  0  0  0\n 21 38  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n5288826\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.6\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n26\n1 -0.36\n10 -0.14\n11 0.14\n12 0.27\n13 -0.14\n14 0.42\n15 -0.29\n16 0.08\n17 -0.29\n18 0.27\n19 -0.15\n2 -0.68\n20 0.08\n21 -0.15\n3 -0.53\n32 0.15\n33 0.15\n37 0.15\n38 0.15\n39 0.4\n4 -0.81\n40 0.45\n5 0.14\n6 0.14\n7 0.27\n8 0.28\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n1.2\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n10\n1 1 acceptor\n1 2 acceptor\n1 2 donor\n1 3 donor\n1 4 cation\n5 1 5 8 10 16 rings\n6 10 13 16 19 20 21 rings\n6 4 5 6 7 9 12 rings\n6 5 6 7 10 11 13 rings\n6 5 6 8 14 15 17 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n21\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n5\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n3\n\n> <PUBCHEM_CONFORMER_ID>\n0050B37A00000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n74.8429\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n52.873\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10165383 225 18201451224619826784\n10863032 1 18271807882738128182\n10871710 139 17975427020448559044\n10948715 1 18269553840856601268\n11578080 2 17916862543033451120\n12035758 1 17979921506076134602\n12326174 3 16761939621672351259\n12403814 3 18127127700562790162\n12423570 1 13554306196661771698\n13132413 78 16832327581639147097\n13140716 1 18188786057421996321\n13172582 1 18260836951273720209\n13681431 1 17258466355483259718\n141345 1 11468367428490074574\n144361 1 17623048910753830566\n14817 1 13651070280742688743\n15852999 172 18199182901892535827\n16945 1 18189637062236146638\n17357779 13 17772166846782183447\n18393751 57 17187542376137546200\n19868273 325 18263924500288743760\n21524375 3 18267574711299526024\n22112679 90 18121790679236681172\n22182313 1 18194427527483256583\n2334 1 17972616638225251261\n23388829 49 17833828657105785732\n23402539 116 18338509850163596911\n23419403 2 15694871661581035675\n23557571 272 18270408299151999272\n23559900 14 18059580127798590934\n238 59 17618764874292193101\n2748010 2 17975155161707925181\n34934 24 18113338621838265964\n495365 180 17547829890269334821\n7364860 26 17256519721717681045\n81228 2 18194937829152466419\n84936 31 17124492616027647943\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n409.58\n4.45\n3.02\n1.55\n2.3\n0.24\n-0.13\n-1.6\n-0.99\n-2.59\n1.17\n0.46\n0.26\n-0.03\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n930.437\n\n> <PUBCHEM_SHAPE_VOLUME>\n211.2\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Opioid",
      "Prodrug",
      "Antitussive",
      "Ether Derivative"
    ],
    "pka": 8.24,
    "melting_pt": "156.0 \u00b0C",
    "boiling_pt": "Decomposes at 250 \u00b0C",
    "solubility": "8.0 mg/mL (at 25 \u00b0C)",
    "organoleptic": "Odorless, slightly bitter crystalline powder",
    "story": {
      "title": "Methylation of Phenolic Hydroxyl: Prodrug Mechanics",
      "body": "Codeine differs from morphine by a single atomic modification: the phenolic 3-OH group is methylated to form a 3-methoxy ether (-OCH3). This minor substitution illustrates a profound structure-activity lesson: masking the hydrogen-bond donor capability eliminates direct steric fitting into the mu-opioid receptor's message pocket, plummeting codeine's intrinsic binding affinity to less than 0.1% that of morphine. However, the lipophilic methoxy group enhances gastrointestinal absorption and blood-brain barrier permeability. Once in the liver, CYP2D6 demethylates roughly 10% of codeine back into active morphine.",
      "hydrolysis_note": "Ether linkage is chemically stable; enzymatic O-demethylation governed by genetic CYP2D6 polymorphisms.",
      "historical_milestone": "Isolated by Pierre Jean Robiquet in France in 1832 from raw opium extracts.",
      "reviewer": "Dr. M. Chen, Pharm.D",
      "reviewed_on": "2026-07-30",
      "citations": [
        {
          "citation": "Armstrong, S. C., & Cozza, K. L. (2003). Pharmacokinetic drug interactions of common analgesics. Psychosomatics, 44(6), 515-519.",
          "url": "https://doi.org/10.1176/appi.psy.44.6.515"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "methoxy_c3",
        "name": "3-Methoxy Ether",
        "formula": "-OCH3 (C3)",
        "description": "Masked phenolic group; destroys direct receptor binding but improves brain uptake.",
        "color": "#f59e0b",
        "atom_indices": [
          9,
          10
        ]
      },
      {
        "id": "tertiary_amine",
        "name": "Tertiary N-Methyl",
        "formula": ">N-CH3",
        "description": "Conserved basic center maintaining classic morphinan scaffold topology.",
        "color": "#006767",
        "atom_indices": [
          16,
          17
        ]
      }
    ],
    "formula": "C18H21NO3",
    "mol_weight": 299.4,
    "exact_mass": 299.15214353,
    "smiles": "COC1=C2C3=C(C=C1)CC4C5C3(CCN4C)C(C=C5)OC2",
    "inchikey": "OROGSEYTTFOCAN-DNJOTXNNSA-N",
    "logp": 1.1,
    "tpsa": 41.9,
    "hbd": 1,
    "hba": 4,
    "rotatable_bonds": 1,
    "heavy_atoms": 22,
    "sdf_3d": "5284371\n  -OEChem-10242605413D\n\n 43 47  0     1  0  0  0  0  0999 V2000\n   -1.5926   -1.0371    1.1890 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.8298   -3.2224   -0.2208 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7490    0.7880    0.5181 O   0  0  0  0  0  0  0  0  0  0  0  0\n    3.2987    0.7132    0.4612 N   0  0  2  0  0  0  0  0  0  0  0  0\n    0.7585   -0.6767    0.6654 C   0  0  1  0  0  0  0  0  0  0  0  0\n    1.8071   -1.0215   -0.4031 C   0  0  2  0  0  0  0  0  0  0  0  0\n    2.5499    0.3087   -0.7532 C   0  0  1  0  0  0  0  0  0  0  0  0\n   -0.3170   -1.7404    0.9876 C   0  0  2  0  0  0  0  0  0  0  0  0\n    1.4691   -0.1453    1.9259 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1533    0.3674    0.1106 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5897    1.4045   -1.3316 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4454    1.0021    1.6181 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.1967    1.3820   -0.7621 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4599   -2.8532   -0.0835 C   0  0  2  0  0  0  0  0  0  0  0  0\n    1.1865   -1.7246   -1.5833 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4545    0.1347    0.4954 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.1370   -2.5460   -1.4311 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2548    1.7894    0.2223 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.8133    2.2630   -1.1520 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4665    0.9951    0.1305 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1323    2.0799   -0.6902 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.7250    1.7390    0.0868 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5432   -1.7265    0.0124 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.2945    0.0818   -1.5287 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0988   -2.2310    1.9450 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0307   -0.9692    2.3866 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7460    0.1975    2.6771 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4978    1.2209   -2.4108 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0137    2.4078   -1.2265 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8878    1.9354    1.4711 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0705    1.1554    2.5067 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0666   -3.7461    0.2781 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6268   -1.5936   -2.5669 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2529   -3.0700   -2.2991 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.7733    2.7539    0.0327 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.9052    1.5529   -0.6269 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.9119    1.9100    1.0911 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5953    3.0800   -1.8348 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.8599    2.8061   -1.0394 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1650   -3.4351    0.6669 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.5125    2.7381    0.4819 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.6882    1.4255    0.5022 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.8280    1.7389   -1.0034 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  8  1  0  0  0  0\n  1 16  1  0  0  0  0\n  2 14  1  0  0  0  0\n  2 40  1  0  0  0  0\n  3 20  1  0  0  0  0\n  3 22  1  0  0  0  0\n  4  7  1  0  0  0  0\n  4 12  1  0  0  0  0\n  4 18  1  0  0  0  0\n  5  6  1  0  0  0  0\n  5  8  1  0  0  0  0\n  5  9  1  0  0  0  0\n  5 10  1  0  0  0  0\n  6  7  1  0  0  0  0\n  6 15  1  0  0  0  0\n  6 23  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 24  1  0  0  0  0\n  8 14  1  0  0  0  0\n  8 25  1  0  0  0  0\n  9 12  1  0  0  0  0\n  9 26  1  0  0  0  0\n  9 27  1  0  0  0  0\n 10 13  2  0  0  0  0\n 10 16  1  0  0  0  0\n 11 13  1  0  0  0  0\n 11 28  1  0  0  0  0\n 11 29  1  0  0  0  0\n 12 30  1  0  0  0  0\n 12 31  1  0  0  0  0\n 13 19  1  0  0  0  0\n 14 17  1  0  0  0  0\n 14 32  1  0  0  0  0\n 15 17  2  0  0  0  0\n 15 33  1  0  0  0  0\n 16 20  2  0  0  0  0\n 17 34  1  0  0  0  0\n 18 35  1  0  0  0  0\n 18 36  1  0  0  0  0\n 18 37  1  0  0  0  0\n 19 21  2  0  0  0  0\n 19 38  1  0  0  0  0\n 20 21  1  0  0  0  0\n 21 39  1  0  0  0  0\n 22 41  1  0  0  0  0\n 22 42  1  0  0  0  0\n 22 43  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n5284371\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.6\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n26\n1 -0.36\n10 -0.14\n11 0.14\n12 0.27\n13 -0.14\n14 0.42\n15 -0.29\n16 0.08\n17 -0.29\n18 0.27\n19 -0.15\n2 -0.68\n20 0.08\n21 -0.15\n22 0.28\n3 -0.36\n33 0.15\n34 0.15\n38 0.15\n39 0.15\n4 -0.81\n40 0.4\n5 0.14\n6 0.14\n7 0.27\n8 0.28\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n2.2\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n10\n1 1 acceptor\n1 2 acceptor\n1 2 donor\n1 3 acceptor\n1 4 cation\n5 1 5 8 10 16 rings\n6 10 13 16 19 20 21 rings\n6 4 5 6 7 9 12 rings\n6 5 6 7 10 11 13 rings\n6 5 6 8 14 15 17 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n22\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n5\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n0050A21300000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n86.8514\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n52.875\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10165383 225 18271815626612006224\n104564 63 18125434469387790263\n10863032 1 17988923383575816526\n10871710 139 17542518574892179276\n10948715 1 18342174462167820428\n11578080 2 17844243154462313416\n12035758 1 18268145349714419042\n12423570 1 15172270675521901358\n12716301 132 18057589053141114482\n13140716 1 18263933150569377027\n13172582 1 18187366536328367929\n13681431 1 17265523648286347086\n141345 1 12873117395699313718\n14142880 1 18051390053876007888\n144361 1 17404908054592749606\n14817 1 12459610013145756230\n15852999 172 18343868809459746170\n16945 1 17901124210549227282\n17357779 13 17556563675936898375\n20905425 154 17467348928812575822\n21524375 3 18410286982720648920\n22112679 90 17761784265775947238\n22182313 1 18193585370116762235\n23388829 49 17400638723840670292\n23419403 2 17768575717183535390\n23557571 272 18197788906206643080\n238 59 17907274586516203221\n2748010 2 18191613919887358891\n3060560 45 18262806138313347471\n34934 24 18040714818066959332\n427121 178 18343298145787175057\n4340502 62 18060137626799898305\n495365 180 17981021043542337733\n5939293 188 18113347418026474357\n7364860 26 17906448831692679861\n81228 2 17979044387501088682\n84936 31 17556843742222085087\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n430.16\n5.34\n3.13\n1.5\n2.68\n2.14\n0.13\n-4.47\n0.91\n0.8\n-0.96\n-0.71\n0.14\n0.53\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n969.267\n\n> <PUBCHEM_SHAPE_VOLUME>\n224.4\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Opioid Antagonist",
      "Emergency Antidote",
      "Allyl Substitution"
    ],
    "pka": 7.94,
    "melting_pt": "184.0 \u00b0C",
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
        {
          "citation": "Koehl, A. et al. (2018). Structure of the \u00b5-opioid receptor\u2013Gi protein complex. Nature, 558(7711), 547-552.",
          "url": "https://doi.org/10.1038/s41586-018-0219-7"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "n_allyl",
        "name": "N-Allyl Substituent",
        "formula": "-CH2-CH=CH2",
        "description": "Crucial steric bumper preventing helix VI receptor contraction, converting agonist to pure antagonist.",
        "color": "#f59e0b",
        "atom_indices": [
          17,
          18,
          19
        ]
      },
      {
        "id": "hydroxyl_14",
        "name": "14-Hydroxyl Group",
        "formula": "-OH (C14)",
        "description": "Additional tertiary alcohol boosting binding selectivity at mu-opioid sites.",
        "color": "#006767",
        "atom_indices": [
          13
        ]
      },
      {
        "id": "ketone_c6",
        "name": "6-Carbonyl",
        "formula": "C=O (C6)",
        "description": "Oxidized ketone replacing morphine's allylic hydroxyl.",
        "color": "#4e5f79",
        "atom_indices": [
          15
        ]
      }
    ],
    "formula": "C19H21NO4",
    "mol_weight": 327.4,
    "exact_mass": 327.14705815,
    "smiles": "C=CCN1CCC23C4C1CC5=C2C(=C(C=C5)O)OC3C(=O)CC4(O)",
    "inchikey": "UZHSEJADLWPNLE-GRGSLBFTSA-N",
    "logp": 2.1,
    "tpsa": 70.0,
    "hbd": 2,
    "hba": 5,
    "rotatable_bonds": 2,
    "heavy_atoms": 24,
    "sdf_3d": "5284596\n  -OEChem-10242605413D\n\n 45 49  0     1  0  0  0  0  0999 V2000\n   -2.3481   -0.0431   -1.4754 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.0921    2.6455   -0.1296 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.6117    1.9732   -0.1866 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.6888   -2.5505   -0.8043 O   0  0  0  0  0  0  0  0  0  0  0  0\n    2.6104    0.3444    0.0358 N   0  0  2  0  0  0  0  0  0  0  0  0\n   -0.2097    0.6516   -0.5852 C   0  0  1  0  0  0  0  0  0  0  0  0\n    0.4832    1.5008    0.4907 C   0  0  1  0  0  0  0  0  0  0  0  0\n    1.6095    0.6012    1.1041 C   0  0  1  0  0  0  0  0  0  0  0  0\n   -1.5552    1.1417   -1.1443 C   0  0  2  0  0  0  0  0  0  0  0  0\n    0.8033    0.2982   -1.6997 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7182   -0.6102    0.0221 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5179    2.0544    1.5203 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.0363   -0.6938    1.7816 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0809   -0.3545   -1.1396 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1438   -1.3032    1.0706 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.6307    2.8400    0.8283 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.3803    1.9644   -0.1502 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.9039   -0.9850   -0.5767 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.8375   -0.2778    0.5209 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7726   -2.4861    1.4592 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5321   -2.1555   -0.2190 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.9478   -2.9157    0.8047 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.9109   -0.2685   -0.5237 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.4967   -1.3713   -1.0038 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1228    1.1908    1.8758 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4280    1.7467   -2.0492 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.0771    1.2089   -2.2484 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.3612   -0.3802   -2.4415 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0010    2.7299    2.2114 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.9628    1.2568    2.1247 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.6971   -0.4147    2.7881 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8111   -1.4531    1.9226 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8849   -1.4094   -0.9097 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.8058   -0.3502   -1.9618 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2537    3.7187    0.2966 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.3389    3.1958    1.5854 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4687    3.0200   -0.7739 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.6603   -1.3031    0.8655 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2223    0.2844    1.3808 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3739   -3.0765    2.2798 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4203   -3.8410    1.1268 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.2369    0.6979   -0.9009 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.9331   -1.8900   -1.4759 H   0  0  0  0  0  0  0  0  0  0  0  0\n    6.2734   -1.2967   -1.7570 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.2143   -2.3600   -0.6597 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  9  1  0  0  0  0\n  1 18  1  0  0  0  0\n  2  7  1  0  0  0  0\n  2 37  1  0  0  0  0\n  3 17  2  0  0  0  0\n  4 21  1  0  0  0  0\n  4 43  1  0  0  0  0\n  5  8  1  0  0  0  0\n  5 14  1  0  0  0  0\n  5 19  1  0  0  0  0\n  6  7  1  0  0  0  0\n  6  9  1  0  0  0  0\n  6 10  1  0  0  0  0\n  6 11  1  0  0  0  0\n  7  8  1  0  0  0  0\n  7 12  1  0  0  0  0\n  8 13  1  0  0  0  0\n  8 25  1  0  0  0  0\n  9 17  1  0  0  0  0\n  9 26  1  0  0  0  0\n 10 14  1  0  0  0  0\n 10 27  1  0  0  0  0\n 10 28  1  0  0  0  0\n 11 15  2  0  0  0  0\n 11 18  1  0  0  0  0\n 12 16  1  0  0  0  0\n 12 29  1  0  0  0  0\n 12 30  1  0  0  0  0\n 13 15  1  0  0  0  0\n 13 31  1  0  0  0  0\n 13 32  1  0  0  0  0\n 14 33  1  0  0  0  0\n 14 34  1  0  0  0  0\n 15 20  1  0  0  0  0\n 16 17  1  0  0  0  0\n 16 35  1  0  0  0  0\n 16 36  1  0  0  0  0\n 18 21  2  0  0  0  0\n 19 23  1  0  0  0  0\n 19 38  1  0  0  0  0\n 19 39  1  0  0  0  0\n 20 22  2  0  0  0  0\n 20 40  1  0  0  0  0\n 21 22  1  0  0  0  0\n 22 41  1  0  0  0  0\n 23 24  2  0  0  0  0\n 23 42  1  0  0  0  0\n 24 44  1  0  0  0  0\n 24 45  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n5284596\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.6\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n4\n3\n2\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n29\n1 -0.36\n11 -0.14\n13 0.14\n14 0.27\n15 -0.14\n16 0.06\n17 0.45\n18 0.08\n19 0.41\n2 -0.68\n20 -0.15\n21 0.08\n22 -0.15\n23 -0.29\n24 -0.3\n3 -0.57\n37 0.4\n4 -0.53\n40 0.15\n41 0.15\n42 0.15\n43 0.45\n44 0.15\n45 0.15\n5 -0.81\n6 0.14\n7 0.28\n8 0.27\n9 0.34\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n3.4\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n12\n1 1 acceptor\n1 2 acceptor\n1 2 donor\n1 24 hydrophobe\n1 3 acceptor\n1 4 donor\n1 5 cation\n5 1 6 9 11 18 rings\n6 11 15 18 20 21 22 rings\n6 5 6 7 8 10 14 rings\n6 6 7 8 11 13 15 rings\n6 6 7 9 12 16 17 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n24\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n4\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n9\n\n> <PUBCHEM_CONFORMER_ID>\n0050A2F400000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n82.5979\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n62.969\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10382601 240 17262742987754479089\n104564 63 18333729143720539123\n107951 10 18195534696452308902\n10863032 1 18270393885115205166\n10948715 1 18121221978348781624\n1100329 8 18410857655173689009\n11315181 36 18409733933743076174\n11578080 2 16485321424314029784\n12293681 4 17774729662426297473\n12423570 1 11842699984544947368\n12592029 89 17242176751589369720\n12788726 201 18192455123491597447\n13134695 92 17910958268454860383\n13140716 1 18270407199540391713\n13994607 96 13984672438307259902\n14790565 3 17977946778676375512\n15209289 33 18335138700204658123\n16752209 62 18115010996198655779\n16945 1 17970601121842186185\n1813 80 17130732615736636788\n19591789 44 17977381629619901859\n20600515 1 17245802107708838125\n23419403 2 12181851712265124355\n23493267 7 18271519780632109000\n23557571 272 18342181068117860550\n23559900 14 18340482280362331810\n23566358 2 18190732231868680212\n2748010 2 17248348632579344107\n394222 165 17464530897785531169\n404807 14 14179752979664780190\n4340502 62 17898588488039384441\n4921388 177 18336559226721274302\n59755656 520 18265614282431367421\n70251023 43 17913186926879825463\n81228 2 18337965566011099305\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n465.45\n6.47\n3.16\n1.54\n9.51\n0.28\n-0.12\n2.24\n2.34\n-3.41\n-0.85\n0.07\n0.13\n0.12\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n1048.036\n\n> <PUBCHEM_SHAPE_VOLUME>\n242.1\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Antibiotic",
      "Beta-Lactam",
      "PBP Inhibitor",
      "Acylating Agent"
    ],
    "pka": 2.75,
    "melting_pt": "214.0 \u00b0C",
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
        {
          "citation": "Hodgkin, D. C. et al. (1949). The X-ray crystallographic investigation of the structure of penicillin. Chemistry of Penicillin, 310-367.",
          "url": "https://doi.org/10.1515/9781400874910-011"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "beta_lactam",
        "name": "Strained Beta-Lactam",
        "formula": "4-membered cyclic amide",
        "description": "High ring strain destroys resonance; ultra-reactive carbonyl acylates transpeptidase.",
        "color": "#f59e0b",
        "atom_indices": [
          5,
          6,
          7,
          8
        ]
      },
      {
        "id": "thiazolidine",
        "name": "Thiazolidine Ring",
        "formula": "5-membered sulfur heterocycle",
        "description": "Fused companion ring imparting rigid bicyclic bowl conformation.",
        "color": "#006767",
        "atom_indices": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "id": "benzyl_sidechain",
        "name": "Benzyl Side-Chain",
        "formula": "PhCH2-CO-NH-",
        "description": "Aromatic acyl side-chain; susceptible to gastric acid degradation.",
        "color": "#4e5f79",
        "atom_indices": [
          10,
          11,
          12,
          13,
          14,
          15,
          16
        ]
      }
    ],
    "formula": "C16H18N2O4S",
    "mol_weight": 334.4,
    "exact_mass": 334.09872823,
    "smiles": "CC1(C(N2C(S1)C(C2=O)NC(=O)Cc3ccccc3)C(=O)O)C",
    "inchikey": "JGSARLDLIJGVTE-MBNYWOFBSA-N",
    "logp": 1.8,
    "tpsa": 112.0,
    "hbd": 2,
    "hba": 5,
    "rotatable_bonds": 4,
    "heavy_atoms": 23,
    "sdf_3d": "5904\n  -OEChem-10242605413D\n\n 41 43  0     1  0  0  0  0  0999 V2000\n   -0.8019    1.2308    0.5170 S   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.2842   -2.5451   -1.2026 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.3517    1.0760   -0.8170 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.1157   -0.6970    0.5961 O   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1598   -2.0405    1.2167 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4781   -0.7369    0.3018 N   0  0  0  0  0  0  0  0  0  0  0  0\n    0.5677   -1.3807   -0.3375 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.3100   -0.4177    1.1279 C   0  0  1  0  0  0  0  0  0  0  0  0\n   -2.5670    1.6679    0.1134 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1671    0.3360   -0.3862 C   0  0  2  0  0  0  0  0  0  0  0  0\n   -0.6142   -1.6325    0.4990 C   0  0  1  0  0  0  0  0  0  0  0  0\n   -1.9181   -1.8261   -0.3007 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.2193    2.2224    1.3871 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5771    2.7313   -0.9863 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.6296    0.1576   -0.1297 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8730   -1.6107    0.1024 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.9020   -1.2655   -0.9563 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.8679   -0.1949   -0.5225 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5670    1.1373   -0.7687 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.0457   -0.5556    0.1171 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.4619    2.1290   -0.3670 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.9405    0.4362    0.5190 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.6486    1.7786    0.2769 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.5167   -0.4852    2.1999 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.9961    0.1926   -1.4616 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4509   -2.4585    1.2025 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.2655    1.4761    2.1882 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6724    3.0921    1.7709 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.2446    2.5572    1.1944 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.0666    3.6467   -0.6644 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.0842    2.3779   -1.8995 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.6008    3.0119   -1.2561 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4359   -1.0113   -1.2762 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -6.3150    0.9762   -0.6611 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.4453   -2.1891   -1.1950 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.4229   -0.9646   -1.8960 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.6443    1.4206   -1.2675 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.2818   -1.5979    0.3120 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2343    3.1743   -0.5548 H   0  0  0  0  0  0  0  0  0  0  0  0\n    6.8642    0.1634    1.0209 H   0  0  0  0  0  0  0  0  0  0  0  0\n    6.3451    2.5508    0.5901 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  8  1  0  0  0  0\n  1  9  1  0  0  0  0\n  2 12  2  0  0  0  0\n  3 15  1  0  0  0  0\n  3 34  1  0  0  0  0\n  4 15  2  0  0  0  0\n  5 16  2  0  0  0  0\n  6  8  1  0  0  0  0\n  6 10  1  0  0  0  0\n  6 12  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 16  1  0  0  0  0\n  7 33  1  0  0  0  0\n  8 11  1  0  0  0  0\n  8 24  1  0  0  0  0\n  9 10  1  0  0  0  0\n  9 13  1  0  0  0  0\n  9 14  1  0  0  0  0\n 10 15  1  0  0  0  0\n 10 25  1  0  0  0  0\n 11 12  1  0  0  0  0\n 11 26  1  0  0  0  0\n 13 27  1  0  0  0  0\n 13 28  1  0  0  0  0\n 13 29  1  0  0  0  0\n 14 30  1  0  0  0  0\n 14 31  1  0  0  0  0\n 14 32  1  0  0  0  0\n 16 17  1  0  0  0  0\n 17 18  1  0  0  0  0\n 17 35  1  0  0  0  0\n 17 36  1  0  0  0  0\n 18 19  2  0  0  0  0\n 18 20  1  0  0  0  0\n 19 21  1  0  0  0  0\n 19 37  1  0  0  0  0\n 20 22  2  0  0  0  0\n 20 38  1  0  0  0  0\n 21 23  2  0  0  0  0\n 21 39  1  0  0  0  0\n 22 23  1  0  0  0  0\n 22 40  1  0  0  0  0\n 23 41  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n5904\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.8\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n9\n22\n15\n3\n14\n16\n18\n6\n26\n25\n2\n21\n24\n20\n5\n13\n12\n23\n19\n7\n10\n11\n27\n4\n8\n17\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n28\n1 -0.45\n10 0.36\n11 0.28\n12 0.58\n15 0.66\n16 0.57\n17 0.2\n18 -0.14\n19 -0.15\n2 -0.57\n20 -0.15\n21 -0.15\n22 -0.15\n23 -0.15\n3 -0.65\n33 0.37\n34 0.5\n37 0.15\n38 0.15\n39 0.15\n4 -0.57\n40 0.15\n41 0.15\n5 -0.57\n6 -0.59\n7 -0.65\n8 0.44\n9 0.23\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n5.8\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n9\n1 2 acceptor\n1 3 acceptor\n1 4 acceptor\n1 5 acceptor\n1 7 donor\n3 3 4 15 anion\n3 9 13 14 hydrophobe\n6 18 19 20 21 22 23 rings\n7 1 6 8 9 10 11 12 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n23\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n3\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n2\n\n> <PUBCHEM_CONFORMER_ID>\n0000171000000009\n\n> <PUBCHEM_MMFF94_ENERGY>\n62.154\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n45.727\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10498660 4 18272092733849101850\n10670039 82 18189075156682810060\n10906281 52 18128540358984260537\n11370993 70 18408885122928693780\n12596602 18 16588309444709846936\n12788726 201 17632016343038299377\n13402501 40 18410009953283665268\n13533116 47 17603861153313194546\n13583140 156 17458351814104110073\n14251764 38 18411423942707024208\n14466204 15 18335130987219030008\n14739800 52 18269537439035660906\n14767858 380 18200296798067348375\n14790565 3 18199760146083155345\n15196674 1 18411422774148358888\n15463212 79 18411691114910077694\n15537594 2 9655574115284858796\n15840311 113 17912385147392398185\n17959699 21 18411138030638031122\n20511986 3 18337656599291605116\n20715895 44 18335980883040834636\n21033648 29 16805600313641273007\n21315764 268 18335414682419714308\n21623110 236 18411428306040291321\n21652331 79 18408605867964609532\n23227448 37 18411701023272236815\n235170 7 15769784528824669972\n23559900 14 17985832536627452326\n2838139 119 18336819810338793028\n351380 180 18407478873342298788\n351380 3 10231756682471877620\n3545911 37 18342744009739712694\n3680242 22 18335985268756098320\n4340502 62 17095530578178278379\n46194498 28 13758063113455368010\n474 4 18040441014233765370\n5104073 3 18189060806542666939\n67856867 119 18189609458592618690\n9981440 41 18334012830600470754\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n443.74\n12.86\n2.8\n1.07\n9.03\n0.36\n0.07\n5.28\n-0.21\n-0.63\n-0.23\n-0.35\n0.06\n-0.24\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n931.394\n\n> <PUBCHEM_SHAPE_VOLUME>\n252.2\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Antibiotic",
      "Broad Spectrum",
      "Oral Bioavailability",
      "Aminopenicillin"
    ],
    "pka": 2.4,
    "melting_pt": "194.0 \u00b0C",
    "boiling_pt": "Decomposes",
    "solubility": "3.4 mg/mL (at 20 \u00b0C)",
    "organoleptic": "Practically odorless white crystalline powder",
    "story": {
      "title": "Alpha-Amino Substitution Bestows Acid Stability & Oral Bioavailability",
      "body": "Amoxicillin represents a pivotal medicinal chemistry refinement over Penicillin G. By introducing a basic amino group (-NH2) onto the alpha position of the benzyl side-chain, amoxicillin transforms into an aminopenicillin. In the stomach's acidic environment, this amino group protonates (-NH3+), acting as an electron-withdrawing shield that represses nucleophilic attack of the side-chain carbonyl oxygen onto the lactam ring. This confers acid resistance, allowing high oral bioavailability (~90% vs ~15% for Penicillin G). Furthermore, the zwitterionic amino and phenolic groups enhance permeation through hydrophilic OmpF porins of Gram-negative bacteria.",
      "hydrolysis_note": "Resistant to gastric acid degradation, but susceptible to bacterial beta-lactamase enzymatic ring opening.",
      "historical_milestone": "Developed by Beecham Research Laboratories in 1972 as an improved orally bioavailable antibiotic.",
      "reviewer": "Prof. H. Tanaka, PhD",
      "reviewed_on": "2026-09-05",
      "citations": [
        {
          "citation": "Rolinson, G. N. (1998). A review of the microbiology, pharmacokinetics and clinical utility of amoxicillin. Chemotherapy, 44(Suppl 1), 1-13.",
          "url": "https://doi.org/10.1159/000007137"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "alpha_amino",
        "name": "Alpha-Amino Group",
        "formula": "-NH2",
        "description": "Protonates in stomach acid (-NH3+), providing electron-withdrawing stability against acid hydrolysis.",
        "color": "#f59e0b",
        "atom_indices": [
          12
        ]
      },
      {
        "id": "phenolic_tail",
        "name": "p-Hydroxyphenyl Ring",
        "formula": "HO-C6H4-",
        "description": "Enhances intestinal absorption via PepT1 peptide transporters.",
        "color": "#006767",
        "atom_indices": [
          13,
          14,
          15,
          16,
          17,
          18,
          19
        ]
      },
      {
        "id": "beta_lactam",
        "name": "Beta-Lactam Ring",
        "formula": "4-membered lactam",
        "description": "Target of transpeptidase inhibition; acylated covalent bond.",
        "color": "#4e5f79",
        "atom_indices": [
          5,
          6,
          7,
          8
        ]
      }
    ],
    "formula": "C16H19N3O5S",
    "mol_weight": 365.4,
    "exact_mass": 365.10454189,
    "smiles": "CC1(C(N2C(S1)C(C2=O)NC(=O)C(c3ccc(cc3)O)N)C(=O)O)C",
    "inchikey": "LSQZJLSUYDQPKJ-NJBDSQKTSA-N",
    "logp": -2.0,
    "tpsa": 158.0,
    "hbd": 4,
    "hba": 7,
    "rotatable_bonds": 4,
    "heavy_atoms": 25,
    "sdf_3d": "33613\n  -OEChem-10242605413D\n\n 44 46  0     1  0  0  0  0  0999 V2000\n    0.8127   -0.5305    1.0470 S   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5412    1.9384   -2.1377 O   0  0  0  0  0  0  0  0  0  0  0  0\n    5.1164   -1.8059   -0.0667 O   0  0  0  0  0  0  0  0  0  0  0  0\n    4.3753   -0.4801    1.6331 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1798    2.4440    1.6021 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.1594   -3.4891    0.0834 O   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7863    0.7498   -0.1147 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1496    1.9689   -0.4201 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.5725    2.8271    0.2755 N   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8063    1.0059    0.9417 C   0  0  1  0  0  0  0  0  0  0  0  0\n    1.8293   -1.4420   -0.2179 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1210   -0.6204   -0.4284 C   0  0  2  0  0  0  0  0  0  0  0  0\n    1.2349    2.1188    0.0479 C   0  0  1  0  0  0  0  0  0  0  0  0\n    2.2954    1.6814   -0.9812 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0775   -2.8717    0.2742 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.0045   -1.4983   -1.5148 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2478   -0.9379    0.5072 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2582    2.1473    0.4110 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5838    1.9144   -0.3056 C   0  0  1  0  0  0  0  0  0  0  0  0\n   -3.0064    0.4636   -0.2012 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1874   -0.2708   -1.3592 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.2022   -0.0926    1.0502 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.5775   -1.6066   -1.2626 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.5921   -1.4285    1.1467 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7798   -2.1854   -0.0097 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2561    1.3404    1.8807 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.4766   -0.6650   -1.4646 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4211    3.1321    0.4236 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1390   -3.4302    0.3738 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7069   -3.4212   -0.4352 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5758   -2.8963    1.2496 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5603   -2.0263   -2.2987 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0600   -2.0365   -1.3702 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7635   -0.5048   -1.9058 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3223    1.7159   -1.3903 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4633    2.1960   -1.3593 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.8621   -2.0269    0.5312 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.4541    2.7374   -0.2289 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.2689    3.7907    0.1369 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.0315    0.1684   -2.3400 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.0658    0.4817    1.9615 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7211   -2.1915   -2.1670 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7470   -1.8675    2.1286 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.2526   -3.7236    1.0227 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1 10  1  0  0  0  0\n  1 11  1  0  0  0  0\n  2 14  2  0  0  0  0\n  3 17  1  0  0  0  0\n  3 37  1  0  0  0  0\n  4 17  2  0  0  0  0\n  5 18  2  0  0  0  0\n  6 25  1  0  0  0  0\n  6 44  1  0  0  0  0\n  7 10  1  0  0  0  0\n  7 12  1  0  0  0  0\n  7 14  1  0  0  0  0\n  8 13  1  0  0  0  0\n  8 18  1  0  0  0  0\n  8 35  1  0  0  0  0\n  9 19  1  0  0  0  0\n  9 38  1  0  0  0  0\n  9 39  1  0  0  0  0\n 10 13  1  0  0  0  0\n 10 26  1  0  0  0  0\n 11 12  1  0  0  0  0\n 11 15  1  0  0  0  0\n 11 16  1  0  0  0  0\n 12 17  1  0  0  0  0\n 12 27  1  0  0  0  0\n 13 14  1  0  0  0  0\n 13 28  1  0  0  0  0\n 15 29  1  0  0  0  0\n 15 30  1  0  0  0  0\n 15 31  1  0  0  0  0\n 16 32  1  0  0  0  0\n 16 33  1  0  0  0  0\n 16 34  1  0  0  0  0\n 18 19  1  0  0  0  0\n 19 20  1  0  0  0  0\n 19 36  1  0  0  0  0\n 20 21  2  0  0  0  0\n 20 22  1  0  0  0  0\n 21 23  1  0  0  0  0\n 21 40  1  0  0  0  0\n 22 24  2  0  0  0  0\n 22 41  1  0  0  0  0\n 23 25  2  0  0  0  0\n 23 42  1  0  0  0  0\n 24 25  1  0  0  0  0\n 24 43  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n33613\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.8\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n8\n17\n10\n18\n14\n29\n12\n3\n23\n25\n13\n15\n27\n21\n6\n20\n16\n26\n7\n24\n19\n9\n28\n5\n2\n11\n4\n22\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n32\n1 -0.45\n10 0.44\n11 0.23\n12 0.36\n13 0.28\n14 0.58\n17 0.66\n18 0.57\n19 0.47\n2 -0.57\n20 -0.14\n21 -0.15\n22 -0.15\n23 -0.15\n24 -0.15\n25 0.08\n3 -0.65\n35 0.37\n37 0.5\n38 0.36\n39 0.36\n4 -0.57\n40 0.15\n41 0.15\n42 0.15\n43 0.15\n44 0.45\n5 -0.57\n6 -0.53\n7 -0.59\n8 -0.65\n9 -0.99\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n5.8\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n12\n1 2 acceptor\n1 3 acceptor\n1 4 acceptor\n1 5 acceptor\n1 6 donor\n1 8 donor\n1 9 cation\n1 9 donor\n3 11 15 16 hydrophobe\n3 3 4 17 anion\n6 20 21 22 23 24 25 rings\n7 1 7 10 11 12 13 14 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n25\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n4\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n4\n\n> <PUBCHEM_CONFORMER_ID>\n0000834D00000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n67.1431\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n60.951\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10062212 137 18335421231574661425\n10616163 171 18341051839437082311\n10675989 125 17044287567819711200\n10759866 29 17897171440604065876\n11135609 12 18335713701630609938\n12553582 1 18270126854356182069\n12596599 1 17273707648634829575\n12633257 1 18410865356207832051\n13009979 54 18411146813952010284\n13140716 1 18342738511533136737\n13224815 77 18412546543587762453\n14081887 123 18200017435602546008\n14178342 30 18199756834220017952\n17349148 13 18260268534253952626\n17492 89 18409450305928018514\n20291156 8 18341053016426919849\n221490 88 18411699902618114120\n23402539 116 18041843883802133418\n23557571 272 18130224865524727883\n23558518 356 18259991495704548217\n23559900 14 18340473530480832737\n23598288 3 18272090483207273813\n392239 28 17988346119023815112\n463206 1 18124585634112152119\n5309563 4 18051696839448402183\n9709674 26 18271525273842468285\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n474.05\n8.88\n3.54\n1.43\n0.79\n0.16\n0.21\n4.89\n-0.51\n-2.02\n0\n0.17\n-0.18\n-0.76\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n1001.506\n\n> <PUBCHEM_SHAPE_VOLUME>\n267.9\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Antimicrobial",
      "Antimetabolite",
      "PABA Mimic",
      "Sulfonamide"
    ],
    "pka": 10.4,
    "melting_pt": "165.5 \u00b0C",
    "boiling_pt": "Decomposes at 260 \u00b0C",
    "solubility": "7.5 mg/mL (at 25 \u00b0C)",
    "organoleptic": "Odorless white crystalline solid",
    "story": {
      "title": "Molecular Mimicry of PABA in Dihydropteroate Synthase",
      "body": "Sulfanilamide is the active antimetabolite moiety of the historical antibacterial dye Prontosil. It provides a foundational case study in antimetabolite design. Sulfanilamide closely mimics the geometric dimensions, electronic configuration, and charge distribution of para-aminobenzoic acid (PABA), the natural substrate utilized by bacteria to biosynthesize dihydropteroate and folic acid. The distance between the primary amino group and the sulfonamide oxygens (~6.7 \u00c5) matches PABA's N-to-O distance (~6.9 \u00c5). Dihydropteroate synthase mistakenly incorporates sulfanilamide, starving the pathogen of nucleotides necessary for DNA synthesis.",
      "hydrolysis_note": "Chemically stable sulfonamide linkage; excreted partially as inactive N4-acetylated metabolite.",
      "historical_milestone": "Demonstrated by Gerhard Domagk in 1935 (Prontosil, Nobel Prize in Physiology or Medicine 1939).",
      "reviewer": "Dr. M. Chen, Pharm.D",
      "reviewed_on": "2026-08-28",
      "citations": [
        {
          "citation": "Woods, D. D. (1940). The relation of p-aminobenzoic acid to the mechanism of action of sulphanilamide. British Journal of Experimental Pathology, 21(2), 74-90.",
          "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2065360/"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "sulfonamide",
        "name": "Sulfonamide Group",
        "formula": "-SO2NH2",
        "description": "Isosteric carboxylate replacement mimicking PABA's acidic headgroup.",
        "color": "#f59e0b",
        "atom_indices": [
          6,
          7,
          8,
          9
        ]
      },
      {
        "id": "primary_aniline",
        "name": "Para-Aniline Nitrogen",
        "formula": "-NH2",
        "description": "Essential primary amine; any substitution destroys direct dihydropteroate synthase binding.",
        "color": "#006767",
        "atom_indices": [
          5
        ]
      }
    ],
    "formula": "C6H8N2O2S",
    "mol_weight": 172.21,
    "exact_mass": 172.03064868,
    "smiles": "Nc1ccc(S(=O)(=O)N)cc1",
    "inchikey": "FDDDEECHVMSUSB-UHFFFAOYSA-N",
    "logp": -0.6,
    "tpsa": 94.6,
    "hbd": 2,
    "hba": 4,
    "rotatable_bonds": 1,
    "heavy_atoms": 11,
    "sdf_3d": "5333\n  -OEChem-10242605423D\n\n 19 19  0     0  0  0  0  0  0999 V2000\n    2.1384    0.0001    0.1038 S   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5829    1.2598    0.6834 O   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5860   -1.2596    0.6813 O   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5075    0.0003   -1.5645 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.8060   -0.0006   -0.0440 N   0  0  0  0  0  0  0  0  0  0  0  0\n    0.3930    0.0001    0.0584 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3043    1.2080    0.0404 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3041   -1.2079    0.0414 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.3959   -0.0001   -0.0118 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.6987    1.2079    0.0053 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.6986   -1.2080    0.0063 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.2182    2.1605    0.0468 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.2185   -2.1603    0.0487 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.2308    2.1557   -0.0095 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.2305   -2.1560   -0.0076 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.8982    0.8613   -1.9662 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.8983   -0.8606   -1.9664 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.3121    0.8748   -0.0620 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.3117   -0.8762   -0.0613 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  1  3  2  0  0  0  0\n  1  4  1  0  0  0  0\n  1  6  1  0  0  0  0\n  4 16  1  0  0  0  0\n  4 17  1  0  0  0  0\n  5  9  1  0  0  0  0\n  5 18  1  0  0  0  0\n  5 19  1  0  0  0  0\n  6  7  2  0  0  0  0\n  6  8  1  0  0  0  0\n  7 10  1  0  0  0  0\n  7 12  1  0  0  0  0\n  8 11  2  0  0  0  0\n  8 13  1  0  0  0  0\n  9 10  2  0  0  0  0\n  9 11  1  0  0  0  0\n 10 14  1  0  0  0  0\n 11 15  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n5333\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n19\n1 1.45\n10 -0.15\n11 -0.15\n12 0.15\n13 0.15\n14 0.15\n15 0.15\n16 0.42\n17 0.42\n18 0.4\n19 0.4\n2 -0.65\n3 -0.65\n4 -0.98\n5 -0.9\n6 -0.01\n7 -0.15\n8 -0.15\n9 0.1\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n1\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n6\n1 2 acceptor\n1 3 acceptor\n1 4 donor\n1 5 cation\n1 5 donor\n6 6 7 8 9 10 11 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n11\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n000014D500000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n18.4666\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n30.463\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10857977 72 18338228375123238569\n12032990 46 18410862079216382755\n12524768 44 18201442514219999636\n12897270 3 18412548712340460254\n12932764 1 18410577283733807255\n14325111 11 18410852149009212937\n15310529 11 16732984236605691789\n15775835 57 18408042909611177208\n16945 1 18410858758958431259\n18186145 218 18272373044726463297\n20201158 50 17988928859775169942\n20645464 45 18131063861668782864\n20645476 183 17895207643764394903\n21028194 46 18334573495329985751\n21040471 1 18337393729617342005\n23402655 69 18123167049965193981\n23552423 10 18189618426241154637\n2748010 2 18123185972778118469\n369184 2 18411693292404813819\n5084963 1 17822572694489177096\n7364860 26 18342174449831622714\n8030462 33 18261117361172063214\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n208.52\n4.79\n1.39\n0.84\n0.8\n0\n-0.24\n0\n-0.1\n-0.04\n0.17\n-0.63\n0\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n420.174\n\n> <PUBCHEM_SHAPE_VOLUME>\n123\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Antibiotic",
      "Isoxazole Ring",
      "Co-trimoxazole",
      "Sulfonamide"
    ],
    "pka": 5.6,
    "melting_pt": "169.0 \u00b0C",
    "boiling_pt": "Decomposes",
    "solubility": "0.5 mg/mL (at 25 \u00b0C)",
    "organoleptic": "Odorless, bitter white powder",
    "story": {
      "title": "Isoxazole Substitution & Ionization Modulation (pKa Drop)",
      "body": "Sulfamethoxazole exemplifies how heterocyclic substitution on the N1 position optimizes sulfonamide potency. Sulfanilamide has an N1-H pKa of 10.4, meaning that at physiological pH (7.4), less than 0.1% exists in the ionized anionic form required for optimal enzymatic interaction. By appending an electron-withdrawing 5-methylisoxazole ring, sulfamethoxazole drops its N1-H pKa to 5.6. At physiological pH 7.4, roughly 98% of the drug is ionized as the carboxylate-isosteric anion, matching the charge density of PABA and dramatically increasing antimicrobial efficacy. It is routinely combined with trimethoprim for synergistic sequential enzyme blockade.",
      "hydrolysis_note": "Stable sulfonamide bond; N4-acetylation occurs in liver, with acidic urine favoring crystallization if unhydrated.",
      "historical_milestone": "Synthesized by Shionogi in 1961; approved as the fixed combination Co-trimoxazole (Bactrim) in 1974.",
      "reviewer": "Dr. M. Chen, Pharm.D",
      "reviewed_on": "2026-08-28",
      "citations": [
        {
          "citation": "Bushby, S. R., & Hitchings, G. H. (1968). Trimethoprim, a sulphonamide potentiator. British Journal of Pharmacology and Chemotherapy, 33(1), 72-90.",
          "url": "https://doi.org/10.1111/j.1476-5381.1968.tb00475.x"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "isoxazole",
        "name": "5-Methylisoxazole Ring",
        "formula": "C4H4NO-",
        "description": "Electron-withdrawing heteroaromatic ring lowering N1 pKa to 5.6 to optimize ionization.",
        "color": "#f59e0b",
        "atom_indices": [
          10,
          11,
          12,
          13,
          14,
          15
        ]
      },
      {
        "id": "sulfonamide",
        "name": "N1-Substituted Sulfonamide",
        "formula": "-SO2NH-",
        "description": "Ionized sulfonamide core mimicking PABA carboxylate.",
        "color": "#006767",
        "atom_indices": [
          6,
          7,
          8,
          9
        ]
      }
    ],
    "formula": "C10H11N3O3S",
    "mol_weight": 253.28,
    "exact_mass": 253.05211239,
    "smiles": "Cc1cc(NS(=O)(=O)c2ccc(N)cc2)no1",
    "inchikey": "JLKIGFTWXXRPMT-UHFFFAOYSA-N",
    "logp": 0.9,
    "tpsa": 107.0,
    "hbd": 2,
    "hba": 6,
    "rotatable_bonds": 3,
    "heavy_atoms": 17,
    "sdf_3d": "5329\n  -OEChem-10242605423D\n\n 28 29  0     0  0  0  0  0  0999 V2000\n    0.2645   -2.2031   -0.0845 S   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6416    0.9657   -0.9788 O   0  0  0  0  0  0  0  0  0  0  0  0\n    0.9463   -3.2030    0.7288 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0563   -2.5245   -1.4698 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1693   -1.7273    0.7438 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.9278   -0.2265   -0.9777 N   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5485    2.7532    0.0086 N   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2286   -0.7477   -0.0572 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1047   -0.5114    1.0022 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1228    0.1788   -1.0946 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.8451   -0.5383    0.2987 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7690    1.5778   -0.0129 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.8748    0.6514    1.0243 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8930    1.3415   -1.0724 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4539    0.3608    1.1589 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.9493    1.3051    0.2991 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7089    2.5476    0.4835 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2084   -1.9185    1.7534 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1983   -1.2149    1.8246 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4759    0.0078   -1.9492 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5527    0.8250    1.8562 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8070    2.0525   -1.8902 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5324    0.3461    2.2358 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.9096    2.7346    1.5430 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1506    3.4021    0.0887 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.6690    2.4929   -0.0386 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.1825    2.9260    0.7773 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.4707    3.4259   -0.7424 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  3  2  0  0  0  0\n  1  4  2  0  0  0  0\n  1  5  1  0  0  0  0\n  1  8  1  0  0  0  0\n  2  6  1  0  0  0  0\n  2 16  1  0  0  0  0\n  5 11  1  0  0  0  0\n  5 18  1  0  0  0  0\n  6 11  2  0  0  0  0\n  7 12  1  0  0  0  0\n  7 27  1  0  0  0  0\n  7 28  1  0  0  0  0\n  8  9  2  0  0  0  0\n  8 10  1  0  0  0  0\n  9 13  1  0  0  0  0\n  9 19  1  0  0  0  0\n 10 14  2  0  0  0  0\n 10 20  1  0  0  0  0\n 11 15  1  0  0  0  0\n 12 13  2  0  0  0  0\n 12 14  1  0  0  0  0\n 13 21  1  0  0  0  0\n 14 22  1  0  0  0  0\n 15 16  2  0  0  0  0\n 15 23  1  0  0  0  0\n 16 17  1  0  0  0  0\n 17 24  1  0  0  0  0\n 17 25  1  0  0  0  0\n 17 26  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n5329\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.6\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n2\n3\n6\n7\n15\n10\n4\n9\n5\n13\n12\n1\n11\n14\n16\n8\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n25\n1 1.45\n10 -0.15\n11 0.43\n12 0.1\n13 -0.15\n14 -0.15\n15 -0.15\n16 -0.04\n17 0.18\n18 0.42\n19 0.15\n2 -0.02\n20 0.15\n21 0.15\n22 0.15\n23 0.15\n27 0.4\n28 0.4\n3 -0.65\n4 -0.65\n5 -0.7\n6 -0.41\n7 -0.9\n8 -0.01\n9 -0.15\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n3\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n8\n1 3 acceptor\n1 4 acceptor\n1 5 donor\n1 6 acceptor\n1 7 cation\n1 7 donor\n5 2 6 11 15 16 rings\n6 8 9 10 12 13 14 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n17\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n2\n\n> <PUBCHEM_CONFORMER_ID>\n000014D100000002\n\n> <PUBCHEM_MMFF94_ENERGY>\n31.8062\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n40.615\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10382601 240 18118127974308603176\n11640471 11 18130775729582641989\n12491281 212 18190459553174590472\n13134695 92 17832137225806711695\n13764800 53 18267600159107394441\n14817 1 13229021964915856855\n15775835 57 18337391646590131392\n16945 1 18189325780234095434\n18522851 12 8862664680394396769\n18981168 100 18196960832032241467\n20291156 8 8935003684916038689\n20510252 161 18123474044418557010\n20621476 13 18048026385777317109\n20671657 1 18265903462278804271\n21041028 32 17472984999641269177\n21524375 3 18341894120920168019\n21731228 192 18335142024398406568\n21947302 44 18264777549703155827\n23402539 116 17766559436075265534\n23419403 2 13630503078490539155\n305870 269 18410575059019947210\n350125 39 18337686281341713099\n474 4 18338510846685647825\n49207404 50 18117583780952266929\n5939293 188 17906453225412510201\n6992083 37 17896587574260113532\n7364860 26 18126288536492861455\n81228 2 17692823995909490634\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n321.15\n5.57\n3.18\n1.22\n2.34\n0.93\n-0.14\n-5.57\n1\n-0.9\n0.02\n-0.09\n0.18\n-0.33\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n671.314\n\n> <PUBCHEM_SHAPE_VOLUME>\n182.5\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Beta-Blocker",
      "Cardiovascular",
      "Antihypertensive",
      "Chiral"
    ],
    "pka": 9.42,
    "melting_pt": "96.0 \u00b0C",
    "boiling_pt": "434.5 \u00b0C (at 760 mmHg)",
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
        {
          "citation": "Black, J. W. et al. (1964). A new adrenergic beta-receptor antagonist. Lancet, 1(7342), 1080-1081.",
          "url": "https://doi.org/10.1016/s0140-6736(64)91275-9"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "naphthyl_ether",
        "name": "1-Naphthyl Ring",
        "formula": "C10H7-O-",
        "description": "Fused bicyclic aromatic ring system providing potent lipophilic receptor anchoring.",
        "color": "#4e5f79",
        "atom_indices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ]
      },
      {
        "id": "oxypropanolamine",
        "name": "Oxypropanolamine Chain",
        "formula": "-O-CH2-CH(OH)-CH2-",
        "description": "Flexible chiral linker positioning the secondary alcohol and basic amine.",
        "color": "#006767",
        "atom_indices": [
          11,
          12,
          13,
          14
        ]
      },
      {
        "id": "isopropylamine",
        "name": "N-Isopropyl Group",
        "formula": "-NH-CH(CH3)2",
        "description": "Branched aliphatic amine providing steric antagonism against G-protein activation.",
        "color": "#f59e0b",
        "atom_indices": [
          15,
          16,
          17,
          18
        ]
      }
    ],
    "formula": "C16H21NO2",
    "mol_weight": 259.34,
    "exact_mass": 259.157228913,
    "smiles": "CC(C)NCC(O)COc1cccc2ccccc12",
    "inchikey": "AQHHHDLHHXJYJD-UHFFFAOYSA-N",
    "logp": 3.0,
    "tpsa": 41.5,
    "hbd": 2,
    "hba": 3,
    "rotatable_bonds": 6,
    "heavy_atoms": 19,
    "sdf_3d": "4946\n  -OEChem-10242605423D\n\n 40 41  0     1  0  0  0  0  0999 V2000\n    0.3581    1.4556    0.6931 O   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7841    2.1026    1.9563 O   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0013   -0.4295   -0.7358 N   0  0  0  0  0  0  0  0  0  0  0  0\n    2.7506    1.6406    0.6030 C   0  0  1  0  0  0  0  0  0  0  0  0\n    2.9583    0.1243    0.6107 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.2559   -1.8633   -0.7016 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4257    2.0654   -0.0264 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.2867   -2.4291   -2.1186 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1840   -2.5496    0.1392 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7847    1.1880   -0.0057 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.6137    0.1069    0.3355 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7871   -0.1304   -0.4193 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1076    2.0229   -1.0758 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.3042   -0.7438    1.4092 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.0970    0.7205   -1.4929 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.2617    1.7898   -1.8178 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.6163   -1.2112   -0.0783 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.1393   -1.8132    1.7338 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.2932   -2.0465    0.9914 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5802    2.1250    0.0742 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.1552   -0.3051    1.2181 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.8939   -0.0928    1.1433 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.2372   -2.0562   -0.2494 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.7259    0.0381   -1.2797 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4376    1.7758   -1.0846 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3154    3.1533    0.0541 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5019   -3.5030   -2.1036 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.3272   -2.2850   -2.6281 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.0646   -1.9438   -2.7185 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.3198   -2.3858    1.2130 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2295   -3.6358   -0.0048 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.1742   -2.2320   -0.1449 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.6876    3.0701    1.9380 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5116    2.8889   -1.3476 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.4099   -0.5899    2.0092 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.9948    0.5582   -2.0856 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5177    2.4448   -2.6457 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.5233   -1.4125   -0.6446 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.8882   -2.4642    2.5662 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.9428   -2.8792    1.2446 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  7  1  0  0  0  0\n  1 10  1  0  0  0  0\n  2  4  1  0  0  0  0\n  2 33  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  3 24  1  0  0  0  0\n  4  5  1  0  0  0  0\n  4  7  1  0  0  0  0\n  4 20  1  0  0  0  0\n  5 21  1  0  0  0  0\n  5 22  1  0  0  0  0\n  6  8  1  0  0  0  0\n  6  9  1  0  0  0  0\n  6 23  1  0  0  0  0\n  7 25  1  0  0  0  0\n  7 26  1  0  0  0  0\n  8 27  1  0  0  0  0\n  8 28  1  0  0  0  0\n  8 29  1  0  0  0  0\n  9 30  1  0  0  0  0\n  9 31  1  0  0  0  0\n  9 32  1  0  0  0  0\n 10 11  1  0  0  0  0\n 10 13  2  0  0  0  0\n 11 12  1  0  0  0  0\n 11 14  2  0  0  0  0\n 12 15  1  0  0  0  0\n 12 17  2  0  0  0  0\n 13 16  1  0  0  0  0\n 13 34  1  0  0  0  0\n 14 18  1  0  0  0  0\n 14 35  1  0  0  0  0\n 15 16  2  0  0  0  0\n 15 36  1  0  0  0  0\n 16 37  1  0  0  0  0\n 17 19  1  0  0  0  0\n 17 38  1  0  0  0  0\n 18 19  2  0  0  0  0\n 18 39  1  0  0  0  0\n 19 40  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n4946\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.8\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n4\n53\n60\n64\n88\n126\n95\n111\n117\n82\n85\n98\n34\n91\n114\n101\n115\n107\n44\n50\n23\n86\n49\n105\n8\n80\n51\n35\n32\n72\n127\n113\n71\n120\n55\n106\n84\n93\n108\n110\n13\n123\n109\n10\n81\n54\n47\n78\n69\n124\n42\n128\n118\n20\n52\n41\n19\n38\n26\n122\n94\n67\n46\n92\n12\n76\n31\n68\n83\n24\n112\n102\n48\n59\n61\n45\n125\n16\n129\n37\n119\n17\n43\n25\n77\n30\n104\n18\n11\n96\n116\n66\n70\n58\n65\n27\n99\n79\n100\n40\n121\n9\n97\n36\n3\n74\n56\n15\n73\n7\n22\n28\n103\n29\n39\n1\n14\n62\n57\n90\n6\n63\n89\n21\n33\n75\n87\n2\n5\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n24\n1 -0.36\n10 0.08\n13 -0.15\n14 -0.15\n15 -0.15\n16 -0.15\n17 -0.15\n18 -0.15\n19 -0.15\n2 -0.68\n24 0.36\n3 -0.9\n33 0.4\n34 0.15\n35 0.15\n36 0.15\n37 0.15\n38 0.15\n39 0.15\n4 0.28\n40 0.15\n5 0.27\n6 0.27\n7 0.28\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n6\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n8\n1 1 acceptor\n1 2 acceptor\n1 2 donor\n1 3 cation\n1 3 donor\n3 6 8 9 hydrophobe\n6 10 11 12 13 15 16 rings\n6 11 12 14 17 18 19 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n19\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n1\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n0000135200000004\n\n> <PUBCHEM_MMFF94_ENERGY>\n48.1445\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n40.624\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10764073 3 16891779863723744569\n107951 10 15463869315572570790\n11137873 295 18271528589467517535\n11322862 65 18114178580387122877\n11582403 64 16608487621546417140\n117890 22 18338804514800192159\n12202030 40 18410300219762635500\n12363563 72 17842837725066881342\n12553582 1 17909275684994469034\n13533116 47 18131080367808636259\n13544592 145 18335697192166772453\n13583140 156 17202488973484293169\n15635459 17 18410293639904542514\n15848702 151 18339643460069446723\n19049666 15 18337100181503678953\n20645477 70 18130494293086518612\n20693207 138 18409170974207969716\n21285901 2 18116421717294074303\n22182313 1 18187638137860956835\n22802520 49 18333725836405771289\n23557571 272 18114459049924943061\n23559900 14 18260257543411718180\n2748010 2 18334573581160727595\n5262128 65 18128814149409786814\n7097593 13 13398070804387529238\n7987 15 18338254716026127178\n81228 2 17967817162959726129\n84936 31 17845934129940627906\n9709674 26 18335692853875114068\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n374.29\n6.87\n3.16\n1.81\n1.95\n0.42\n0.25\n3.08\n1.32\n1.11\n0.1\n0.42\n0.11\n3.29\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n781.704\n\n> <PUBCHEM_SHAPE_VOLUME>\n214.2\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "Stimulant",
      "Purine",
      "Alkaloid",
      "Adenosine Antagonist"
    ],
    "pka": 10.4,
    "melting_pt": "238.0 \u00b0C",
    "boiling_pt": "178.0 \u00b0C (sublimes)",
    "solubility": "21.6 mg/mL (at 25 \u00b0C), 670 mg/mL (at 100 \u00b0C)",
    "organoleptic": "Odorless, distinctly bitter taste",
    "story": {
      "title": "Purine Core Adenosine Antagonism & Thermodynamic Sublimation",
      "body": "Caffeine (1,3,7-trimethylxanthine) is the most widely consumed psychoactive substance in the world. It consists of a planar bicyclic purine core containing two fused rings (a six-membered pyrimidinedione and a five-membered imidazole ring) methylated at nitrogens N1, N3, and N7. Structurally, caffeine closely resembles adenosine. It competitively antagonizes A1 and A2A adenosine receptors in the brain, preventing adenosine from inducing sedation and promoting sustained dopamine and norepinephrine neurotransmission. The planar aromatic xanthine skeleton readily engages in \u03c0-stacking interactions, allowing high crystalline sublimation without decomposition.",
      "hydrolysis_note": "Chemically stable purine ring; metabolized by hepatic CYP1A2 into paraxanthine, theobromine, and theophylline.",
      "historical_milestone": "First isolated from coffee beans by German chemist Friedlieb Ferdinand Runge in 1819 at the suggestion of Goethe.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-12",
      "citations": [
        {
          "citation": "Fredholm, B. B. et al. (1999). Actions of caffeine in the brain with special reference to factors that contribute to its widespread use. Pharmacological Reviews, 51(1), 83-133.",
          "url": "https://pharmrev.aspetjournals.org/content/51/1/83"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "xanthine_core",
        "name": "Bicyclic Purine Dione",
        "formula": "Fused pyrimidinedione + imidazole",
        "description": "Planar aromatic ring system mimicking endogenous adenosine.",
        "color": "#006767",
        "atom_indices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ]
      },
      {
        "id": "methyl_triad",
        "name": "1,3,7-Trimethyl Groups",
        "formula": "3x -CH3",
        "description": "Three nitrogen methylations conferring lipophilicity and blood-brain barrier permeability.",
        "color": "#f59e0b",
        "atom_indices": [
          10,
          11,
          12
        ]
      }
    ],
    "formula": "C8H10N4O2",
    "mol_weight": 194.19,
    "exact_mass": 194.08037557,
    "smiles": "Cn1cnc2c1c(=O)n(c(=O)n2C)C",
    "inchikey": "RYYVLZVUVIJVGH-UHFFFAOYSA-N",
    "logp": -0.1,
    "tpsa": 58.4,
    "hbd": 0,
    "hba": 3,
    "rotatable_bonds": 0,
    "heavy_atoms": 14,
    "sdf_3d": "2519\n  -OEChem-10242605423D\n\n 24 25  0     0  0  0  0  0  0999 V2000\n    0.4700    2.5688    0.0006 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1271   -0.4436   -0.0003 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.9686   -1.3125    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n    2.2182    0.1412   -0.0003 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.3477    1.0797   -0.0001 N   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4119   -1.9372    0.0002 N   0  0  0  0  0  0  0  0  0  0  0  0\n    0.8579    0.2592   -0.0008 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.3897   -1.0264   -0.0004 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0307    1.4220   -0.0006 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.9061   -0.2495   -0.0004 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.5032   -1.1998    0.0003 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4276   -2.6960    0.0008 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1926    1.2061    0.0003 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.2969    2.1881    0.0007 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.5163   -1.5787    0.0008 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.0451   -3.1973   -0.8937 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.5186   -2.7596    0.0011 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.0447   -3.1963    0.8957 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.1992    0.7801    0.0002 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0468    1.8092   -0.8992 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0466    1.8083    0.9004 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.8087    3.1651   -0.0003 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.9322    2.1027    0.8881 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.9346    2.1021   -0.8849 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  9  2  0  0  0  0\n  2 10  2  0  0  0  0\n  3  8  1  0  0  0  0\n  3 10  1  0  0  0  0\n  3 12  1  0  0  0  0\n  4  7  1  0  0  0  0\n  4 11  1  0  0  0  0\n  4 13  1  0  0  0  0\n  5  9  1  0  0  0  0\n  5 10  1  0  0  0  0\n  5 14  1  0  0  0  0\n  6  8  1  0  0  0  0\n  6 11  2  0  0  0  0\n  7  8  2  0  0  0  0\n  7  9  1  0  0  0  0\n 11 15  1  0  0  0  0\n 12 16  1  0  0  0  0\n 12 17  1  0  0  0  0\n 12 18  1  0  0  0  0\n 13 19  1  0  0  0  0\n 13 20  1  0  0  0  0\n 13 21  1  0  0  0  0\n 14 22  1  0  0  0  0\n 14 23  1  0  0  0  0\n 14 24  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n2519\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n15\n1 -0.57\n10 0.69\n11 0.04\n12 0.3\n13 0.26\n14 0.3\n15 0.15\n2 -0.57\n3 -0.42\n4 0.05\n5 -0.42\n6 -0.57\n7 -0.24\n8 0.29\n9 0.71\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n0\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n5\n1 1 acceptor\n1 2 acceptor\n3 4 6 11 cation\n5 4 6 7 8 11 rings\n6 3 5 7 8 9 10 rings\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n14\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n000009D700000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n22.901\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n25.487\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10967382 1 18338799025773621285\n11132069 177 18339075025094499008\n12524768 44 18342463625094026902\n13140716 1 17978511158789908153\n16945 1 18338517550775811621\n193761 8 15816500986559935910\n20588541 1 18339082691204868851\n21501502 16 18338796715286957384\n22802520 49 18128840606503503494\n2334 1 18338516344016692929\n23402539 116 18270382932679789735\n23552423 10 18262240993325675966\n23559900 14 18199193898169584358\n241688 4 18266458702623303353\n2748010 2 18266180539182415717\n5084963 1 17698433339235542986\n528886 8 18267580380709240570\n53812653 166 18198902694142226312\n66348 1 18339079396917369615\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n256.45\n4.01\n2.83\n0.58\n0.71\n0.08\n0\n-0.48\n0\n-0.81\n0\n0.01\n0\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n550.88\n\n> <PUBCHEM_SHAPE_VOLUME>\n143.9\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "C2 Series",
      "Carboxylic Acid",
      "H-Bond Dimer",
      "Weak Acid"
    ],
    "pka": 4.76,
    "melting_pt": "16.6 \u00b0C",
    "boiling_pt": "118.1 \u00b0C",
    "solubility": "Miscible in all proportions with water",
    "organoleptic": "Pungent, sour, vinegar odour and biting taste",
    "story": {
      "title": "Centrosymmetric Hydrogen-Bonded Dimerization (\u039441 \u00b0C vs Ester)",
      "body": "Acetic acid (CH3COOH) is the baseline carboxylic acid of the congruent C2 series. In both liquid phase and nonpolar vapor, pairs of acetic acid molecules associate into cyclic 8-membered centrosymmetric dimers through two complementary C=O\u00b7\u00b7\u00b7H-O hydrogen bonds. This doubling of effective molecular weight in the condensed phase produces an elevated normal boiling point of +118.1 \u00b0C. The carboxylate proton readily dissociates in aqueous solution (pKa 4.76), stabilized by symmetric resonance charge delocalization across both oxygen atoms.",
      "hydrolysis_note": "Stable carboxylic acid; undergoes esterification with alcohols in acidic media.",
      "historical_milestone": "One of the oldest known organic chemicals; glacial form isolated by Stahl in 1700.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-02",
      "citations": [
        {
          "citation": "CRC Handbook of Chemistry and Physics, Acetic acid thermal dimer constants.",
          "url": "https://hbcponline.com"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "carboxyl",
        "name": "Carboxyl Group",
        "formula": "-COOH",
        "description": "Bifunctional donor/acceptor forming strong 8-membered centrosymmetric dimers.",
        "color": "#006767",
        "atom_indices": [
          1,
          2,
          3
        ]
      },
      {
        "id": "methyl",
        "name": "Methyl Group",
        "formula": "CH3-",
        "description": "Terminal carbon backbone.",
        "color": "#4e5f79",
        "atom_indices": [
          0
        ]
      }
    ],
    "formula": "C2H4O2",
    "mol_weight": 60.05,
    "exact_mass": 60.021129366,
    "smiles": "CC(=O)O",
    "inchikey": "QTBSBXVTEAMEQO-UHFFFAOYSA-N",
    "logp": -0.2,
    "tpsa": 37.3,
    "hbd": 1,
    "hba": 2,
    "rotatable_bonds": 0,
    "heavy_atoms": 4,
    "sdf_3d": "176\n  -OEChem-10242605423D\n\n  8  7  0     0  0  0  0  0  0999 V2000\n   -0.3035    1.2890   -0.0002 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.9800   -0.8878   -0.0002 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3743   -0.3516   -0.0002 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0907   -0.0496    0.0006 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8368    0.0570   -0.9021 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.8400    0.0676    0.8952 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.5207   -1.4356    0.0064 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2598    1.5081   -0.0008 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  4  1  0  0  0  0\n  1  8  1  0  0  0  0\n  2  4  2  0  0  0  0\n  3  4  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  3  7  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n176\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n5\n1 -0.65\n2 -0.57\n3 0.06\n4 0.66\n8 0.5\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n0\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n3\n1 1 acceptor\n1 2 acceptor\n3 1 2 4 anion\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n4\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n000000B000000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n1.2463\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n15.279\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n139733 1 9222965763108524674\n20096714 4 17761776156988475192\n21015797 1 9727630600825169738\n5943 1 8496689065323825414\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n70.58\n1.33\n1.11\n0.56\n0.54\n0.16\n0\n-0.15\n0\n-0.36\n0\n0.04\n-0.01\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n121.512\n\n> <PUBCHEM_SHAPE_VOLUME>\n47.7\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "C2 Series",
      "Ester",
      "Volatile Solvent",
      "Aromatic"
    ],
    "pka": 25.0,
    "melting_pt": "-83.6 \u00b0C",
    "boiling_pt": "77.1 \u00b0C",
    "solubility": "83 g/L (at 20 \u00b0C)",
    "organoleptic": "Fruity, sweet pleasant pear-drop aroma",
    "story": {
      "title": "Esterification Eliminates H-Donors: The Volatility Surge",
      "body": "Ethyl acetate (CH3COOCH2CH3) derives from acetic acid by replacing the acidic hydroxyl hydrogen with an ethyl group. Despite gaining two carbons and increasing molecular weight to 88.11 g/mol (nearly 50% heavier than acetic acid), ethyl acetate boils at only 77.1 \u00b0C\u2014a dramatic 41 \u00b0C decrease compared to acetic acid. Because the ester oxygen has no attached hydrogen, it cannot donate hydrogen bonds to form intermolecular networks. Interactions remain limited to dipole-dipole forces, dramatically elevating volatility and imparting a pleasant fruity fragrance.",
      "hydrolysis_note": "Hydrolyzes in the presence of strong acid or base (saponification) back to acetic acid and ethanol.",
      "historical_milestone": "First synthesized by Count de Lauraguais in 1759 by distilling acetic acid with ethanol.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-02",
      "citations": [
        {
          "citation": "Riddick, J. A. et al. (1986). Organic Solvents: Physical Properties and Methods of Purification.",
          "url": "https://wiley.com"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "ester",
        "name": "Ester Carbonyl & Alkoxy",
        "formula": "-COO-",
        "description": "Aprotic polar group with dual H-acceptor lone pairs but zero donor capacity.",
        "color": "#f59e0b",
        "atom_indices": [
          1,
          2,
          3
        ]
      }
    ],
    "formula": "C4H8O2",
    "mol_weight": 88.11,
    "exact_mass": 88.052429494,
    "smiles": "CCOC(=O)C",
    "inchikey": "XEKOWRVHYACXOJ-UHFFFAOYSA-N",
    "logp": 0.7,
    "tpsa": 26.3,
    "hbd": 0,
    "hba": 2,
    "rotatable_bonds": 2,
    "heavy_atoms": 6,
    "sdf_3d": "8857\n  -OEChem-10242605423D\n\n 14 13  0     0  0  0  0  0  0999 V2000\n   -0.2577   -0.4782   -0.0002 O   0  0  0  0  0  0  0  0  0  0  0  0\n    1.2472    1.2745    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.3470    0.4499    0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6506   -0.3197    0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.9867    0.0789   -0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0\n    2.0213   -1.0053    0.0001 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2894    1.0804    0.8943 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2895    1.0807   -0.8940 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.5065    0.3609    0.0002 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7149   -0.9687   -0.8795 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7147   -0.9690    0.8794 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.9158   -1.6188   -0.8982 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.9167   -1.6175    0.8994 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0182   -0.5553   -0.0007 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  3  1  0  0  0  0\n  1  5  1  0  0  0  0\n  2  5  2  0  0  0  0\n  3  4  1  0  0  0  0\n  3  7  1  0  0  0  0\n  3  8  1  0  0  0  0\n  4  9  1  0  0  0  0\n  4 10  1  0  0  0  0\n  4 11  1  0  0  0  0\n  5  6  1  0  0  0  0\n  6 12  1  0  0  0  0\n  6 13  1  0  0  0  0\n  6 14  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n8857\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n9\n5\n4\n8\n2\n3\n6\n7\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n5\n1 -0.43\n2 -0.57\n3 0.28\n5 0.66\n6 0.06\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n2\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n1\n1 2 acceptor\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n6\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n0000229900000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n2.2216\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n5.074\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n139733 1 9294988177206305730\n20096714 4 18340207504437558272\n21040471 1 18194402418666457856\n23552449 11 18334562538852596186\n24536 1 18410563003115325601\n29004967 10 18339360769026024282\n5460574 1 9295286144667593923\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n111.74\n3.36\n1.07\n0.58\n1.46\n0.16\n0\n-0.76\n0\n-0.47\n0\n0.02\n-0.02\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n197.193\n\n> <PUBCHEM_SHAPE_VOLUME>\n73.8\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
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
    "tags": [
      "C2 Series",
      "Amide",
      "H-Bond Network",
      "High Boiling Point"
    ],
    "pka": 15.1,
    "melting_pt": "82.0 \u00b0C",
    "boiling_pt": "222.0 \u00b0C",
    "solubility": "2000 g/L (extremely soluble)",
    "organoleptic": "Odorless when pure; mousy odor from trace acetamidine",
    "story": {
      "title": "Resonance Zwitterion & Infinite H-Bonded Sheet: The 222 \u00b0C Peak",
      "body": "Acetamide (CH3CONH2) represents the high-cohesion apex of the congruent C2 series. Nitrogen's lone pair donates heavily into the carbonyl \u03c0* orbital, giving the C-N bond ~40% double-bond character (zwitterionic resonance form H3C-C(O-)=NH2+). With two N-H hydrogen bond donors and an electron-dense carbonyl oxygen acceptor, acetamide forms an extensive continuous two-dimensional network of hydrogen-bonded ribbons in the solid and liquid states. This causes its boiling point to skyrocket to an astonishing +222.0 \u00b0C\u2014a massive \u0394145 \u00b0C above ethyl acetate\u2014illustrating the tremendous thermodynamic power of multi-donor amide networks.",
      "hydrolysis_note": "Resistant to neutral hydrolysis; hydrolyzed only by heating with aqueous strong mineral acids or bases.",
      "historical_milestone": "First synthesized in 1847 by Charles Adolphe Wurtz by reaction of ethyl acetate with ammonia.",
      "reviewer": "Dr. E. Sterling, D.Phil (Oxon)",
      "reviewed_on": "2026-09-02",
      "citations": [
        {
          "citation": "Pauling, L. (1960). The Nature of the Chemical Bond (3rd ed.). Cornell University Press.",
          "url": "https://cornellpress.cornell.edu"
        }
      ]
    },
    "functional_groups": [
      {
        "id": "primary_amide",
        "name": "Primary Amide",
        "formula": "-CONH2",
        "description": "Planar zwitterionic resonance system with 2 H-donors and 1 H-acceptor forming continuous sheets.",
        "color": "#f59e0b",
        "atom_indices": [
          1,
          2,
          3
        ]
      }
    ],
    "formula": "C2H5NO",
    "mol_weight": 59.07,
    "exact_mass": 59.037113783,
    "smiles": "CC(=O)N",
    "inchikey": "DLFVBJFMPXGRIB-UHFFFAOYSA-N",
    "logp": -0.9,
    "tpsa": 43.1,
    "hbd": 1,
    "hba": 1,
    "rotatable_bonds": 0,
    "heavy_atoms": 4,
    "sdf_3d": "178\n  -OEChem-10242605423D\n\n  9  8  0     0  0  0  0  0  0999 V2000\n    0.6073   -1.1657    0.0018 O   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7522    1.1306    0.0015 N   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4275    0.0969    0.0013 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0680   -0.0618   -0.0046 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.8768   -0.6906   -0.6101 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.7917    0.0140    1.0288 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.7274    1.0655   -0.4084 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.7667    1.1492    0.0031 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.2815    2.0298    0.0081 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1  4  2  0  0  0  0\n  2  4  1  0  0  0  0\n  2  8  1  0  0  0  0\n  2  9  1  0  0  0  0\n  3  4  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  3  7  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n178\n\n> <PUBCHEM_CONFORMER_RMSD>\n0.4\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n1\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n6\n1 -0.57\n2 -0.8\n3 0.06\n4 0.57\n8 0.37\n9 0.37\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n0\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n2\n1 1 acceptor\n1 2 donor\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n4\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n2\n\n> <PUBCHEM_CONFORMER_ID>\n000000B200000001\n\n> <PUBCHEM_MMFF94_ENERGY>\n4.2976\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n10.148\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n139733 1 9293842481710923235\n20096714 4 18268432510784477049\n21015797 1 8790889574902944993\n5943 1 8603650939448069255\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n71.47\n1.35\n1.13\n0.57\n0.57\n0.03\n0\n-0.1\n0\n-0.4\n0\n0.04\n0\n0\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n122.421\n\n> <PUBCHEM_SHAPE_VOLUME>\n48.5\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n"
  }
]
};
