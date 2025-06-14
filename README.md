# netsec-analyzer

[![NPM Downloads](https://img.shields.io/npm/dw/netsec-analyzer)](https://www.npmjs.com/package/netsec-analyzer)
[![Visit npm-stat for more stats](https://img.shields.io/badge/npm--stat-stats-blue)](https://npm-stat.com/charts.html?package=netsec-analyzer)

A CLI tool to scan open ports, evaluate TLS configurations, and recommend Linux hardening practices.



`netsec-analyzer` is a powerful command-line utility designed to assist DevOps engineers, cybersecurity professionals, and system administrators in identifying network vulnerabilities and improving server hardening practices. This tool offers rapid scanning of commonly used ports, audits TLS/SSL configurations for misconfigurations or weak ciphers, and provides actionable security recommendations for strengthening Linux-based server deployments.

## Key Features
- Open Port Scanner
Scans a set of well-known and commonly targeted ports (e.g., 22, 80, 443, 3306, 5432) on the specified host to detect potentially exposed services. This helps you identify unnecessary or misconfigured services that might be vulnerable to attacks.

- TLS/SSL Configuration Inspector
Connects securely to the server via TLS and inspects the encryption suite in use. It reports protocol versions (e.g., TLS 1.2, TLS 1.3) and cipher algorithms (e.g., AES-256-GCM), enabling you to verify if strong encryption is enforced and deprecated standards are avoided.

- Linux Hardening Recommendations
Offers a curated list of best practices for improving the baseline security posture of your Linux server. These include enforcing strong cipher policies, disabling unused services, applying patches, and securing SSH and firewall configurations.

# Installation

Install `netsec-analyzer` globally using NPM:
```
npm install -g netsec-analyzer
```
This makes the `netsec-analyzer` CLI available system-wide.

# Usage
Once installed, simply run the tool against a target host:

```
netsec-analyzer scan <host>
```

### This command will:

- Scan a predefined list of TCP ports on example.com to detect open services.

- Initiate a secure TLS handshake with port 443 to extract cipher suite and protocol version information.

- Output a list of system hardening tips relevant to Linux environments.

## Scanning common ports on example.com...
 - Port 22 is open
 - Port 443 is open

- Checking TLS config on example.com...
- ipher: TLS_AES_256_GCM_SHA384, Version: TLSv1.3

##  Hardening Suggestions:
- Disable deprecated protocols (e.g., TLS 1.0/1.1)
- Enforce strong cipher suites only
- Enable SSH key-based login; disable root login
- Close unused ports using iptables or firewalld
- Apply OS patches and audit user access regularly

## Use Cases

- Audit your Linux servers before production deployment.

- Periodically verify TLS security postures and cipher hygiene.

- Educate junior DevOps/SRE team members on system hardening.

- Integrate into CI/CD pipelines as a security gate.

## Security Considerations
`netsec-analyzer` performs non-intrusive, read-only scans and does not attempt to exploit any vulnerabilities. It is intended solely for authorized internal use and ethical security auditing.

## License

```
MIT License

Copyright (c) 2025 Raghava Chellu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     
copies of the Software, and to permit persons to whom the Software is         
furnished to do so, subject to the following conditions:                      

The above copyright notice and this permission notice shall be included in    
all copies or substantial portions of the Software.                           

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES O
```
