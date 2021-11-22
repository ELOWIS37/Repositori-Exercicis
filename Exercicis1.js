Math.hypotenusa = Math.hypot || function(x,y){ 
    return Math.sqrt(x*x + y*y)
}
var x = 4, y = 4; document.write(Math.hypot(x, y))