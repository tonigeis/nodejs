var http = require("http");

var numVisitas = 1;

var server = http.createServer(function (peticion, respuesta){
   if(peticion.url=='/index.html' || peticion.url=='/'){
	respuesta.end("Hola DesarrolloWeb.com - " + numVisitas + " veces. La IP de la petición es " + peticion.connection.remoteAddress);
    numVisitas++;
   }	
   
});

server.listen(3000, function(){
   console.log("tu servidor está listo en " + this.address().port);
});