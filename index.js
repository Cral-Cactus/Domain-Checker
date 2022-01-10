const Checker = require('./checker');
const keyword = process.argv.slice(2)[0]; // Keywords
const checker = new Checker({ keyword, saveAvailable: true });

checker.check();
