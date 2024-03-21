function carregar() {
    var msg = window.document.getElementById('text')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        img.Image = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <=18){
        img.Image = 'tarde.jpg'
        document.body.style.background = '#7394BF'
    }else {
        img.document.Image = 'noite.jpg'
        document.body.style.background = '#010326'
    }
}