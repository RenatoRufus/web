//Função sem retorno

function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(1, 2)
imprimirSoma(2)
imprimirSoma(2,10,4,4,4,4) //Soma somente 2 e 10 e o restante ignora
imprimirSoma()

//Função com retorno

function soma(a, b =1){
    return a+ b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())


