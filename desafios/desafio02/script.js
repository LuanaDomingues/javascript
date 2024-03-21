function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idd')
    var resul = document.getElementById('imagem')
    if(fano.value <= 1900 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sx = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var imag = document.createElement('img')
        if (sx[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade <= 5){
                imag.setAttribute('src', 'imagens/boy.png')
            }else if (idade < 12){
                imag.setAttribute('src', 'imagens/menino.png')
            }else if (idade < 25){
                imag.setAttribute('src','imagens/rapaz.png')
            }else if(idade < 50){
                imag.setAttribute('src', 'imagens/homem.png')
            }else{
                imag.setAttribute('src','imagens/idoso.png')
            }
        }else if (sx[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade <= 5){
                imag.setAttribute('src', 'imagens/girl.png')
            }else if (idade < 12){
                imag.setAttribute('src', 'imagens/menina.png')
            }else if (idade < 25){
                imag.setAttribute('src','imagens/jovem.png')
            }else if(idade < 50){
                imag.setAttribute('src', 'imagens/mulher.png')
            }else{
                imag.setAttribute('src','imagens/idosa.png')
        }
    }
        resul.innerHTML = `<strong>Você é um(a) ${gen} com ${idade} anos</strong>`
        resul.appendChild(imag)
        imag.style.width = '300px'
        imag.style.height = '300px'
        imag.style.marginTop = '20px'
}
}