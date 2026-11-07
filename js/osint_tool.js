// OSINT / IOC Reputation Simulator for BasharSec Academy
const mockThreatIntelData = {
  "185.220.101.5": {
    type: "ip",
    verdict: "MALICIOUS",
    abuseConfidence: 100,
    vtDetections: "64/88 vendors",
    country: "Germany",
    isp: "Tor Exit Node Relay",
    threatCategory: "Cobalt Strike C2 / Botnet Infrastructure",
    reportsCount: 1489
  },
  "203.0.113.55": {
    type: "ip",
    verdict: "SUSPICIOUS",
    abuseConfidence: 78,
    vtDetections: "38/88 vendors",
    country: "Russian Federation",
    isp: "Bulletproof Hosting Services",
    threatCategory: "Phishing Proxy / Credential Harvester",
    reportsCount: 412
  },
  "8.8.8.8": {
    type: "ip",
    verdict: "CLEAN",
    abuseConfidence: 0,
    vtDetections: "0/88 vendors",
    country: "United States",
    isp: "Google LLC",
    threatCategory: "Public DNS Resolver",
    reportsCount: 0
  },
  "evil-domain.xyz": {
    type: "domain",
    verdict: "MALICIOUS",
    abuseConfidence: 95,
    vtDetections: "58/88 vendors",
    threatCategory: "DNS Exfiltration & C2 Beaconing",
    registrar: "NameCheap (Privacy Guard)",
    creationDate: "4 days ago"
  },
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855": {
    type: "hash",
    verdict: "MALICIOUS",
    abuseConfidence: 100,
    vtDetections: "69/72 vendors",
    threatCategory: "Trojan.Win32.CobaltStrike / Emotet Dropper",
    fileType: "Win32 EXE",
    firstSeen: "2026-10-15"
  }
};

function lookupIOC(inputRaw) {
  const input = inputRaw.trim().toLowerCase();
  if (!input) return null;

  // Exact match
  if (mockThreatIntelData[input]) {
    return { input, ...mockThreatIntelData[input] };
  }

  // Fallback heuristic simulation
  if (input.includes('evil') || input.includes('malicious') || input.includes('c2') || input.includes('hack')) {
    return {
      input,
      type: "generic",
      verdict: "MALICIOUS",
      abuseConfidence: 90,
      vtDetections: "52/88 vendors",
      threatCategory: "Confirmed Adversary Infrastructure",
      country: "Unknown / Bulletproof Host",
      reportsCount: 650
    };
  }

  // Default clean simulation
  return {
    input,
    type: "generic",
    verdict: "CLEAN / UNKNOWN",
    abuseConfidence: 0,
    vtDetections: "0/88 vendors",
    threatCategory: "No threat intelligence record found or benign",
    country: "Global",
    reportsCount: 0
  };
}
