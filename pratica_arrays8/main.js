// const notas = [7 ,10 ,5 ,8 ,3 ,9 ,6 ,1 ]

// console.log(notas)

// console.log(notas.sort((a,b) => a -b))

// console.log(notas.sort((a,b) => b -a))

// for(let i = 0; i < notas.length; i ++) {
//     if(notas[i] > 7) {
//         console.log(notas[i])
//     }

//     if(notas[i] < 6) { 
//         console.log(notas[i])
//     }
// }


// for(let i = 0; i < notas.length; i++) {
//     if(notas[i] % 2 === 0) {
//         console.log(notas[i])
//     }

//     if(notas[i] % 2 === 1) {
//         console.log(notas[i])
//     }
// }

// let maiorNota = notas[0]
// let menorNota = notas[0]

// for(let i = 0; i < notas.length; i ++) {
//     if(notas[i] > maiorNota) {
//         maiorNota = notas[i]
//     }
// }

// console.log(maiorNota)

// for(let i = 0; i < notas.length; i++) {
//     if(notas[i] < menorNota) {
//         menorNota = notas[i]
//     }
// }

// console.log(menorNota)

// let contador = 0 

// for(let i = 0; i < notas.length; i++) {
//     contador += notas[i]
// }

// console.log(contador)

// let media = 0

// for(let i = 0; i < notas.length; i++) {
//     media = contador / notas.length
// }

// console.log(media)

// let maiorQue7 = 0

// for(let i = 0; i < notas.length; i++) {
//     if(notas[i] >= 7) {
//         maiorQue7 = notas[i]
//         console.log(maiorQue7)
//     }
// }
// console.log(notas.join(' | '))


// notas.push(4)

// notas.push(11)

// console.log(notas)

// notas.sort((a,b)=> a -b)

// console.log(notas)


const vendas = [120,80,300,50,25,500,210,95]

console.log(vendas)


vendas.sort((a,b) => a -b)

console.log(vendas)

vendas.sort((a,b) => b  -a)

console.log(vendas)

for(let i = 0; i < vendas.length; i ++) {
    if(vendas[i] > 100) {
        console.log(vendas[i])
    }

    if(vendas[i] < 90) {
        console.log(vendas[i])
    }


}

for(let i = 0; i < vendas.length; i ++) {
    if(vendas[i] % 2 === 0) {
        console.log(vendas[i])
    }
}

for(let i = 0; i < vendas.length; i ++) {

    if(vendas[i] % 2 === 1) {
        console.log(vendas[i])

    }
}


let maiorVenda = vendas[0]

for(let i = 0; i < vendas.length; i++) {
    if(vendas[0] > maiorVenda ) {
        maiorVenda = vendas[i]
    }
}

console.log(maiorVenda)

let menorVenda = vendas[0]

for(let i =0; i < vendas.length; i ++) {
    if(menorVenda < vendas[0]) {
        menorVenda = vendas[i]
    }
}

console.log(menorVenda)

let somaTotal = 0

for(let i = 0; i < vendas.length; i ++) {
    somaTotal += vendas[i]
}

console.log(somaTotal)

let media = 0

for(let i = 0; i < vendas.length; i ++) {
    media = somaTotal / 8
}

console.log(media)

let vendasMaiorQue100 = 0

for(let i = 0; i < vendas.length; i ++) {
    if(vendas[i] >= 100) {
        vendasMaiorQue100++
    }
}

console.log(vendasMaiorQue100)

console.log(vendas.join(' | '))

vendas.push(700)

vendas.push(40)

console.log(vendas)

vendas.sort((a,b) => a -b)

console.log(vendas)

maiorVenda = vendas[0]
menorVenda = vendas[0]

for(let i = 0; i < vendas.length; i ++) {
    if(vendas[i] > maiorVenda) {
        maiorVenda = vendas[i]
    }


    if(vendas[i] < menorVenda  ) {
        menorVenda = vendas[i]
    }
}

console.log(maiorVenda)

console.log(menorVenda)

media = 0

for(let i = 0; i < vendas.length; i ++) {
    media += vendas[i] / 10
}

console.log(media)

let segundaMenorVenda = vendas[0]

for(let i = 0; i < vendas.length; i ++) {
    if(segundaMenorVenda > menorVenda) {
        segundaMenorVenda = vendas[i]
    }
}

console.log(segundaMenorVenda)
















