
var fs = require('fs');

try {
  const data = fs.openSync('input.txt', 'r');
  console.log('File opened ');
  fs.closeSync(data);
} 
catch (err) {
  console.error(err);
}


try {
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  

try {
    fs.writeFileSync('example.txt', 'welcome!');
    console.log('File written ');
  } catch (err) {
    console.error(err);
  }
  


try {
    fs.appendFileSync('example.txt', 'Append ');
    console.log('File appended ');
  } catch (err) {
    console.error(err);
  }
  


try {
    fs.unlinkSync('example.txt');
    console.log('File deleted ');
  } catch (err) {
    console.error(err);
  }
  