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


// const vendas = [120,80,300,50,25,500,210,95]

// console.log(vendas)


// vendas.sort((a,b) => a -b)

// console.log(vendas)

// vendas.sort((a,b) => b  -a)

// console.log(vendas)

// for(let i = 0; i < vendas.length; i ++) {
//     if(vendas[i] > 100) {
//         console.log(vendas[i])
//     }

//     if(vendas[i] < 90) {
//         console.log(vendas[i])
//     }


// }

// for(let i = 0; i < vendas.length; i ++) {
//     if(vendas[i] % 2 === 0) {
//         console.log(vendas[i])
//     }
// }

// for(let i = 0; i < vendas.length; i ++) {

//     if(vendas[i] % 2 === 1) {
//         console.log(vendas[i])

//     }
// }


// let maiorVenda = vendas[0]

// for(let i = 0; i < vendas.length; i++) {
//     if(vendas[0] > maiorVenda ) {
//         maiorVenda = vendas[i]
//     }
// }

// console.log(maiorVenda)

// let menorVenda = vendas[0]

// for(let i =0; i < vendas.length; i ++) {
//     if(menorVenda < vendas[0]) {
//         menorVenda = vendas[i]
//     }
// }

// console.log(menorVenda)

// let somaTotal = 0

// for(let i = 0; i < vendas.length; i ++) {
//     somaTotal += vendas[i]
// }

// console.log(somaTotal)

// let media = 0

// for(let i = 0; i < vendas.length; i ++) {
//     media = somaTotal / 8
// }

// console.log(media)

// let vendasMaiorQue100 = 0

// for(let i = 0; i < vendas.length; i ++) {
//     if(vendas[i] >= 100) {
//         vendasMaiorQue100++
//     }
// }

// console.log(vendasMaiorQue100)

// console.log(vendas.join(' | '))

// vendas.push(700)

// vendas.push(40)

// console.log(vendas)

// vendas.sort((a,b) => a -b)

// console.log(vendas)

// maiorVenda = vendas[0]
// menorVenda = vendas[0]

// for(let i = 0; i < vendas.length; i ++) {
//     if(vendas[i] > maiorVenda) {
//         maiorVenda = vendas[i]
//     }


//     if(vendas[i] < menorVenda  ) {
//         menorVenda = vendas[i]
//     }
// }

// console.log(maiorVenda)

// console.log(menorVenda)

// media = 0

// for(let i = 0; i < vendas.length; i ++) {
//     media += vendas[i] / 10
// }

// console.log(media)

// let segundaMenorVenda = vendas[0]

// for(let i = 0; i < vendas.length; i ++) {
//     if(segundaMenorVenda > menorVenda) {
//         segundaMenorVenda = vendas[i]
//     }
// }

// console.log(segundaMenorVenda)

// const pontos = [120,450,90,700,300,50,900,600]

// let maiorPontuaçao = pontos[0]

// for(let i = 0; i < pontos.length; i ++) {
//     if (maiorPontuaçao < pontos[i]) {
//         maiorPontuaçao = pontos[i]
//     }
    
// }

// console.log(maiorPontuaçao)

// let menorPontuacao = pontos[0]

// for(let i = 0; i < pontos.length; i ++) {
//     if(pontos[i] < menorPontuacao) {
//         menorPontuacao = pontos[i]
//     }
    
// }

// console.log(menorPontuacao)

// let segundaMaiorPontuacao = pontos[0]

// for(let i = 0; i < pontos.length; i ++) {
//     if(segundaMaiorPontuacao < pontos[i] && pontos[i] !== maiorPontuaçao) {
//         segundaMaiorPontuacao = pontos[i]
//     }
// }

// console.log(segundaMaiorPontuacao)

// let segundaMenorPontuacao = pontos[0]

// for(let i = 0; i < pontos.length; i ++) {
//     if(pontos[i] < segundaMenorPontuacao && pontos[i] !== menorPontuacao) {
//         segundaMenorPontuacao = pontos[i]
//     }
// }

// console.log(segundaMenorPontuacao)

// for(let i = 0; i < pontos.length; i ++) {
//     if(pontos[i] > 400) {
//         console.log(pontos[i])
//     }

// }

// for(let i = 0; i < pontos.length; i ++) {
//         if (pontos[i] < 100) {
//         console.log(pontos[i])
//     }
// }

// let totalPontuacao = 0

// for(let i = 0; i < pontos.length; i ++) {
//     totalPontuacao += pontos[i]
// }

// console.log(totalPontuacao)

// let media = 0

//     media = totalPontuacao / 8


// console.log(media)

// pontos.sort((a,b) => a -b) 

// console.log(pontos)

// pontos.sort((a,b) => b -a) 

// console.log(pontos)

// for(let dados of pontos) {
//     console.log(dados)
// }

// let diferença = 0

// for(let i = 0; i < pontos.length; i ++) {
//     diferença = maiorPontuaçao - menorPontuacao
// }

// console.log(diferença)

// const placares = [45, 120, 300, 90, 15, 600, 250, 480]

// let maiorPlacar = -Infinity

// for(let i = 0; i < placares.length; i ++) {
//     if(placares[i] > maiorPlacar) {
//         maiorPlacar = placares[i]
//     }
// }

