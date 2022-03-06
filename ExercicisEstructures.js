var numero = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
document.write("Numeros ordenats de menor a major: ")
document.write(numero.sort());