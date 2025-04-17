//algoritmo que pergunta ao usuário um número e mostre uma contagem até esse valor
let i = 1;

//exemplo while
let numero = parseInt(prompt("Digite um número interio positivo aleatório!"));
alert("Veja agora no console os resultados!")
console.log("Exemplo WHILE!!!");
while (i <= numero) {
    console.log(`número ${i}`);
    i = i + 1;
}
console.log("FIM!");

//exemplo for
console.log("Exemplo FOR!!!");
for (i = 1; i <= numero; i++) {
    console.log(`número ${i}`);
}
console.log("FIM!");

//exemplo Do...While
console.log("Exemplo DO...WHILE");
i = 1;
do {
    console.log(`número ${i}`);
    i = i + 1;
} while (i <= numero);
console.log("FIM!");
