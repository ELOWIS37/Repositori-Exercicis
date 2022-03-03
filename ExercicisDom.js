function cambiarLletra() {
    var llista1 = document.getElementsByClassName("lista")
    var llista2 = llista1[0].children
    for (let i = 0; i < llista2.length; i++){
    var text = llista2[i].innerHTML.slice(1);
    llista2[i].innerHTML = llista2[i].innerHTML.charAt(0).fontsize(25) + text;
    }
}