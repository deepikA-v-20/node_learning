// const path = require('path'); 
  
// path1 = path.basename('/home/user/bash/index.txt'); 
// console.log(path1) 
  
// // Using the extension parameter 
// path2 = path.basename('/home/user/bash/index.txt', '.txt'); 
// console.log(path2)
// const path = require('path'); 
  
// path1 = path.basename('C:\\users\\bash\\index.html'); 
// // __dirname
// console.log(`path dir :${path.dirname(__dirname)} dir ${path.__filename}`); 
  
// // Using the extension parameter 
// path2 = path.basename('C:\\users\\bash\\index.html', '.html'); 
// console.log(path2) 
const path = require('path');

let pathlist = [
    'C:\\users\\bash\\index.html',
    'C:\\users\\bash\\index.js',
    'C:\\users\\bash\\consta.js',
    'C:\\users\\bash\\wel.js',
    'C:\\users\\bash\\index.html',
    'C:\\users\\bash\\index.html'
];

pathlist.forEach(element => {
    if (path.extname(element) === '.js') {
        console.log(element);
    }
});
