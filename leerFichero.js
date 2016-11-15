var fs = require("fs");

console.log("hola");
fs.readFile("x.txt", function(error, archivo){
   console.log("archivo");
})
console.log("ya!");