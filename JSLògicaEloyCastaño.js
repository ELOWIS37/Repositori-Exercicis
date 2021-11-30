var text;
var nota = 8;

switch(nota) {
        case 0,1,2,3,4:
            text = "SUSPÈS";
            break;
        case 5:                 
            text = "SUFICIENT";
            break;
        case 6:                 
            text = "BÉ";
            break;    
        case 7,8:         
            text = "NOTABLE";
            break;
        case 9,10:      
            text = "EXCEL·LENT";
            break;
        default:                
            text ="VALOR NO VÀLID";
            break;
}
console.log(text)
