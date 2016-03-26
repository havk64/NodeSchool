var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir,filter, function(err,data){
    if (err)
        return console.error('There was an error:',err)
        data.forEach(function(file){
            console.log(file)
        })
})

/*  ========> The module <=========
 var fs = require('fs');
var path = require('path');

module.exports = function(dir, filter, callback ){

    fs.readdir(dir, function(err,list){
                if(err)
                    return callback(err);
                    
        list = list.filter(function(e){
            return path.extname(e) == '.'+filter;
        })
        callback(null, list);
        
    })

    
}*/