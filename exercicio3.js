//Agoritmo que mostra uma contagem crescente do 0 ao 30 com incremento de 3
let i = 0;

//exemplo while
console.log("Exemplo WHILE!!!");
while (i <= 30) {
    console.log(`número ${i}`);
    i = i + 3;
}
console.log("FIM!");

//exemplo for
console.log("Exemplo FOR!!!");
for (i = 0; i <= 30; i += 3) {
    console.log(`número ${i}`);
}
console.log("FIM!");

//exemplo Do...While
console.log("Exemplo DO...WHILE");
i = 0;
do {
    console.log(`número ${i}`);
    i = i + 3;
} while (i <= 30);
console.log("FIM!");