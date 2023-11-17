"use strict";

var assert = require("assert");
var Encrypter = require("./index.js");



const secretKey = "TEST";
const algorithm = 'aes256';
const saltKeyLength = 32;
const digest = 'hex';

// initialize 
const encrypter = new Encrypter(secretKey, algorithm, saltKeyLength, digest);

const clearText = 'sanjaysikdar.dev'
const encryptedText = encrypter.encrypt(clearText)
const decryptedText = encrypter.decrypt(encryptedText)

//Encrypt
console.log('enc -> ', encryptedText)
// Decrypt, Note: Here you need to provide encrypted value, to decrypt it
console.log('desc -> ', decryptedText)
assert.deepStrictEqual(decryptedText, clearText);


