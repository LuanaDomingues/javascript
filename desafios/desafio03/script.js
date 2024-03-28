function aoClicar(){
    var n1 = document.getElementById('ini')
    var n2 = document.getElementById('fim')
    var salto = document.getElementById('passo')
    var res = document.getElementById('text')

    if(n1.value.length == 0 || n2.value.length == 0 || salto.value.length == 0) {
        res.innerHTML = `Ímpossivel contar!`
    }else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(salto.value)
        if (p <= 0){
            alert('Passo inválido! Vamos considerar o PASSO 1')
            p = 1
        }

        if (i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML +=  `\u{1F3C1}`
    }
}