// console.log(maiorPlacar)

// let menorPlacar = Infinity

// for(let i = 0; i < placares.length; i++) {
//     if(placares[i] < menorPlacar) {
//         menorPlacar = placares[i]
//     }
// }

// console.log(menorPlacar)

// let segundoMaiorPlacar = placares[0]

// for(let i = 0; i < placares.length; i++) {
//     if(placares[i] > segundoMaiorPlacar && placares[i] !== maiorPlacar) {
//         segundoMaiorPlacar = placares[i]
//     }
// }

// console.log(segundoMaiorPlacar)

// let segundoMenorPlacar = placares[0]

// for(let i = 0; i < placares.length; i ++) {
//     if(placares[i] < segundoMenorPlacar && placares[i] !== menorPlacar) {
//         segundoMenorPlacar = placares[i]
//     }
// }

// console.log(segundoMenorPlacar)

// for(let i = 0; i < placares.length; i ++) {
//     if(placares[i] > 200) {
//         console.log(placares[i])
//     }
// }

// for(let i = 0; i < placares.length; i ++) {
//     if(placares[i] < 100) {
//         console.log(placares[i])
//     }
// }

// let totalPlacares = 0

// for(let i = 0; i < placares.length; i ++) {
//     totalPlacares += placares[i]
// }

// console.log(totalPlacares)

// let media = totalPlacares / 8

// console.log(media)

// for(let i = 0; i < placares.length; i ++) {
//     console.log(i + " " +  placares[i])
// }

// placares.sort((a,b) => a -b)

// console.log(placares)

// placares.sort((a,b) => b -a)

// console.log(placares)

// console.log('maior: ' + maiorPlacar)
// console.log('segundo maior: ' + segundoMaiorPlacar)
// console.log('menor: ' + menorPlacar)
// console.log('segundo menor: ' + segundoMenorPlacar)


const jogadores = [
    {nome: 'Nathan', pontos: 450},
    {nome: 'Lucas', pontos: 120},
    {nome: 'Ana', pontos: 700},
    {nome: 'Marina', pontos:300},
    {nome: 'Carlos', pontos:900},
    {nome:'Fernanda', pontos:250}
]

for(let dados of jogadores) {
    console.log(dados.nome + ' ' + dados.pontos)
}

let jogadorComMaiorPontuacao = jogadores[0]

for(let dados of jogadores) {
    if(dados.pontos > jogadorComMaiorPontuacao.pontos) {
        jogadorComMaiorPontuacao = dados
    }
}

console.log(jogadorComMaiorPontuacao)

let jogadorComMenorPontuacao = jogadores[0]

for(let dados of jogadores) {
    if(dados.pontos < jogadorComMenorPontuacao.pontos) {
        jogadorComMenorPontuacao = dados
    }
}

console.log(jogadorComMenorPontuacao)

let jogadorComSegundaMaiorPontuacao = jogadores[0]

for(let dados of jogadores) {
    if(dados.pontos > jogadorComSegundaMaiorPontuacao.pontos && dados.pontos !== jogadorComMaiorPontuacao.pontos) {
        jogadorComSegundaMaiorPontuacao = dados
    }
}

console.log(jogadorComSegundaMaiorPontuacao)

let jogadorComSegundaMenorPontuacao = jogadores[0]

for(let dados of jogadores) {
    if(dados.pontos < jogadorComSegundaMenorPontuacao.pontos && dados.pontos !== jogadorComMenorPontuacao.pontos) {
        jogadorComSegundaMenorPontuacao = dados
    }
}

console.log(jogadorComSegundaMenorPontuacao)

for(let dados of jogadores) {
    if(dados.pontos > 400) {
        console.log(dados)
    }
}

for(let dados of jogadores) {
    if(dados.pontos < 300) {
        console.log(dados)
    }
}

let somaTotal = 0

for(let dados of jogadores) {
    somaTotal +=dados.pontos 
}

console.log(somaTotal)

console.log(jogadores)

let media = somaTotal / 6

console.log(media)

jogadores.sort((a,b) => a.pontos -b.pontos)

console.log(jogadores)

jogadores.sort((a,b) => b.pontos -a.pontos)

console.log(jogadores)

jogadores.sort((a,b) => a.nome.localeCompare(b.nome))

console.log(jogadores)

for(let i = 0; i < jogadores.length; i ++) {
    console.log(i + ' ' + jogadores[i].nome + ' ' + jogadores[i].pontos)
}

const nomes = []

for(let dados of jogadores) {
    nomes.push(dados.nome)
}

console.log(nomes)

console.log(nomes.join(' | '))


    console.log('maior jogador: ' + jogadorComMaiorPontuacao.nome + ' ' + jogadorComMaiorPontuacao.pontos)
    console.log('segundo maior: ' + jogadorComSegundaMaiorPontuacao.nome + ' ' + jogadorComSegundaMaiorPontuacao.pontos)
    console.log('menor jogador: ' + jogadorComMenorPontuacao.nome + ' ' + jogadorComSegundaMaiorPontuacao.pontos)
    console.log('segundo menor: ' + jogadorComSegundaMenorPontuacao.nome + ' ' + jogadorComSegundaMenorPontuacao.pontos) 


























