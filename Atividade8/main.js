var Aluno1 = {
    Nome: 'AAAAAAA',
    RA: 11111
}

document.writeln("Nome do Aluno: "+ Aluno1.Nome + "<br>");
document.writeln("RA: " + Aluno1.RA);
document.writeln("<br><br>")

function ClasseAluno(Nome, RA) {
    this.Nome = Nome;
    this.RA = RA;
}

var Aluno2 = new ClasseAluno("BBBBBBB", 222222)
document.writeln("Nome do Aluno: "+ Aluno2.Nome + "<br>");
document.writeln("RA: " + Aluno2.RA);
document.writeln("<br><br>")

var Aluno3 = new Object;
Aluno3.Nome = "CCCCCCC";
Aluno3.RA = "3333333";

document.writeln("Nome do Aluno: "+ Aluno3.Nome + "<br>");
document.writeln("RA: " + Aluno3.RA);
