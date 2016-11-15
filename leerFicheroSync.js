var fs = require("fs");
var operaciones = require('./operaciones.js');

var data = fs.readFileSync("cdcatalog.xml");
//console.log("Synchronous read: " + data.toString());

var parametersArray = process.argv;
var res = 1;

for (var i = 0; i < parametersArray.length; i++) {
    console.log(parametersArray[i]);
}

for (var i = 2; i < parametersArray.length; i++) {
	res = process.argv[i] * res;
}

var resultado = operaciones.multiplicar(process.argv[2], process.argv[3]);
console.log("El resultado de la multiplicación de los dos primeros parámetros es " + resultado);

console.log("El número de parámetros pasados es " + parseInt(parametersArray.length - 2));
console.log("El resultado de la multiplicación de todos los parámetros es " + res);



