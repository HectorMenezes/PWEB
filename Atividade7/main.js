function maior(a, b, c){
    return Math.max(a, b, c);
}

let numeros = new Array(3)

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = (parseFloat(prompt("Insira " + (i+1) + "º")));
}
document.writeln(maior(numeros[0], numeros[1], numeros[2]));