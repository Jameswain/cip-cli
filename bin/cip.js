#!/usr/bin/env node
const { execSync } = require('child_process');

(() => {
  console.log(execSync(`curl cip.cc/${process.argv[2]}`).toString());
})();