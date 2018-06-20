const adjectives = require("./lib/adjectives");
const nouns = require("./lib/nouns");
const random = require("./random");

const numAdjectives = adjectives.length;
const numNouns = nouns.length;

module.exports = function generate() {
  const adjective1 = adjectives[random(0, numAdjectives - 1)];
  const adjective2 = adjectives[random(0, numAdjectives - 1)];
  const noun1 = nouns[random(0, numNouns - 1)];

  return [adjective1, adjective2, noun1, random(100000, 999999)].join("-").replace(/ /g, "-");
};
