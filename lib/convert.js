'use strict';
module.exports = (surge, name) => {
  const config = {
    rules: [],
    ips: [],
    name: name
  };
  for (let rule of surge.Rule) {
    if (rule.policy != 'REJECT') continue;
    switch (rule.type) {
      case 'DOMAIN':
      case 'DOMAIN-SUFFIX':
        config.rules.push(`${rule.value}`);
        break;
      case 'DOMAIN-KEYWORD':
        config.rules.push(`.*${rule.value}.*\.`);
        break;
      case 'IP-CIDR':
        config.ips.push(rule.value);
        break;
    }
  }
  return JSON.stringify(config);
};
