//Open a exisitng file
const fs = require("fs");
const path = require("path");

// fs.open(
//   "C:/Users/HI/Desktop/NodeJs_new/Node_Calculator/Notes.txt",
//   "r",
//   function(err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File opened");
//     }
//   }
// );

// fs.stat("C:/Users/HI/Desktop/NodeJs_new/Node_Calculator/Notes.txt", function(
//   err,
//   data
// ) {
//   console.log(data);
// });

// fs.writeFile("File1.txt", "Testing", function(err, data) {
//   console.log("Data written in to the file successfully!");
// });

// fs.readFile("File1.txt", function(err, data) {
//   console.log(data.toString());
// });

// fs.rename("File1.txt", "File2.txt", function(err, data) {
//   console.log("Renamed Successfully!");
// });

// fs.appendFile("File2.txt", "Welcome Node js", function(err, data) {
//   console.log("Successfully Appended!");
// });

fs.unlink("File2.txt", function(err, data) {
  console.log("File Deleted successfully!");
});
