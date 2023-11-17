# node-encrypter

npm simple module to easily encrypt and decrypt strings & passwords. 


GitHub Repo: [https://github.com/sannjayy/node-encrypter](https://github.com/sannjayy/node-encrypter)

This module does not have any third-party dependencies.

## Install using npm / yarn

``` bash
npm install node-encrypter

yarn add node-encrypter
```

## Example usage encrypt and decrypt


```javascript
var Encrypter = require('node-encrypter');

const secretKey = "<YOUR-SECRET-KEY>";
const encrypter = new Encrypter(secretKey);

const clearText = 'sanjaysikdar.dev';
const encryptedText = encrypter.encrypt(clearText);

const decryptedText = encrypter.decrypt(encryptedText);
```



## Advanced options
```javascript
const secretKey = "<YOUR-SECRET-KEY>";
const algorithm = 'aes256';
const saltKeyLength = 32;
const digest = 'hex';

const encrypter = new Encrypter(secretKey, algorithm, saltKeyLength, digest);
```

- `secretKey` - secret string key used for encryption.
- `algorithm` - cipher Algorithm (default: aes256).
- `saltKeyLength` - length of salt key  (default: 32).
- `digest` - message digest algorithm  (default: hex).

---
[![](https://img.shields.io/github/followers/sannjayy?style=social)](https://github.com/sannjayy)  
Developed by *Sanjay Sikdar*.   
- 📫 me@sanjaysikdar.dev


## License

The Node Encrypter is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).



