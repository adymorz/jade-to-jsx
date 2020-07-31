var compile = require('../index');
var path = require('path');

console.log(compile({
    filename: path.join(process.cwd(), 'test.jade'),
    replacements: {}
}));