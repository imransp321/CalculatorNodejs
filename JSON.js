//Take in javascript object and convert it to JSON string
const fs = require("fs");

const javascriptObject = {
  title: "Node js",
  author: "Imran",
  target: "Australia"
};

console.log(
  "Converting JavaScript Object to JSON string :" +
    JSON.stringify(javascriptObject)
);

// fs.writeFile("JSONFile.txt", JSON.stringify(javascriptObject), function(
//   err,
//   data
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success!");
//   }
// });

// fs.readFile("JSONFile.txt", function(err, data) {
//   var test = JSON.parse(data);
//   console.log(test.author, test.target);
// });

//Steps to edit the JSON File
//1. Read the JSON File using readFileAsync
//2. Convert the JSON string to Javascript object using JSON.parse
//3. Change/Edit the required object data
//4. Convert the JavaScript object to JSON string using JSON.stringify
//5. Write the JSON string file using writeFileAsync

const databuffer = fs.readFileSync("JSONFile.json").toString();
const info = JSON.parse(databuffer);
info.author = "Testing";

const objtostring = JSON.stringify(info);
fs.writeFileSync("JSONFile.json", objtostring);
