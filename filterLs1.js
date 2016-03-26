    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], callback)
    
    function callback(err, list){
        list.forEach(callBack);
    }
    
    function callBack(e){
        if (path.extname(e)== '.'+process.argv[3]){
            console.log(e);
        }
    }
    
