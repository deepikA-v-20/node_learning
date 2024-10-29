var fs = require("fs");
// var data = fs.readFile("input.txt");

//opening 


fs.open("filesystem/input.txt", 'r', (err, fd) => {
    if (err) {
        console.error('Error opening file:', err);
        return;
    }
    console.log("Success");
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});
//read

fs.readFile("filesystem/input.txt",function(err,data){
    console.log("file read sucessfully");
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
// write
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File written ');
});
//append
fs.appendFile('example.txt', 'Append ', (err) => {
    if (err) throw err;
    console.log('File appended ');
  });
  //delete
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted ');
  });
  