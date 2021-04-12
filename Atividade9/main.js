function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.CalculaArea = function() {
        return base*altura;
    }
}


var ret = new Retangulo(10, 4);
document.writeln("Área do retangulo: "+ret.CalculaArea()+ "<br><br><br><br>");


function Conta() {
    var nome;
    var banco;
    var numero;
    var saldo;

    this.getNome = function () {
        return nome;
    };
    this.setNome = function (value) {
        nome = value;
    };

    this.getBanco = function () {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };

    this.getNumero = function () {
        return numero;
    };
    this.setNumero = function (value) {
        numero = value;
    };

    this.getSaldo = function () {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };
}

function Corrente() {
    var saldoEspecial;
    
    this.getEspecial = function () {
        return saldoEspecial;
    };
    this.setEspecial = function (value) {
        saldoEspecial = value;
    };
}

function Poupanca() {
    var juros;
    var dataVencimento;

    this.getJuros = function () {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    this.getDataVencimento = function () {
        return dataVencimento;
    };
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    };
}


Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();


cc = new Corrente();
cc.setNome('aa');
cc.setBanco('itau');
cc.setNumero(111);
cc.setSaldo(111.11);

cc.setEspecial(1000);


document.writeln(cc.getNome());
document.writeln(cc.getBanco());
document.writeln(cc.getNumero());
document.writeln(cc.getSaldo());
document.writeln(cc.getEspecial());

document.writeln("<br><br><br>")

cp = new Poupanca;
cp.setNome('bb');
cp.setBanco('santoandre');
cp.setNumero(222);
cp.setSaldo(222.22);

cp.setJuros(10);
cp.setDataVencimento('23/05/2029');

document.writeln(cp.getNome());
document.writeln(cp.getBanco());
document.writeln(cp.getNumero());
document.writeln(cp.getSaldo());
document.writeln(cp.getJuros());
document.writeln(cp.getDataVencimento());
