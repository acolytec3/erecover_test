const { ecrecover, toBuffer } = require('@ethereumjs/util');


var digestHashInputToTheSigningAlgorithm = '0xee3a667ed717a89d2012240dc28760ab4df39ab6949267aab31cebc4a33ce735';
var v = BigInt(45);
var our_r_and_s = "0x012345678901234567890123456789012345678901234567890123456789012";
var r = toBuffer(our_r_and_s);
var s = toBuffer(our_r_and_s);
var hash = toBuffer(digestHashInputToTheSigningAlgorithm);
var publicKey = ecrecover(hash, v, r, s, BigInt(5));
console.log(publicKey)