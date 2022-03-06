var numeros = [ 1, 3, 6 ];

Object.keys(numeros).map(function(clau) {
   numeros[clau] = Math.pow(numeros[clau],3);
});

console.log(numeros);