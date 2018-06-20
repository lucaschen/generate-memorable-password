const crypto = require("crypto");

const FOUR_BYTES = 256 ** 4; // 32-bit, or four bytes

module.exports = function random(min, max) {
  if (max <= min) throw new Error("max must be greater than min!");
  const diff = max - min;
  if (diff > FOUR_BYTES) throw new Error(`difference must be less than ${FOUR_BYTES}!`);
  const randomBytes = crypto.randomBytes(4);
  const randomNumber = randomBytes.readUInt32BE(0);

  return min + Math.floor(randomNumber / FOUR_BYTES * (diff + 1));
};
