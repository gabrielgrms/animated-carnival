

function compare(){
    var first = prompt("Força");
    var second = prompt("Armadura");
    var gg = document.getElementById("resultado");
    if(first > second){
        gg.innerHTML = "First";
        console.log("first");
    }
    else{
        console.log("second");
    }
}
