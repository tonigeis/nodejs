for (var i=0; i<10; i++) {
  console.log('hola mundo ' + i);
}

setTimeout(function() {
  console.log('Hola NodeJS 2');
}, 2000);

setTimeout(function() {
  console.log('Hola NodeJS 3');
}, 3000);

setInterval(function() {
  console.log('Hola NodeJS');
}, 1000);
