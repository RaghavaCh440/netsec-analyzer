#!/usr/bin/env node

const scanner = require('../lib/scanner');
const target = process.argv[2];

if (!target) {
  console.error('Usage: netsec-analyzer <hostname or IP>');
  process.exit(1);
}

scanner.runScan(target);
