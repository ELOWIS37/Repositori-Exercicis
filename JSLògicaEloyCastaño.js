var numeros = 0
var m3 = 1
var m5 = 1
do{
    if (m3 % 3 == 0){
    m3 = m3 + numeros
    console.log(numeros)
    }
    numeros++
}while (numeros <= 1000)

do{
    if (m5 % 5 == 0){
    m5 = m5 + numeros
    console.log(numeros)
    }
    numeros++
}while (numeros <= 1000)