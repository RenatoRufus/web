const prod1 = {}  //objeto {} , array []
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 44.99 
prod1.marca = 'China town ltda'
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla2: 2
        }
    }
}

'{"nome": "Camisa polo", "preco": 79.90 }' //Json
