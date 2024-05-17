// nulo

const a = {name: 'teste'}

console.log(a)
console.log()

const b = a //atribuição por referência

console.log(b)
b.name = 'Opa'
console.log(b)

let c = 3
let d = c

d++

console.log(d)