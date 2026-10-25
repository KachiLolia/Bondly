import urllib.request
url = 'https://cdnjs.cloudflare.com/ajax/libs/3Dmol/2.4.2/3Dmol-min.js'
with urllib.request.urlopen(url) as r:
    txt = r.read().decode('utf-8')
    print('Has dollar 3Dmol:', '$3Dmol' in txt)
    print('Occurrences of 3Dmol:', txt.count('3Dmol'))
    print('Exports check:', txt[:150])
