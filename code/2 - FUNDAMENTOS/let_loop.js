/*
for(let i=0; i<10; i++){

    console.log(i)

}
//let i;
//console.log('i =', i)  //erro de declaração do i

*/

var funcs = []

for(var i=0; i<10; i++ ){
    funcs.push(function(){
        console.log(i)
    })
}


funcs[2]()
funcs[8]()




