function clicar() {
    let num = document.getElementById('tab')
    let tabu = document.getElementById('seltab')
    if(num.value.length == '0'){
        window.alert('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        tabu.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tabu.appendChild(item)
        }
    }
}