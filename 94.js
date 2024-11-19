function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++   //subistitui this pelo self
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}


new Pessoa
