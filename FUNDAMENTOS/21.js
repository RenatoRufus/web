//notação ponto

console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome ='Bola'
obj1.tipo = 'Bola2'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome,obj1.tipo)


function Obj(nome){
    this.nome = nome //público
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())
obj3.exec()

