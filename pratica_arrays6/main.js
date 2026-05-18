// const frutas = [
//     'banana',
//     'maçâ',
//     'uva'
// ]

// frutas.push('laranja')

// console.log(frutas)

// frutas.pop()

// frutas.unshift('morango')

// console.log(frutas)

// frutas.shift()


// frutas.join('-')

// console.log(frutas)

// const frutas2 = [
//     'kiwi',
//     'abacaxi',
// ]

// const resultado = frutas.concat(frutas2)

// console.log(resultado)

// resultado.sort()

// console.log(resultado)

// delete resultado[4]

// console.log(resultado.length)


// for(let i = 0; i < resultado.length; i++) {
//     console.log(i + ' - ' + resultado[i])
// }


// const carrinho = [
//     {nome: 'mouse', preco: 120},
//     {nome: 'teclado', preco:250},
//     {nome: 'monitor', preco: 900}
// ]

// for(let i = 0; i < carrinho.length; i++) {
//     console.log(carrinho[i].nome + ' - ' + carrinho[i].preco )
// }

// carrinho.push({nome: 'headset', preco:180})

// console.log(carrinho)

// carrinho.pop()

// carrinho.unshift({nome:'mousepad', preco:80 })

// console.log(carrinho)

// carrinho.shift()

// const novosProdutos = [
//     {nome: 'cadeira gamer', preco: 1500},
//     {nome: 'webcan', preco: 300},
// ]

// const novoArray = carrinho.concat(novosProdutos)

// console.log(novoArray)

// novoArray.sort()

// delete novoArray[4]

// console.log(novoArray)

// novoArray.pop()

// for(let i= 0; i < novoArray.length; i++) {
//     console.log(i + ' - ' + novoArray[i].nome)
// }

// console.log(novoArray.length)


// let somaTotal = 0

// for(let dados of novoArray) {
//     somaTotal += dados.preco
// }

// console.log(somaTotal)

// const jogadores = [
//     {nome: 'carlos', pontos: 150},
//     {nome: 'ana', pontos: 300 },
//     {nome: 'lucas', pontos: 200},
//     {nome: 'bruno', pontos: 100}
// ]

// for(let i = 0; i < jogadores.length; i++) {
//     console.log(i + ' - ' + jogadores[i].nome)
// }

// jogadores.sort((a,b) => a.nome.localeCompare(b.nome))

// console.log(jogadores)



// jogadores.sort((a,b) => b.nome.localeCompare(a.nome))

// console.log(jogadores)

// jogadores.sort((a,b) => a.pontos -b.pontos)

// console.log(jogadores)

// jogadores.sort((a,b) => b.pontos -a.pontos)

// console.log(jogadores)

// for(let i = 0; i < jogadores.length; i ++) {
//     console.log(i + ' - ' + jogadores[i].nome + ' - ' + jogadores[i].pontos)
// }

// jogadores.push({nome: 'fernanda', pontos: 250}) 

// console.log(jogadores)

// jogadores.sort((a,b) => a.pontos -b.pontos)

// console.log(jogadores)

// for(let dados of jogadores) {
//     if(dados.pontos > 200) {
//         console.log(dados.nome)
//     }
// }


// const livros = [
//     {nome: 'harry potter', paginas: 300},
//     {nome: 'senhor dos anéis', paginas: 1200},
//     {nome: 'dom casmurro', paginas: 250},
//     {nome: 'percy jackson', paginas: 400}
// ]

// for(let i = 0; i < livros.length; i++) {
//     console.log(livros[i].nome + ' - ' + livros[i].paginas)
// }

// livros.push({nome:'1984', paginas: 350}) 

// console.log(livros)

// livros.pop()

// console.log(livros)

// livros.unshift({nome: 'o hobbit', paginas: 500})

// console.log(livros)

// livros.shift()

// console.log(livros)

// const novosLivros = [
//     {nome: 'it', paginas: 1100},
//     {nome: 'coraline', paginas: 200}
// ]

// const livros2 = livros.concat(novosLivros)

// console.log(livros2)

// livros2.sort((a,b) => a.nome.localeCompare(b.nome))

// console.log(livros2)

// livros2.sort((a,b) => b.paginas -a.paginas)

// console.log(livros2)

// for(i = 0; i < livros2.length; i++) {
//     console.log(i + ' - ' + livros2[i].nome + ' - ' + livros2[i].paginas)
// }

// let indicePercyJackson = 0

// for(let i = 0; i < livros2.length; i ++) {
//     if(livros2[i].nome === 'percy jackson') {
//         indicePercyJackson = i
//         console.log(indicePercyJackson)
//     }
// }

// let indiceDomCasmurro = 0

// for(let i = 0; i < livros2.length; i++) {
//     if(livros2[i].nome === 'dom casmurro') {
//         indiceDomCasmurro = i
//         console.log(indiceDomCasmurro)
//     }
// }

// livros2.splice(indiceDomCasmurro,1)

// console.log(livros2)

// let indiceHarryPotter = 0

// for(let i = 0; i < livros2.length; i ++) {
//     if(livros2[i].nome === 'harry potter') {
//         indiceHarryPotter = i
//         console.log(indiceHarryPotter)
//     }
// }

// livros2.splice(indiceHarryPotter, 1, {nome: 'duna', paginas:600})

// console.log(livros2)

// let somaTotal = 0

// for(let dados of livros2) {
//     somaTotal +=dados.paginas 
// } 

// console.log(somaTotal)

// for(let dados of livros2) {
//     if(dados.paginas > 500) {
//         console.log(dados.nome)
//     }
// }

const alunos = [
    {nome: 'nathan', curso: 'javascript'},
    {nome: 'lucas', curso: 'phyton'},
    {nome: 'ana', curso: 'java'},
    {nome: 'marina', curso: 'c#'}
]

for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome + ' - ' + alunos[i].curso)
}

alunos.join()

const apenasNome = []

for(let dados of alunos) {
    apenasNome.push(dados.nome)
}

console.log(alunos)
console.log(apenasNome)



let texto = apenasNome.join(' | ')

console.log(texto)

let apenasCursos = []

for(let dados of alunos) {
    apenasCursos.push(dados.curso)
}

console.log(apenasCursos)

let cursosTexto = apenasCursos.join(' - ')

console.log(cursosTexto)

alunos.push({nome: 'carlos', curso: 'php'})

console.log(alunos)

for(let dados of alunos) {
    apenasNome.push(dados.nome)
    apenasCursos.push(dados.curso)
}

console.log(apenasNome)

texto = apenasNome.join(' | ')

console.log(texto)

console.log(apenasCursos)

cursosTexto = apenasCursos.join(' - ')

console.log(cursosTexto)

alunos.sort((a,b) => a.nome.localeCompare(b.nome))

console.log(alunos)

for(let i = 0; i < alunos.length; i++) {
    console.log(i + ' - ' + alunos[i].nome + ' - ' + alunos[i].curso)
}

let indiceLucas = 0

for(let i = 0; i < alunos.length; i++) {
    if(alunos[i].nome === 'lucas') {
        indiceLucas = i
        console.log(indiceLucas)
    }
}

alunos.splice(indiceLucas,1)

console.log(alunos)

console.log(apenasNome)

for(let i = 0; i < alunos.length; i++) {
    console.log('alunos cadastrados: ' + alunos[i].nome)
}

// ou poderia ser assim

console.log('alunos cadastrados: nathan, ana, carlos, marina')

