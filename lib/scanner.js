const tls = require('tls');
const net = require('net');
const { exec } = require('child_process');

function scanPorts(host, ports = [22, 80, 443]) {
  ports.forEach((port) => {
    const socket = new net.Socket();
    socket.setTimeout(2000);
    socket.on('connect', () => {
      console.log(`Port ${port} is open on ${host}`);
      socket.destroy();
    });
    socket.on('timeout', () => socket.destroy());
    socket.on('error', () => {});
    socket.connect(port, host);
  });
}

function checkTLS(host) {
  const options = {
    host,
    port: 443,
    rejectUnauthorized: false,
  };

  const socket = tls.connect(options, () => {
    console.log(`TLS connected to ${host}`);
    console.log(`  Protocol: ${socket.getProtocol()}`);
    console.log(`  Cipher:`, socket.getCipher());
    socket.end();
  });

  socket.on('error', (err) => {
    console.error(`TLS check failed: ${err.message}`);
  });
}

function suggestLinuxHardening() {
  console.log('\n🔐 Suggested Linux Security Hardening:');
  console.log('- Use firewalld or ufw to restrict unused ports');
  console.log('- Disable root SSH login');
  console.log('- Use fail2ban to prevent brute-force attacks');
  console.log('- Ensure SSH uses strong ciphers and key exchange methods');
  console.log('- Keep software packages up to date');
}

function runScan(target) {
  console.log(`🔍 Scanning ${target}...\n`);
  scanPorts(target);
  checkTLS(target);
  suggestLinuxHardening();
}

module.exports = {
  runScan,
};
