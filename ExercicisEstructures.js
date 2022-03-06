var numeros = [10, 20, 30, 40, 40, 50];

var set = (numeros) => {
    return [... new Set(numeros)];
}

console.log(set(numeros)); 