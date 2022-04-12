const podeDirigir = true
if(podeDirigir){
    console.log('Pode dirigir')
}

const saldoEmConta = 1
if(!saldoEmConta){
    console.log('Não tem saldo')
}

const boolComString = 'opa ai sim'

// força o valor a ser true ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString)

// negação
console.log('negação', !boolComString)

//negação + forçar a bool
console.log('negação + forçar bool', ! (!!boolComString))