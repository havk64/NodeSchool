var fs = require('fs');
var data = process.argv[2];
var proc = require('child_process').spawn('pbcopy');

fs.readFile('data','utf8',pbcopy);

function pbcopy(err, data) {
    //if(err) throw err;
    console.log(data);
    proc.stdin.write(data);
    proc.stdin.end();
}

