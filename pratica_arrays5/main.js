// const carrinho = [
//     'mouse',
//     'teclado',
//     'monitor'
// ]

// console.log(carrinho)

// carrinho.includes('monitor')
// carrinho.includes('cadeira')
// carrinho.indexOf('teclado')
// carrinho.push('headset')

// console.log(carrinho)

// carrinho.pop()

// console.log(carrinho)

// carrinho.splice(1,1)

// carrinho.splice(1,0, 'cadeira gamer')

// carrinho.splice(0,1, 'mouse gamer')

// console.log(carrinho.length)

// const playlist = [
//     'linkin park',
//     'eminem',
//     'imagine dragons'
// ]

// console.log(playlist)

// console.log(playlist.includes('eminem'))
// console.log(playlist.includes('drake'))
// console.log(playlist.indexOf('imagine dragons'))

// playlist.push('travis scott')

// playlist.pop()

// const indice = playlist.indexOf('eminem')

// playlist.splice(1,1)

// playlist.splice(1, 0, 'the weeknd')

// playlist.splice(0, 1, 'kendrick lamar')

// console.log(playlist.length)

// console.log(playlist.includes('the weeknd'))
// console.log(playlist.indexOf('the weeknd'))

// const jogos = [
//     {nome: 'god of war', categoria: 'ação'},
//     {nome: 'fifa', categoria: 'esporte'},
//     {nome: 'minecraft', categoria: 'sandbox'}
// ]

// console.log(jogos)

// for(let dados of jogos) {
//     console.log(dados.nome)
//     console.log(dados.categoria)
// }

// jogos.push({nome: 'gta V', categoria: 'ação'})

// jogos.pop()

// jogos.splice(1,0, {nome: 'valorant', categoria: 'fps'})

// jogos.splice(2,1, {nome: 'EA FC', categoria: 'esporte'})

// console.log(jogos.length)

// for(let dados of jogos) {
//     if(dados.nome === 'minecraft') {
//         console.log('existe')
//     }

// }


// const celulares = [
//     {nome: 'iphone', preco: 5000},
//     {nome: 'samsung', preco: 3500},
//     {nome: 'xiaomi', preco: 2500},
//     {nome: 'motorola', preco: 2000}
// ]



// for(let i = 0; i < celulares.length; i++) {
//     if (celulares[i].nome === 'samsung') {
//         console.log(i)
//     }
// }

// for(i = 0; i < celulares.length; i++) {
//     if(celulares[i].nome === 'xiaomi') {
//         console.log(i)
//     }
// }

// for(let i = 0; i < celulares.length; i++) {
//     if(celulares[i].nome === 'motorola') {
//         console.log(i)
//     }
// }

// for(let dados of celulares) {
//     if(dados.nome === 'iphone') {
//         console.log('existe')
//     }
// }


// for(let i = 0; i < celulares.length; i++) {
//     if(celulares[i].nome == 'samsung') {
//         console.log(i)
//     }
// }

// celulares.splice(1,1)

// console.log(celulares)


// for(let i = 0; i < celulares.length; i++) {
//     if(celulares[i].nome == 'xiaomi') {
//         console.log(i)
//     }
// }
// celulares.splice(1,1, {nome:'Poco X6', preco:2800})

// console.log(celulares);

// const funcionarios = [
//     {nome: 'carlos' , cargo: 'dev'},
//     {nome: 'marina', cargo: 'designer'},
//     {nome: 'lucas', cargo:'suporte'},
//     {nome: 'ana', cargo:'rh'}
// ]

// for(let i = 0; i < funcionarios.length; i++) {
//     if(funcionarios[i].nome === 'lucas') {
//         console.log(i)
//     }
// }

// for(let i = 0; i < funcionarios.length; i++) {
//     if(funcionarios[i].nome === 'ana') {
//         console.log(i)
//     }
// }

// for(let dados of funcionarios) {
//     if(dados.nome === 'carlos') {
//         console.log('existe')
//     }
// }

// for(let i = 0; i < funcionarios.length; i++) {
//     if(funcionarios[i].nome === 'marina') {
//         console.log(i)
//     }
// }

// funcionarios.splice(1,1)

// console.log(funcionarios)

// let indiceLucas = 0

// for(let i = 0; i < funcionarios.length; i++) {
//     if(funcionarios[i].nome === 'lucas') {
//         indiceLucas = i
//     }
// }

// console.log(indiceLucas)

// funcionarios.splice(indiceLucas, 1, {nome: 'roberto', cargo: 'backend'})

// console.log(funcionarios)

// funcionarios.splice(1, 0, {nome: 'Fernanda', cargo:'frotend'})

// console.log(funcionarios)

// console.log(funcionarios.length)

// for(let dados of funcionarios) {
//     console.log(dados)
// }

// let indiceAna = 0

// for(let i = 0; i < funcionarios.length; i++) {
//     if(funcionarios[i].nome === 'ana' ) {
//         indiceAna = i
//         console.log('ana '+ '- ' +  indiceAna)
//     }
// }

const series = [
    {nome: 'breaking bad', temporadas: 5},
    {nome: 'dark', temporadas: 5},
    {nome: 'the office', temporadas: 9},
    {nome: 'stranger things', temporadas: 4}
]

console.log(series)

let indiceDark = 0

for(let i = 0; i < series.length; i++) {
    if(series[i].nome === 'dark') {
        indiceDark = i
    }
}

console.log(indiceDark)

let indiceTheOffice

for(let i = 0; i < series.length; i++) {
    if(series[i].nome === 'the office') {
        indiceTheOffice = i
    }
}

console.log(indiceTheOffice)

for(let dados of series) {
    if(dados.nome === 'stranger things') {
        console.log('existe')
    }
}


series.splice(indiceDark,1)

console.log(series)

series.splice(indiceTheOffice, 1, {nome: 'brooklyn 99', temporadas: 0})

console.log(series)

series.splice(1,0, {nome: 'peaky blinders', temporadas: 6}) 

console.log(series)

console.log(series.length)

for(let i = 0; i < series.length; i ++) {
    console.log(i + ' - ' + series[i].nome)
}

let seriesMaisDe5 = 0

for(let i = 0; i < series.length; i++) {
    if(series[i].temporadas > 5) {
        seriesMaisDe5 = i
        console.log(seriesMaisDe5)
    }
}

for(let i = 0; i < series.length; i++) {
    if(series[i].temporadas < 5) {
        console.log(series[i].nome + ' ' + series[i].temporadas)
    }
}

