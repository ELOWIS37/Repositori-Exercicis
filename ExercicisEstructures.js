var numero = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
var arrayPropagacio = [10, ...numero, 20];
document.write("Numeros ordenats de menor a major: ")
document.write(arrayPropagacio.sort());
