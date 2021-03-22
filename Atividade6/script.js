function Intervalo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function PPT(user, browser){
    if ((browser) % 3 + 1 == user)
        return "Ganhou";
    else if ((user) % 3 + 1 == browser)
        return "Perdeu";
    else
    return "Empatou";
}

let browser = Intervalo(1, 4);


let user = parseInt(prompt("Insira o numero da sua escolha \n1 - Pedra\n2 - Papel\n3- Tesoura"));

let map = {1: "Pedra", 2: "Papel", 3: "Tesoura"};

document.writeln("Você " + PPT(user, browser) + "! O computador escolheu " + map[browser]);
document.write("<br>");


if(PPT(user, browser) != "Empatou"){
    if( (user == 1 && browser == 2) || (user==2 && browser == 1)) {
        document.writeln("\nPapel cobre pedra");
    }
    if( (user == 2 && browser == 3) || (user==3 && browser == 2)){
        document.writeln("\nTesoura corta papel");
    }
    if( (user == 1 && browser == 3) || (user==3 && browser == 1)){
        document.writeln("\nPedra quebra papel");
    }
}