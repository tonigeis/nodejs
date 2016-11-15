var eventos = require('events');

var EmisorEventos = eventos.EventEmitter; 
var ee = new EmisorEventos(); 
//Se maneja el evento 'datos'
ee.once('datos', function(fecha, msg){ 
   console.log(fecha + msg); 
}); 
setInterval(function(){ 
	//Se emite el evento 'datos'
   ee.emit('datos', Date.now(), "hola"); 
}, 500);