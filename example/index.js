const noad = require('../');
const fs = require('fs');

const surgeConfig = fs.readFileSync('./surge.conf', 'utf-8');
console.log(noad(surgeConfig, 'noad_test'));
