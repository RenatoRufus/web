const escola = "Cod3r"
const teste = "Título"
 
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log("Teste ".concat(teste))

console.log(escola.replace(3, 'e')) // Cod3r -> Coder
console.log(escola.replace(/\w/g, 'e')) // substitua todas as letras do texto pela letra 'e'

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split('.'))



