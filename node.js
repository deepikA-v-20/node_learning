// var fs = require("fs");
// var data = fs.readFileSync('input.txt','utf8');
// console.log(data);
// let i=1;
// while(i<5){
//     console.log(i);
//     i++;
// }
// var fs = require("fs");
// fs.readFile('input.txt', 'utf8', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());  
// });
// var fs = require("fs");
// fs.open("input.txt", "r+", function(err, dt) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File success");
//         console.log(dt);
//     }
// });
var fs = require("fs");
fs.open("input.txt", "r", function(err, fd) {
    if (err) {
        console.log(err);
        return;
    }

    var buffer = new Buffer(1024);

    fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytesRead) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(bytesRead);
        
console.log(buffer.slice(0,bytesRead).toString());
    

        
    });
});
