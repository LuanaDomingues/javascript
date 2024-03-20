var agr = new Date()
//var hora = agr.getHours()
var min = agr.getMinutes()
var hora = 7
console.log(`Agora são exatamente ${hora} horas e ${min} minutos`)
if(hora >= 6 && hora <= 12) {
    console.log ('BOM DIA!')
}else if (hora >= 13 && hora <= 18) {
    console.log ('BOA TARDE!')
}else if (hora >= 19 && hora <= 23) {
    console.log ('BOA NOITE!')
}else {
    console.log ('Já é de MADRUGADA, vai dormir!')
}