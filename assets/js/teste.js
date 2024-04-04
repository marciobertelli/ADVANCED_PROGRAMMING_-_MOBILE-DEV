console.log('calcular...')

//manipulação do dom

// let   = local
// var   = global
// const = constante 
// const qtde = document.querySelector('#qtde').value

document.querySelector("#troco").addEventListener("change", calcular)
document.querySelector("#tipo1").addEventListener("change", calcular)
document.querySelector("#tipo2").addEventListener("change", calcular)

function calcular(){
    const qtde = document.querySelector('#troco').value
    let preco = qtde * 1000

    const tipo1 = document.querySelector("#tipo1").value
    const tipo2 = document.querySelector("#tipo2").value
    console.log(tipo1)
    console.log(tipo2)

    if (tipo1 > tipo2) preco *= tipo1 
    if (tipo1 < tipo2) preco *= tipo2

    document.querySelector("#v_final").innerText = "R$" + preco.toFixed(2)

    console.log(preco)
}
