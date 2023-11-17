"use strict";
const crypto = require('crypto');
class Encrypter {
    constructor(secretKey = 'default', algorithm = 'aes256', saltKeyLength = 32, digest = 'hex') {
        this.saltKey = crypto.scryptSync(secretKey, "salt", saltKeyLength);
        this.algorithm = algorithm;
        this.digest = digest;
    }

    encrypt(clearText) {
        const iv = crypto.randomBytes(16);
        try {
            const cipher = crypto.createCipheriv(
                this.algorithm,
                this.saltKey,
                iv
            );
            const encrypted = cipher.update(clearText, "utf8", this.digest);
            return [
                encrypted + cipher.final(this.digest),
                Buffer.from(iv).toString(this.digest),
            ].join("|");
        } catch (error) {
            return error;
        }
    }
    decrypt(encryptedText) {
        try {
            const [encrypted, iv] = encryptedText.split("|");
            if (!iv) throw new Error("IV not found");
            const decipher = crypto.createDecipheriv(
                this.algorithm,
                this.saltKey,
                Buffer.from(iv, this.digest)
            );
            return decipher.update(encrypted, this.digest, "utf8") + decipher.final("utf8");
        } catch (error) {
            return error;
        }
    }
}
module.exports = Encrypter
