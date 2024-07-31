function boaNota(nota){
    if(nota >= 7){
        console.log('Aprovado com' + nota)
    }
}


boaNota(8.1)
boaNota(2)
boaNota(7)

function Verdade(valor){
    if(valor) {
        console.log('É verdade...' + valor)
    }
}


Verdade()
Verdade(null)
Verdade(undefined)
Verdade(NaN)
Verdade('')
Verdade(0)
Verdade(-1)
Verdade(' ')
Verdade('?')
Verdade([])
Verdade([1,2])
Verdade({})//objeto





