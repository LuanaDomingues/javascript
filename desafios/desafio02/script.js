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
        imag.setAttribute('id', 'foto')
        if (sx[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade <= 5){
                imag.setAttribute('src', 'imagens/bebeboy.jpg')
            }else if (idade < 12){
                imag.setAttribute('src', 'imagens/menino.jpg')
            }else if (idade < 25){
                imag.setAttribute('src','imagens/rapaz.jpg')
            }else if(idade < 50){
                imag.setAttribute('src', 'imagens/homem')
            }else{
                imag.setAttribute('src','imagens/idoso.jpg')
            }
        }else if (sx[1].checked){
            gen = 'Mulher'
        }
        resul.innerHTML = `Você é um(a) ${gen} com ${idade} anos`
        resul.appendChild(imag)
    }
}