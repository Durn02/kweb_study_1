// //동기식 프로그래밍 (code 2.16)
// const fs = require('fs');
// console.log('String 1');
// const data = fs.readFileSync('./file.bin');
// console.log(`Data length: ${data.length} bytes`);
// console.log('String 2');

// //비동기식 프로그래밍 (code 2.17)
// const fs = require('fs');
// console.log('String 1');
// fs.readFile('./file.bin', (err, data) => {
//     if (!err) console.log(`Data length: ${data.length} bytes`);
//     else console.error(err);
// });
// console.log('String 2');


//비동기식 프로그래밍2(더 간편한 비동기식 프로그래밍) (code 2.19)
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const printFileSize = async filename => {
try {
    const data = await readFile(filename);
    console.log(`Data length: ${data.length} bytes`);
} catch (err) {
    console.error(err);
}
};

(async () => {
    console.log('String 1');
    await printFileSize('./file1.bin');
    console.log('String 2');
    printFileSize('./file2.bin');
    console.log('String 3');
})();