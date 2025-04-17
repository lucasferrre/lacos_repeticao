//algoritmo que mostra uma decreção do 50 até 0 com o decremento de 5 
let i = 50;

//exemplo while
console.log("Exemplo WHILE!!!");
while (i >= 0) {
    console.log(`número ${i}`);
    i = i - 5;
}
console.log("FIM!");

//exemplo for
console.log("Exemplo FOR!!!");
for (i = 50; i >= 0; i -= 5) {
    console.log(`número ${i}`);
}
console.log("FIM!");

//exemplo Do...While
console.log("Exemplo DO...WHILE");
i = 50;
do {
    console.log(`número ${i}`);
    i = i - 5;
} while (i >= 0);
console.log("FIM!");
