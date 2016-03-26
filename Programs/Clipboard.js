var fs = require('fs');
var file = process.argv[2];
var proc = require('child_process').spawn('pbcopy');

fs.readFile(file,'utf8',pbcopy);

function pbcopy(err, data) {
    if(err) throw err;
    console.log(data);
    proc.stdin.write(data);
    proc.stdin.end();
}
