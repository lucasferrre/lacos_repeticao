//algoritmo que mostra uma decreção do 10 ao 1

let i = 10;
//exemplo while
console.log("Exemplo WHILE!!!");
while (i >= 1) {
    console.log(`número ${i}`);
    i = i - 1;
}
console.log("FIM!");

//exemplo for
console.log("Exemplo FOR!!!");
for (i = 10; i >= 1; i--) {
    console.log(`número ${i}`);
}

console.log("FIM!");

//exemplo Do...While
console.log("Exemplo DO...WHILE");
i = 10;
do {
    console.log(`número ${i}`);
    i = i - 1;
} while (i >= 1);
console.log("FIM!");