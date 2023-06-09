let a = 7
let b = 94

//valores devem ser trocados a = 94 e b=7

//Variáveis antes da troca
console.log("Variável a tem valor...:\n " + a)
console.log("Variável b tem valor...:\n " + b)

//trocando valores
let c = a
a = b
b = c

console.log("Efetuado troca de valores --->\n ")
console.log("Variável a valor trocado...:\n " + a)
console.log("Variável b valor trocado...:\n " + b)

console.log("\n*** conferindo ***")

console.log(a)
console.log(b)

