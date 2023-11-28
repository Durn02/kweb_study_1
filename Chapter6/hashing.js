const util = require('util');
const crypto = require('crypto');
const randomBytes = util.promisify(crypto.randomBytes);

/*//pbkdf2 매개변수 : password, salt, iterations, key-length, algorithm
    salt : 
        pw -(hash)-> cipher 대신
        pw -(salt)-> pw + @ -(hash)-> cipher
*/
const pbkdf2 = util.promisify(crypto.pbkdf2);

// const encrypt = async text => {
//     const ALGO = 'sha512'; // encryption algorithm
//     const KEY_LEN = 64;
//     const digest = await pbkdf2(text, '', 1, KEY_LEN, ALGO);
//     console.log(`${text} | ${digest.toString('base64')}`);
// };

// 개선된 encrypt
const encrypt = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const salt = await randomBytes(32);
    const iter = Math.floor(Math.random() * 20000) + 200000;
    const digest = await pbkdf2(text, salt, iter, KEY_LEN, ALGO);
    console.log(`${text} | ${iter} | ${digest.toString('base64')}`);
};

// sample encryption
(async () => {
    await encrypt('samplepassword')
})();
// avalanche effect
(async () => {
    await encrypt('samplepasswordsamplepasswordsamplepasswordsamplepasswordsample');
    await encrypt('samplepasswordsamplepastwordsamplepasswordsamplepasswordsample');
})();

