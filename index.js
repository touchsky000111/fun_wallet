const { privateToPublic, keccak256, toChecksumAddress } = require('ethereumjs-util');

const privKey = Buffer.from('9631bfcc149ad4f5b7bf8642f4633cafec4c8ffa0fa3131c1b10f6ca44766271', 'hex');
const pubKey = privateToPublic(privKey);

const emptyPubKey = Buffer.from('');



// Public key (64 bytes, no 0x04 prefix)

// Address
const hash = keccak256(emptyPubKey);
const addressBuffer = hash.slice(-20);
const address = toChecksumAddress('0x' + addressBuffer.toString('hex'));
console.log("Address:", address);
