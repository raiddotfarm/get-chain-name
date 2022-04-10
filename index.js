// DATA TAKEN FROM https://chainid.network/chains.json
const fs = require("fs");
module.exports = function get(chainId = 1, getData = false) {
  const chains = fs.readFileSync(`${__dirname}/chains.json`, "utf8");
  const chain = JSON.parse(chains).find((c) => c.chainId === chainId);
  if (getData) {
    return chain;
  }
  return chain.name;
};