// const musicas = [
//     'numb',
//     'blinding light',
//     'lose youself',
//     'radioactive'
// ]

// console.log(musicas)

// console.log(musicas.join())

// console.log(musicas.join(' - '))

// console.log(musicas.join(' | '))

// console.log('musicas favoritas: ' + musicas.join(' - '))

// musicas.push('starboy')

// console.log(musicas.join(' - '))

// musicas.pop()

// console.log(musicas.join(' | '))

// musicas.sort((a,b) => a.localeCompare(b))

// console.log(musicas)

// console.log(musicas.join(' / '))

// for(let i = 0; i < musicas.length; i++) {
//     console.log(i + ' ' + musicas[i])
// }


// let contador = 0
// let dadosMusicas



// for(let i = 0; i < musicas.length; i++) {
//         contador++
    
// }

// console.log('você possui ' + contador + ' musicas: ' + musicas)

const pedidos = [
    {cliente: 'Nathan', produto: 'Hamúrguer', valor:35},
    {cliente: 'Lucas', produto: 'Pizza', valor:50},
    {cliente: 'Ana', produto: 'Sushi',  valor:80},
    {cliente: 'Marina', produto: 'Lasanha', valor:45} 
]

console.log(pedidos)
for(let dados of pedidos) {
    console.log(dados)
}

pedidos.push({nome: 'Carlos', produto: 'Pastel', valor:20})

console.log(pedidos)

pedidos.pop()

console.log(pedidos)

pedidos.unshift({cliente: 'Fernanda', produto: 'Açaí', valor:25})

console.log(pedidos)

pedidos.shift()

console.log(pedidos)

const novosPedidos = [
    {cliente: 'João', produto: 'Sorvete', valor:15},
    {cliente: 'Roberta', produto: 'Taco', valor:40}
]

const pedidos2 = pedidos.concat(novosPedidos)

console.log(pedidos2)

pedidos2.sort((a,b) => a.cliente.localeCompare(b.cliente))

console.log(pedidos2)

pedidos2.sort((a,b) => b.valor -a.valor)

console.log(pedidos2)

for(let i = 0; i < pedidos2.length; i++) {
    console.log(i + ' - ' + pedidos2[i].cliente + ' - ' + pedidos2[i].produto + ' - ' + pedidos2[i].valor)
}

let indiceAna = 0
let indiceLucas = 0
let indiceMarina


for(let i = 0; i  < pedidos2.length; i++) {
    if(pedidos2[i].cliente === 'Ana') {
        indiceAna = i
    } 

    if(pedidos2[i].cliente === 'Lucas') {
        indiceLucas = i
    }

    if(pedidos2[i].cliente === 'Marina') {
        indiceMarina = i
    }
}

console.log(indiceAna)
console.log(indiceLucas)
console.log(indiceMarina)

pedidos2.splice(indiceLucas,1)

console.log(pedidos2)

pedidos2.splice(indiceMarina,1, {cliente: "beatriz", produto:'Macarrão', valor:60})

console.log(pedidos2)

let somaTotal = 0

for(let dados of pedidos2) {
    somaTotal += dados.valor
}

console.log(somaTotal)

for(let dados of pedidos2) {
    if(dados.valor > 40) {
        console.log(dados)
    }
}

const nomes = []

for(let dados of pedidos2) {
    nomes.push(dados.cliente)
}

console.log(nomes)

console.log('clientes do dia: ' + nomes.join(' , '))

console.log(pedidos2.length)

const pedidoMaisCaro = []

for(let i = 0; i < pedidos2.length; i++) {
    console.log(pedidos2[i])

    if(pedidos2[i].valor >= 80) {
        pedidoMaisCaro += pedidos2[i]
    }
}

console.log(pedidoMaisCaro)





