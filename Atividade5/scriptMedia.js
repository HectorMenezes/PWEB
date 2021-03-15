var nome = prompt("Insira o nome"), soma = 0;
for(i = 0; i < 3; i++){
    soma += parseFloat(prompt("Insira a nota nº " + (i+1)));
}
alert("O aluno " + nome + " teve a média " + soma/3 );