let fs = require('fs');

let data = fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFileSync('writeMe.txt', function(err, data){
        console.log(data);
    })
});
console.log('test')
