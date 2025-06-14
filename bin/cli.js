#!/usr/bin/env node
const { Command } = require('commander');
const portScanner = require('../lib/portScanner');
const tlsChecker = require('../lib/tlsChecker');
const tips = require('../lib/hardeningTips');

const program = new Command();

program
  .name('netsec-analyzer')
  .description('Network Security Scanner & Hardening Suggestions')
  .version('1.0.0');

program
  .command('scan <host>')
  .description('Scan ports and check TLS security')
  .action(async (host) => {
    await portScanner(host);
    await tlsChecker(host);
    tips();
  });

program.parse();
