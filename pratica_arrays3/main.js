// const produtos = [
//     'mouse',
//     'teclado',
//     'monitor',
//     'gabinete',
//     'mousepad'
// ]

// console.log(produtos)

// for(let item of produtos) {
//     if (item.length > 6) {
//         console.log(item)
//     }
// }

// console.log(produtos.includes('monitor'));
// console.log(produtos.includes('cadeira'));
// console.log(produtos.indexOf('gabinete'));

// produtos.push('headset');

// console.log(produtos)

// produtos.pop()

// console.log(produtos)

// console.log(produtos.length)

// let contador = 0 

// for(let produto of produtos) {
//     if(produto.length > 6) {
//         contador += produto
//     }
// }

// console.log(contador)

// const alunos = [ 
//     {nome: 'carlos', nota:8},
//     {nome: 'marina', nota:5},
//     {nome: 'joão', nota: 9},
//     {nome: 'ana', nota: 6}
// ]

// for(let dados of alunos) {
//     console.log(dados.nome)
// }

// let contador = 0

// for(let dados of alunos) {
//     if(dados.nota >= 7) {
//         console.log(dados)
//         contador++
//         console.log(contador)
//     } 
// }

// let total = 0 


// for(let dados of alunos) {
//     total += dados.nota 
//     console.log(total);
// }

// let media = total / alunos.length

// console.log(media)


// let existe = false

// for(let aluno of alunos) {
//     if(aluno.nome === 'ana') {
//         existe = true
//     }
// }

// console.log(existe)


const usuarios = [
    {nome: 'nathan', idade: 20},
    {nome: 'lucas', idade: 18},
    {nome: 'ana', idade: 25}
]

console.log(usuarios)

for(let dados of usuarios) {
    console.log(dados.nome)
    console.log(dados.idade)
}

for(let dados of usuarios) {
    if(dados.idade >= 18) {
        console.log(dados)
    }
}

usuarios.push({nome: 'marcos', idade: 30})

console.log(usuarios)

for(let dados of usuarios) {
    if(dados.nome === 'ana') {
        console.log('existe')
    }
}

let contador = 0

for(let dados of usuarios) {
    if(dados.idade >= 20) {
        contador++
    }
}

console.log(contador)


usuarios.splice(1,1)

console.log(usuarios)