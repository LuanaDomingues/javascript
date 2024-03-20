var idade = 72
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Você é menor de idade, ainda não pode votar!')
}else if (idade < 18 || idade > 65) {
    console.log('O seu voto é opcional')
}else {
    console.log ('Voto OBRIGATÓRIO')
}