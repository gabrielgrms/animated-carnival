

function compare(){
    var first = prompt("Força");
    var second = prompt("Armadura");
    var gg = document.getElementById("resultado");
    if(first > second){
        gg.innerHTML = "FIRST";
        console.log("first");
    }
    else{
        gg.innerHTML = "SECOND";
        console.log("second");
    }
}

function fight(){
    var char = "Lutador 1";
    var char2 = "Lutador 2";
    var forca1 = Math.ceil(Math.random()*6);
    var forca2 = Math.ceil(Math.random()*6);
    var armor1 = Math.ceil(Math.random()*6);
    var armor2 = Math.ceil(Math.random()*6);
    var HP1 = armor1 * 5;
    var HP2 = armor2 * 5;
    var Currenthp1 = HP1;
    var Currenthp2 = HP2;

    while(Currenthp1>0 && Currenthp2>0){
        Currenthp1 -= forca2*Math.random(1,6) - armor1*Math.random(1,6);
        Currenthp2 -= forca1*Math.random(1,6) - armor2*Math.random(1,6);
    }
    if(HP1 > 0){
        console.log("Nome: ", char, "\n", "Força: ", forca1, "\n", "Armadura: ", armor1, "\n", "HP Inicial: ", HP1, "\n", "HP Final: " ,Currenthp1, "\n", "Nome: ", char2, "\n", "Força: ", forca2, "\n", "Armadura: ", armor2, "\n", "HP: ", Currenthp2, "\n");
        console.log("Vencedor: ", char);
    }
    else{
        console.log("Nome: ", char, "\n", "Força: ", forca1, "\n", "Armadura: ", armor1, "\n", "HP Inicial: ", HP2, "\n", "HP Final: " ,Currenthp1, "\n", "Nome: ", char2, "\n", "Força: ", forca2, "\n", "Armadura: ", armor2, "\n", "HP: ", Currenthp2, "\n");
        console.log("Vencedor: ", char);
    }

}
