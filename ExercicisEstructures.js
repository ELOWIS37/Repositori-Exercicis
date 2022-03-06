var paraules = [" aixecar ", " estudiar ", " pc ", " pilota ", " administratiu ", " aclarir "]
var arrayDeParaules = [];
var acomulador = 0
var contador = 0
for(var i = 0; i < paraules.length; i++) {
  for(var ii = 0; ii < paraules[i].length; ii++){
	  if (paraules[i][ii] == 'a'){
      contador++ 
      if (contador == 2){
        arrayDeParaules[acomulador] = paraules[i];
        acomulador++
      }
    }
  }
  contador = 0
}
document.write("Paraules amb més d'una lletra 'acomulador' -> " + arrayDeParaules)