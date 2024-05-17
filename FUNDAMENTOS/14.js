//null

let valor // não inicializada

console.log(valor)

valor = null //ausência de valor
console.log(valor)

//console.log(valor.toString()) erro

const produto = {}
console.log(produto.preco) //preço não definido

console.log(produto)
produto.preco = 3.01

console.log(produto)
console.log(!!produto.preco)

produto.preco = undefined // evite atribuir undefine
console.log(!!produto.preco)

console.log(produto)

//delete produto.preco





