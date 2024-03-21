function carregar() {
    var msg = window.document.getElementById('text')
    var imag = window.document.getElementById('foto')
    var mens = window.document.getElementById('tx')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    mens.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 6 && hora < 12) {
        imag.src = ('imagens/manha.jpg')
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `<p><strong>BOM DIA!</strong></p>`
    }else if (hora >= 12 && hora < 19){
        imag.src = ('imagens/tarde.jpg')
        document.body.style.background = '#7394BF'
        msg.innerHTML = `<p><strong>BOA TARDE!</strong></p>`
    }else if (hora >= 19 && hora < 23){
        imag.src = ('imagens/noite.jpg')
        document.body.style.background = '#010326'
        msg.innerHTML = `<p><strong>BOA NOITE!</strong></p>`
    }else {
        imag.src = ('imagens/madrugada.png')
        document.body.style.background = 'black'
        msg.innerHTML = `<p><strong>VAI DORMIR!</strong></p>`
    }
}