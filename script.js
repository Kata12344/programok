function writeh(){
    var checkRadio = document.querySelector('input[name="radiob"]:checked');
    
    if(checkRadio != null) {
        document.getElementById("varoski").innerHTML = checkRadio.value;
    }
    else {
        document.getElementById("varoski").innerHTML = "Nem lett kiválasztva város";
    }
}

function writekb(){
    var checkRadio = document.querySelector('input[name="radiobk"]:checked');
    
    if(checkRadio != null) {
        document.getElementById("helyzinki").innerHTML = checkRadio.value;
    }
    else {
        document.getElementById("helyzinki").innerHTML = "Nem lett kiválasztva város";
    }
}

function writei(){
    var checkRadio = document.querySelector('input[name="radiobt"]:checked');
    
    if(checkRadio != null) {
        document.getElementById("idopontki").innerHTML = checkRadio.value;
    }
    else {
        document.getElementById("idopontki").innerHTML = "Nem lett kiválasztva város";
    }
}