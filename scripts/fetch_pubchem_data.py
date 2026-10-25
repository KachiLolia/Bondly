import urllib.request
import json
import time
import os

def fetch():
    with open("data/compounds_seed.json", "r", encoding="utf-8") as f:
        compounds = json.load(f)

    os.makedirs("data/sdf_3d", exist_ok=True)
    results = []

    for comp in compounds:
        cid = comp["cid"]
        slug = comp["slug"]
        print(f"Fetching CID {cid} ({comp['name']})...")

        # 1. Fetch properties
        prop_url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/{cid}/property/MolecularFormula,MolecularWeight,CanonicalSMILES,InChIKey,XLogP,TPSA,HBondDonorCount,HBondAcceptorCount,RotatableBondCount,IUPACName,ExactMass,HeavyAtomCount/JSON"
        try:
            req = urllib.request.Request(prop_url, headers={"User-Agent": "BondlyCurator/2.0"})
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                props = data["PropertyTable"]["Properties"][0]
        except Exception as e:
            print(f"  Warning fetching properties for {slug}: {e}")
            props = {}

        # 2. Fetch 3D SDF
        sdf_url = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/{cid}/SDF?record_type=3d"
        sdf_data = ""
        try:
            req = urllib.request.Request(sdf_url, headers={"User-Agent": "BondlyCurator/2.0"})
            with urllib.request.urlopen(req, timeout=12) as resp:
                sdf_data = resp.read().decode("utf-8")
                with open(f"data/sdf_3d/{slug}.sdf", "w", encoding="utf-8") as sdf_f:
                    sdf_f.write(sdf_data)
                print(f"  Saved 3D SDF ({len(sdf_data)} bytes)")
        except Exception as e:
            print(f"  Warning fetching 3D SDF for {slug}: {e}. Trying 2D fallback...")
            try:
                sdf_url_2d = f"https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/{cid}/SDF?record_type=2d"
                req = urllib.request.Request(sdf_url_2d, headers={"User-Agent": "BondlyCurator/2.0"})
                with urllib.request.urlopen(req, timeout=12) as resp:
                    sdf_data = resp.read().decode("utf-8")
                    with open(f"data/sdf_3d/{slug}.sdf", "w", encoding="utf-8") as sdf_f:
                        sdf_f.write(sdf_data)
                    print(f"  Saved 2D SDF as fallback ({len(sdf_data)} bytes)")
            except Exception as e2:
                print(f"  Failed 2D SDF: {e2}")

        merged = dict(comp)
        merged["formula"] = props.get("MolecularFormula", comp.get("formula", ""))
        merged["mol_weight"] = float(props.get("MolecularWeight", 0))
        merged["exact_mass"] = float(props.get("ExactMass", 0)) if "ExactMass" in props else merged["mol_weight"]
        merged["smiles"] = props.get("CanonicalSMILES", "")
        merged["inchikey"] = props.get("InChIKey", "")
        merged["logp"] = float(props.get("XLogP", 0)) if "XLogP" in props else 0.0
        merged["tpsa"] = float(props.get("TPSA", 0)) if "TPSA" in props else 0.0
        merged["hbd"] = int(props.get("HBondDonorCount", 0))
        merged["hba"] = int(props.get("HBondAcceptorCount", 0))
        merged["rotatable_bonds"] = int(props.get("RotatableBondCount", 0))
        merged["heavy_atoms"] = int(props.get("HeavyAtomCount", 0))
        merged["sdf_3d"] = sdf_data
        results.append(merged)
        time.sleep(0.3)

    with open("data/compounds.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print(f"\nAll {len(results)} compounds processed and written to data/compounds.json!")

if __name__ == "__main__":
    fetch()
