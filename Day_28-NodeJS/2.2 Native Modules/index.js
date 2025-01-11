const fs = require("fs");
// fs.writeFile("message.txt","Hello Node", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved !");
// });

// import { readFile } from 'node:fs';

fs.readFile('./message.txt', "Utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});