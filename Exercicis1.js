function myRound(num, dec){
    var exp = Math.pow(10, dec || 1);
    return parseInt(num * exp, 10) / exp;
}
//suma
function suma(a, b){
    return a+b;
}
let resultat1 = suma(1.234, 5.678);
console.log('Suma = ', myRound(resultat1, 1));

//resta
function resta(a, b){
    return a-b;
}
let resultat2 = resta(1.234, 5.678);
console.log('Resta = ', myRound(resultat2, 1));

//divisió
function divisio(a, b){
    return a/b;
}
let resultat3 = divisio(1.234, 5.678);
console.log('Divisió = ', myRound(resultat3, 1));

//multiplicació
function mult(a, b){
    return a*b;
}
let resultat4 = mult(1.234, 5.678);
console.log('Multiplicació = ', myRound(resultat4, 1));
