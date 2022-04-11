// DATA TAKEN FROM https://chainid.network/chains.json
const chains = require("./chains.json");
module.exports = function get(chainId = 1, getData = false) {
  const chain = chains.find((c) => c.chainId === chainId);
  if (getData) {
    return chain;
  }
  return chain.name;
};
