function funcio(str){
  var count = str.match(/[aeiou]/gi).length
  return count;
}
let text = 'Hola'
let Nvocals = funcio(text)
console.log('El numero de vocals és -> ' + Nvocals)