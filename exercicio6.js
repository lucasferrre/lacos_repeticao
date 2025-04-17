//algoritmo que faz uma contagem descrece1, marcandoos números que forem divisíveis por 4,
let i = 30

//exemplo while
console.log("Exemplo WHILE!!!");
while (i >= 1) {
    if (i % 4 == 0) {
        console.log(`Número [${i}]`);
    } else {
        console.log(`Número ${i}`);
    }
    i = i - 1;
}
console.log("FIM!");

//exemplo for
console.log("Exemplo FOR!!!");
for (i = 30; i >= 1; i--) {
    if (i % 4 == 0) {
        console.log(`Número [${i}]`);
    } else {
        console.log(`Número ${i}`);
    }
}
console.log("FIM!");

//exemplo Do...While
console.log("Exemplo DO...WHILE");
i = 30;
do {
    if (i % 4 == 0) {
        console.log(`Número [${i}]`);
    } else {
        console.log(`Número ${i}`);
    }
    i = i - 1;
} while (i >= 1);
console.log("FIM!");

