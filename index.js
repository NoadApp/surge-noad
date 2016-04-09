const surg = require('surg');
const convert = require('./lib/convert');
module.exports = (config, name) => {
  const surge = surg(config);
  return convert(surge, name);
};
