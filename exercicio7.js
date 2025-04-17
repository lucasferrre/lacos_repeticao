// Algoritmo que lê o valor inicial da contagem, o valor final e o incremento e mostre os valores e a contagem

let valorInicial = parseInt(prompt("Digite o valor inicial da contagem!"));
let valorFinal = parseInt(prompt("Digite o valor final da contagem!"));
let incremento = parseInt(prompt("Digite o valor do incremento!"));

alert(`Primeiro Valor: ${valorInicial}`)
alert(`Último Valor: ${valorFinal}`)
alert(`Incremento: ${incremento}`)
//utilizando o while pois é mais facil de trabalhar com as variaveis
console.log("Exemplo WHILE!!!");
if (valorInicial <= valorFinal) {
    while (valorInicial <= valorFinal) {
        console.log(`número ${valorInicial}`);
        valorInicial = valorInicial + incremento;
    }
} else {
    while (valorInicial >= valorFinal) {
        console.log(`número ${valorInicial}`);
        valorInicial = valorInicial - incremento;
    }
}
console.log("FIM!");