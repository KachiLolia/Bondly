import json, re

smiles_map = {
    "aspirin": "CC(=O)Oc1ccccc1C(=O)O",
    "paracetamol": "CC(=O)Nc1ccc(O)cc1",
    "ibuprofen": "CC(C)Cc1ccc(C(C)C(=O)O)cc1",
    "ethanol": "CCO",
    "dimethylether": "COC",
    "benzene": "c1ccccc1",
    "morphine": "CN1CCC23C4C1CC5=C2C(=C(C=C5)O)OC3C(C=C4)O",
    "codeine": "COC1=C2C3=C(C=C1)CC4C5C3(CCN4C)C(C=C5)OC2",
    "naloxone": "C=CCN1CCC23C4C1CC5=C2C(=C(C=C5)O)OC3C(=O)CC4(O)",
    "penicillin-g": "CC1(C(N2C(S1)C(C2=O)NC(=O)Cc3ccccc3)C(=O)O)C",
    "amoxicillin": "CC1(C(N2C(S1)C(C2=O)NC(=O)C(c3ccc(cc3)O)N)C(=O)O)C",
    "sulfanilamide": "Nc1ccc(S(=O)(=O)N)cc1",
    "sulfamethoxazole": "Cc1cc(NS(=O)(=O)c2ccc(N)cc2)no1",
    "propranolol": "CC(C)NCC(O)COc1cccc2ccccc12",
    "caffeine": "Cn1cnc2c1c(=O)n(c(=O)n2C)C",
    "acetic-acid": "CC(=O)O",
    "ethyl-acetate": "CCOC(=O)C",
    "acetamide": "CC(=O)N"
}

with open('js/compounds-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace empty smiles with valid smiles for each compound
for slug, smi in smiles_map.items():
    # Find pattern around slug
    pattern = rf'("slug":\s*"{slug}".*?"smiles":\s*)"([^\"]*)"'
    sub_replacement = rf'\g<1>"{smi}"'
    new_content, count = re.subn(pattern, sub_replacement, content, count=1, flags=re.DOTALL)
    if count > 0:
        content = new_content
        print(f"Updated smiles for {slug} -> {smi}")
    else:
        print(f"FAILED to match {slug}")

with open('js/compounds-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done updating smiles in compounds-data.js")
