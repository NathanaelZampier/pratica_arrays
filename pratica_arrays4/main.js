// const contas = [
//     {nome: 'nathan', saldo:1500},
//     {nome: 'lucas', saldo: 800},
//     {nome: 'ana', saldo:2500}
// ]

// console.log(contas)

// for(let dados of contas) {
//     console.log(dados.nome)
//     console.log(dados.saldo)
// }

// for(let dados of contas) {
//     if(dados.saldo > 1000) {
//         console.log(dados.nome)
//     }
// }

// contas.push({nome:'Marcos', saldo:500})

// console.log(contas)

// for(let dados of contas) {
//     if(dados.nome === 'lucas') {
//         dados.saldo += 300
//     }

//     if(dados.nome === 'ana') {
//         dados.saldo -= 200
//     }
// }

// contas.splice(3,1)

// let total = 0 

// for(let dados of contas) {
//     total += dados.saldo
// }

// console.log(total)

// let contagem = 0 

// for(let dados of contas) {
//     if(dados.saldo < 1000) {
//         contagem++
//     }
// }

// console.log(contagem)

// for(let dados of contas) {
//     const maiorSaldo = Math.max(dados)
//     console.log(maiorSaldo)
// }


// const pedidos = [
//     {cliente: 'nathan', total: 80, entregue: true},
//     {cliente: 'lucas', total: 45, entregue: false},
//     {cliente: 'ana', total: 220, entregue: true},
//     {cliente: 'marcos', total: 30, entregue: false}
// ]

// console.log(pedidos)

// for(let dados of pedidos) {
//     console.log(dados.cliente)
//     console.log(dados.total)
//     console.log(dados.entregue)
    
// }


// for(let dados of pedidos) {
//     if(dados.entregue) {
//         console.log(dados.cliente)
//     }

//     if(dados.total > 50) {
//         console.log(dados.cliente)
//     }
// }

// pedidos.push({cliente:'joão', total: 70, entregue: true})

// console.log(pedidos)

// for(let dados of pedidos) {
//     if(dados.cliente === 'lucas') {
//         dados.entregue = true
//         console.log(pedidos)
//     }
// }

// pedidos.splice(3,1)

// console.log(pedidos)

// let valorTotal = 0

// for(let dados of pedidos) {
//     valorTotal += dados.total
// }

// console.log(valorTotal)


// let contagem = 0

// for(let dados of pedidos) {
//     if(!dados.entregue) {
//         contagem++
//     }
// }

// console.log(contagem)

// let maiorPedido = pedidos[2]

// console.log(maiorPedido)

// for(let dados of pedidos) {
//     if(maiorPedido.total > dados.total) {
//         maiorPedido = dados.total
//     }
// }

// console.log(maiorPedido)

// const menorPedido = pedidos[1]

// console.log(menorPedido)

// for(let dados of pedidos) {
//     if(dados.total < menorPedido.total) {
//         menorPedido = dados.total
//     }
// }

// console.log(menorPedido)

// console.log(pedidos.length)

// console.log(pedidos)


// let mediaTotal = 0


// for(let dados of pedidos) {
//     mediaTotal = dados.total / pedidos.length
//     console.log(mediaTotal)
// }


const alunos = [
    {nome: 'nathan', notas:[8,7,9]},
    {nome: 'lucas', notas: [5,6,4]},
    {nome: 'ana', notas:[10,9,8]},
    {nome: 'marcos', notas: [6,7,5]}
]

console.log(alunos)

for(let dados of alunos) {
    console.log(dados.nome)
    console.log(dados.notas)
}

let totalNathan = 0
let totalLucas = 0
let totalAna = 0
let totalMarcos = 0

for(let dados of alunos) {
    for(let nota of dados.notas) {
        if(dados.nome === 'nathan') {
            totalNathan += nota
        }

        if(dados.nome === 'lucas') {
            totalLucas += nota
        }

        if(dados.nome === 'ana') {
            totalAna += nota
        }

        if(dados.nome === 'marcos') {
            totalMarcos += nota
        }
    }
}

const mediaNathan = totalNathan / 3
console.log(mediaNathan)

const mediaLucas = totalLucas / 3
console.log(mediaLucas)

const mediaAna = totalAna / 3
console.log(mediaAna)

const mediaMarcos = totalMarcos / 3 
console.log(mediaMarcos)



for(let dados of alunos) {
    if(dados.nome === 'nathan' && mediaNathan >= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'lucas' && mediaLucas >= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'ana' && mediaAna >= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'marcos' && mediaMarcos >=7) {
        console.log(dados.nome)
    }
}

for(let dados of alunos) {
    if(dados.nome === 'nathan' && mediaNathan <= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'lucas' && mediaLucas <= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'ana' && mediaAna <= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'marcos' && mediaMarcos <=7) {
        console.log(dados.nome)
    }
}

console.log(mediaAna)
console.log(mediaLucas)

let totalMedia = 0
let mediaGeral = mediaNathan + mediaAna + mediaLucas + mediaMarcos

totalMedia = mediaGeral / 4

console.log(totalMedia)

alunos.push({nome: 'joão', notas:[7,7,8]})

let totalJoao = 0

for(let dados of alunos) {
    for(let nota of dados.notas) {
        if(dados.nome === 'joão') {
            totalJoao += nota
        }
    }
}

const mediaJoao = totalJoao / 3
console.log(mediaJoao)

for(let dados of alunos) {
    if(dados.nome === 'joão' && mediaJoao >= 7) {
        console.log(dados.nome)
    }

    if(dados.nome === 'joão' && mediaJoao < 7) {
        console.log(dados.nome)
    }
}

totalMedia = 0
mediaGeral = mediaNathan + mediaAna + mediaLucas + mediaMarcos + mediaJoao

totalMedia = mediaGeral / 5

console.log(totalMedia)







