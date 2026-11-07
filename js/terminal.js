// Cyber Terminal Simulator for BasharSec Academy
class CyberTerminal {
  constructor() {
    this.history = [];
    this.historyIndex = -1;
  }

  execute(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return '';
    const parts = cmd.split(' ');
    const base = parts[0].toLowerCase();

    // Clear
    if (base === 'clear' || base === 'cls') {
      return '__CLEAR__';
    }

    // Help
    if (base === 'help' || base === '?') {
      return `
<span class="cmd-cyan">=== BasharSec Academy Command Simulation Engine ===</span>
Available diagnostic & security tools:
• <span class="cmd-green">ping [ip/host]</span>             : Test ICMP Layer 3 reachability
• <span class="cmd-green">traceroute [ip]</span>          : Trace Layer 3 packet hops
• <span class="cmd-green">netstat -ano</span>             : List active TCP/UDP ports & socket states
• <span class="cmd-green">arp -a</span>                   : Display Layer 2 ARP resolution table
• <span class="cmd-green">nslookup [domain]</span>        : Query DNS nameserver records
• <span class="cmd-green">ipconfig /all</span>           : Display full local network interfaces
• <span class="cmd-green">iptables -L -v -n</span>       : Inspect perimeter firewall chain rules
• <span class="cmd-green">suricata-check --status</span>  : Audit Suricata NIDS sensor operational state
• <span class="cmd-green">block-ip [ip]</span>             : Add suspect IP to immediate perimeter blacklist
• <span class="cmd-green">Get-Process</span>              : Audit active Windows process execution tree
• <span class="cmd-green">Get-ADDomainController</span>   : Audit Active Directory DC attributes
• <span class="cmd-green">klist</span>                    : Dump cached Kerberos TGT & TGS tickets
• <span class="cmd-green">cat /var/log/auth.log</span>    : Review Linux authentication failure streams
• <span class="cmd-green">sha256sum [file]</span>         : Calculate cryptographic SHA-256 integrity hash
• <span class="cmd-green">vssadmin list shadows</span>    : Verify Windows Volume Shadow Copies status
• <span class="cmd-green">mitre-lookup [T-ID]</span>      : Search MITRE ATT&CK framework technique specs
• <span class="cmd-green">splunk-search [query]</span>   : Run simulated Splunk SPL search query
• <span class="cmd-green">osint-lookup [ip/hash]</span>   : Enrich IOC via VirusTotal & AbuseIPDB feeds
• <span class="cmd-green">generate-incident-report</span> : Compile formal executive incident brief
• <span class="cmd-green">clear</span>                    : Clear terminal screen buffer
      `;
    }

    // Ping
    if (base === 'ping') {
      const target = parts[1] || '10.0.0.5';
      return `
PING ${target} (${target}) 56(84) bytes of data.
64 bytes from ${target}: icmp_seq=1 ttl=64 time=0.421 ms
64 bytes from ${target}: icmp_seq=2 ttl=64 time=0.388 ms
64 bytes from ${target}: icmp_seq=3 ttl=64 time=0.410 ms
64 bytes from ${target}: icmp_seq=4 ttl=64 time=0.395 ms

--- ${target} ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 0.388/0.403/0.421/0.013 ms
<span class="cmd-green">[✓] Host is UP and actively responding on Layer 3 (ICMP Echo Reply).</span>
      `;
    }

    // Traceroute
    if (base === 'traceroute' || base === 'tracert') {
      const target = parts[1] || '8.8.8.8';
      return `
traceroute to ${target} (${target}), 30 hops max, 60 byte packets
 1  192.168.1.1 (Gateway.corp.local)  1.120 ms  1.082 ms  1.045 ms
 2  10.200.0.1 (Edge-Firewall-PaloAlto)  2.410 ms  2.380 ms  2.320 ms
 3  185.190.40.1 (ISP-Core-Router)  8.120 ms  8.090 ms  8.050 ms
 4  72.14.215.80 (Global-Fiber-Backbone)  14.220 ms  14.190 ms  14.150 ms
 5  ${target} (${target})  18.450 ms  18.410 ms  18.380 ms
<span class="cmd-green">[✓] Trace complete. 5 Layer-3 hops traversed with optimal latency.</span>
      `;
    }

    // Netstat
    if (base === 'netstat' || cmd.includes('netstat')) {
      return `
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      842/sshd
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      1024/nginx
tcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN      1024/nginx
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN      1420/mysqld
tcp        0      0 192.168.1.45:51204      192.168.1.10:445        ESTABLISHED 4812/powershell
tcp        0      0 192.168.1.45:51980      185.220.101.5:443       ESTABLISHED 3210/unknown.exe
<span class="cmd-yellow">[!] WARNING: Found socket connected to external IP 185.220.101.5:443 under suspect PID 3210!</span>
      `;
    }

    // ARP
    if (base === 'arp' || cmd.includes('arp')) {
      return `
Interface: 192.168.1.45 --- 0x12
  Internet Address      Physical Address      Type
  192.168.1.1           00-50-56-f8-11-22     dynamic (Default Gateway)
  192.168.1.10          00-50-56-f8-44-aa     dynamic (Domain Controller)
  192.168.1.88          00-50-56-f8-11-22     dynamic (SUSPECT DUPLICATE MAC)
<span class="cmd-red">[!] CRITICAL: Host 192.168.1.88 claims identical MAC to Gateway 192.168.1.1! Active ARP Poisoning detected!</span>
      `;
    }

    // Nslookup
    if (base === 'nslookup') {
      const dom = parts[1] || 'malicious-c2-domain.com';
      return `
Server:         10.10.20.5
Address:        10.10.20.5#53

Non-authoritative answer:
Name:   ${dom}
Address: 185.220.101.5
TXT:    "v=spf1 -all | payload_chunk=e3b0c44298fc1c149afbf4c8996fb924"
<span class="cmd-yellow">[!] DNS Record resolved to foreign bulletproof host IP 185.220.101.5 with Base64 payload!</span>
      `;
    }

    // Ipconfig
    if (base === 'ipconfig') {
      return `
Windows IP Configuration
   Host Name . . . . . . . . . . . . : BASHARSEC-PC01
   Primary Dns Suffix  . . . . . . . : contoso.local
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No

Ethernet adapter Corporate-LAN:
   Connection-specific DNS Suffix  . : contoso.local
   IPv4 Address. . . . . . . . . . . : 192.168.1.45
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
   DHCP Server . . . . . . . . . . . : 192.168.1.10
   DNS Servers . . . . . . . . . . . : 10.10.20.5
      `;
    }

    // iptables
    if (base === 'iptables') {
      return `
Chain INPUT (policy DROP 124 packets, 7440 bytes)
 pkts bytes target     prot opt in     out     source               destination
 845K  120M ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0
 412K   58M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:443 state NEW,ESTABLISHED
 120K   18M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80 state NEW,ESTABLISHED
 4810  280K DROP       all  --  *      *       185.220.101.5        0.0.0.0/0            /* BLACKLISTED C2 */
 8140  480K DROP       all  --  *      *       203.0.113.55         0.0.0.0/0            /* THREAT INTEL BLOCK */
      `;
    }

    // Suricata check
    if (base === 'suricata-check') {
      return `
Suricata 7.0.2-RELEASE Engine Status:
• Operational Mode: INLINE (IPS Mode with AF_PACKET)
• Total Rules Loaded: 48,219 rules (Emerging Threats Pro & BasharSec Custom)
• Memory Usage: 1.42 GB / 8.00 GB
• Packet Drop Rate: 0.0001%
• Active Alerts Last Hour: 14 alerts (2 Critical, 5 High, 7 Info)
<span class="cmd-green">[✓] Suricata IDS/IPS daemon is running optimally.</span>
      `;
    }

    // Block IP
    if (base === 'block-ip') {
      const ip = parts[1] || '203.0.113.55';
      return `
<span class="cmd-green">[+] Executing automated firewall perimeter quarantine:</span>
• Calling Palo Alto REST API: POST /api/?type=config&action=set&xpath=/config/devices/entry/vsys/entry/rulebase/security/rules/entry[@name='Block-Immediate-Threats']
• Added ${ip}/32 to Global Drop Table.
• Flushing active TCP state tables for ${ip}...
<span class="cmd-green">[✓] SUCCESS: IP ${ip} is now permanently blocked on all edge boundaries.</span>
      `;
    }

    // Get-Process
    if (cmd.includes('get-process')) {
      return `
Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id ProcessName
-------  ------    -----      -----     ------     -- -----------
    480      28    45120      62180      82.41   4812 powershell  <-- High CPU / Suspicious Execution
    210      14    12840      19200       1.20   1044 explorer
    890      52    84120     110240       4.10   2890 WINWORD
    120       8     4100       6200       0.05    684 lsass
<span class="cmd-yellow">[!] Flagged PID 4812 (powershell) consuming 82% CPU running base64 encoded payload.</span>
      `;
    }

    // Get-ItemProperty Run
    if (cmd.includes('get-itemproperty')) {
      return `
Hive: HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run

Name                 Type       Data
----                 ----       ----
SecurityHealthSys    REG_SZ     %windir%\\system32\\SecurityHealthSystray.exe
WindowsUpdaterSvc    REG_SZ     C:\\Users\\Public\\svchost.exe -persistence
<span class="cmd-red">[!] THREAT DETECTED: 'WindowsUpdaterSvc' points to rogue binary C:\\Users\\Public\\svchost.exe!</span>
      `;
    }

    // Get-ADDomainController
    if (cmd.includes('get-addomaincontroller')) {
      return `
DomainController  : DC01.contoso.local
Forest            : contoso.local
Domain            : contoso.local
IPAddress         : 192.168.1.10
OperatingSystem   : Windows Server 2022 Datacenter
FSMO Roles        : {SchemaMaster, DomainNamingMaster, PdcRole, RidMaster, InfrastructureMaster}
Kerberos KDCSvc   : Active (Port 88)
LDAPS Port 636    : Secured with TLS 1.3
      `;
    }

    // Get-ADGroupMember Domain Admins
    if (cmd.includes('domain admins')) {
      return `
distinguishedName : CN=Administrator,CN=Users,DC=contoso,DC=local
name              : Administrator
objectClass       : user

distinguishedName : CN=Eng. Bashar,OU=Security,DC=contoso,DC=local
name              : Eng. Bashar
objectClass       : user (SOC Tier 2 Lead)

distinguishedName : CN=svc-hidden-backdoor,CN=Users,DC=contoso,DC=local
name              : svc-hidden-backdoor  <-- [!] ROGUE ACCOUNT DETECTED!
      `;
    }

    // klist
    if (base === 'klist') {
      return `
Current LogonId is 0:0x4e21a
Cached Tickets: (2)

#0> Client: jsmith @ CONTOSO.LOCAL
    Server: krbtgt/CONTOSO.LOCAL @ CONTOSO.LOCAL
    KerbTicket Encryption Type: AES-256-CTS-HMAC-SHA1-96
    Ticket Flags 0x40e10000 -> forwardable renewable initial pre_authent
    Start Time: 11/6/2026 1:00:00 (local)
    End Time:   11/6/2026 11:00:00 (local)

#1> Client: jsmith @ CONTOSO.LOCAL
    Server: MSSQLSvc/sql01.contoso.local:1433 @ CONTOSO.LOCAL
    KerbTicket Encryption Type: RSADSI RC4-HMAC(NT)  <-- [!] WEAK RC4 ENCRYPTION (Kerberoasting)
    Start Time: 11/6/2026 2:05:13 (local)
      `;
    }

    // cat /var/log/auth.log
    if (cmd.includes('auth.log')) {
      return `
Nov 06 02:08:44 basharsec-srv01 sshd[28100]: Failed password for invalid user admin from 198.51.100.24 port 41102 ssh2
Nov 06 02:08:50 basharsec-srv01 sshd[28114]: Failed password for invalid user oracle from 198.51.100.24 port 41108 ssh2
Nov 06 02:09:12 basharsec-srv01 sshd[28200]: Failed password for invalid user test from 198.51.100.24 port 41180 ssh2
Nov 06 02:10:00 basharsec-srv01 sshd[28540]: Accepted password for root from 198.51.100.24 port 41344 ssh2
<span class="cmd-red">[!] ALARM: High-frequency brute force attack culminated in SUCCESSFUL root login!</span>
      `;
    }

    // sha256sum
    if (base === 'sha256sum') {
      const file = parts[1] || 'sample.exe';
      return `
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  ${file}
<span class="cmd-cyan">[i] SHA-256 computed. Querying threat intelligence reputation databases...</span>
      `;
    }

    // vssadmin list shadows
    if (cmd.includes('vssadmin')) {
      return `
vssadmin 1.1 - Volume Shadow Copy Service administrative command-line tool
(C) Copyright 2001-2013 Microsoft Corp.

Contents of shadow copy set ID: {4e9128aa-3810-4821-b841-9210481200aa}
   Contained 1 shadow copies at creation time: 11/5/2026 18:00:00
      Shadow Copy ID: {b81920aa-1920-4100-8812-4819204812bb}
      Original Volume: (C:)\\\\?\\Volume{84128412-0000-0000-0000-100000000000}\\
<span class="cmd-green">[✓] Volume Shadow Copies exist and intact. Ransomware deletion has NOT yet occurred.</span>
      `;
    }

    // mitre-lookup
    if (base === 'mitre-lookup') {
      const tid = (parts[1] || 'T1059').toUpperCase();
      if (tid === 'T1059') {
        return `
MITRE ATT&CK Technique: T1059 - Command and Scripting Interpreter
• Tactic: Execution (TA0002)
• Sub-techniques: T1059.001 (PowerShell), T1059.003 (Windows Command Shell), T1059.004 (Unix Shell)
• Description: Adversaries abuse interpreters to execute arbitrary commands, scripts, or binaries.
• Detection: Monitor process command-line arguments (Sysmon Event 1, PowerShell 4104 Script Block Logging).
        `;
      }
      return `
MITRE ATT&CK Technique: ${tid}
• Tactic: Credential Access / Defense Evasion
• Description: Adversaries dump credentials from OS subsystems (e.g. LSASS memory) to harvest credentials.
• Telemetry: Sysmon Event 10 (ProcessAccess), Defender for Endpoint ASR Rule #92e63a44.
      `;
    }

    // splunk-search
    if (base === 'splunk-search' || cmd.includes('splunk')) {
      return `
Splunk Search Pipeline Output:
----------------------------------------------------------------------
EventCode  User          src_ip           Count   Status
---------  ----          ------           -----   ------
4625       amira.k       185.191.171.42      14   Failed Logon
4625       jsmith        185.191.171.42      12   Failed Logon
4625       svc-backup    185.191.171.42       9   Failed Logon
4625       omar.r        185.191.171.42      13   Failed Logon
----------------------------------------------------------------------
Total Events Evaluated: 4,892 events in 0.18 seconds.
<span class="cmd-yellow">[!] High correlation with Password Spraying heuristic across 4 corporate identities.</span>
      `;
    }

    // osint-lookup
    if (base === 'osint-lookup' || base === 'vt-hash-check') {
      const ioc = parts[1] || '185.220.101.5';
      return `
=== OSINT Threat Intelligence Enrichment for [${ioc}] ===
• AbuseIPDB Confidence Score : 100% MALICIOUS (1,489 reports in last 48 hours)
• Threat Classification     : Tor Exit Node / Cobalt Strike Command-and-Control
• VirusTotal Engines Score   : 64/88 Antivirus Vendors Flagged Malicious
• Geolocation               : Frankfurt, Hessen, Germany (AS9009)
• Hostnames                 : tor-exit-node44.bulletproof-transit.net
<span class="cmd-red">[!] CRITICAL IOC: Hostile external threat infrastructure confirmed. Immediate block recommended.</span>
      `;
    }

    // generate-incident-report
    if (cmd.includes('generate-incident-report')) {
      return `
<span class="cmd-cyan">================================================================================
                    BASHARSEC ACADEMY - FORMAL INCIDENT REPORT
================================================================================</span>
Incident ID        : INC-2026-9921
Lead Investigator  : Eng. Bashar (Lead SOC Tier 2 Analyst)
Date & Time        : 2026-11-06 04:30 UTC
Severity           : HIGH (P2 Corporate Incident)
Affected Asset     : FIN-WORKSTATION-11 (192.168.10.45)
Root Cause         : Spear Phishing Macro Weaponization (Q4_Bonus_Report.docm)

[1] EXECUTIVE SUMMARY:
On 2026-11-06 at 01:58 UTC, an endpoint in Finance executed an encoded PowerShell payload
spawning from Microsoft Word. EDR agents intercepted in-memory injection into explorer.exe.
Host containment was executed in 4 minutes, preventing lateral pivot into Active Directory.

[2] INDICATORS OF COMPROMISE (IOCs):
• File SHA-256 : e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
• C2 Domain    : darkc2-exfil.xyz (IP: 185.220.101.5)
• MITRE Mapping: T1566.001 (Spearphishing), T1059.001 (PowerShell), T1055 (Process Injection)

[3] REMEDIATION & ACTION ITEMS:
1. Revoked credentials and forced immediate password rotation for user amira.k.
2. Injected C2 domain darkc2-exfil.xyz into perimeter firewall and DNS sinkhole.
3. Deployed enterprise-wide ASR rule: Block Office apps from creating child processes.
<span class="cmd-green">[✓] Incident Report Compiled Successfully. Ready for Executive CISO Sign-off.</span>
      `;
    }

    // Default fallback
    return `
Command not found or unrecognized: "${cmd}".
Type '<span class="cmd-green">help</span>' to view all supported diagnostic and threat analysis commands.
    `;
  }
}

const cyberTerm = new CyberTerminal();

// Global helper for running command inside any terminal body
function runSimCommand(cmd, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const promptLine = document.createElement('div');
  promptLine.className = 'term-line input';
  promptLine.innerHTML = `<span class="term-prompt">bashar@soc-terminal:~$</span> <span class="term-typed">${cmd}</span>`;
  container.appendChild(promptLine);

  const res = cyberTerm.execute(cmd);
  if (res === '__CLEAR__') {
    container.innerHTML = '<div class="term-line output">Terminal screen cleared. Ready for commands.</div>';
    return;
  }

  const outputLine = document.createElement('div');
  outputLine.className = 'term-line output';
  outputLine.innerHTML = res;
  container.appendChild(outputLine);

  container.scrollTop = container.scrollHeight;
}
