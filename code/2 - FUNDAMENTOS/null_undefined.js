const a = {name: 'Teste'}
console.log(a)

const b = a //atribuição por referência
b.name = 'Opa'
console.log(a)

let c = 3
let d = c
d++

console.log(d)


let valor
console.log(valor) // variáve não inicializada

//console.log(valor2) // erro

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //Cannot read property 'toString' of null
const produto = {}
console.log(produto.preco) //preco está indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)





