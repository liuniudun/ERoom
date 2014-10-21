var ansi = require('ansi');
var cursor = ansi(process.stdout);
cursor
    .fg.green()
    .write('fuck ')
    .fg.reset()
    .write('\n');