const tls = require('tls');
module.exports = async function tlsChecker(host) {
  console.log(`Checking TLS config on ${host}...`);
  const socket = tls.connect(443, host, () => {
    const cipher = socket.getCipher();
    console.log(`Cipher: ${cipher.name}, Version: ${cipher.version}`);
    socket.end();
  });
};

