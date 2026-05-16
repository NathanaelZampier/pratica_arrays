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


// const usuarios = [
//     {nome: 'nathan', idade: 20},
//     {nome: 'lucas', idade: 18},
//     {nome: 'ana', idade: 25}
// ]

// console.log(usuarios)

// for(let dados of usuarios) {
//     console.log(dados.nome)
//     console.log(dados.idade)
// }

// for(let dados of usuarios) {
//     if(dados.idade >= 18) {
//         console.log(dados)
//     }
// }

// usuarios.push({nome: 'marcos', idade: 30})

// console.log(usuarios)

// for(let dados of usuarios) {
//     if(dados.nome === 'ana') {
//         console.log('existe')
//     }
// }

// let contador = 0

// for(let dados of usuarios) {
//     if(dados.idade >= 20) {
//         contador++
//     }
// }

// console.log(contador)


// usuarios.splice(1,1)

// console.log(usuarios)

// const usuarios = [
//     {nome: 'nathan', idade: 20},
//     {nome: 'lucas', idade:18},
//     {nome: 'ana', idade: 25},
// ]



// let contador = 0

// for(let dados of usuarios) {
//     if(dados.nome === 'lucas') {
//         dados.idade = 19
//     }

//     if(dados.nome === 'ana') {
//         dados.nome = 'ana clara'
//     }

//     if(dados.idade >= 18) {
//         contador++
//     }
// }

// console.log(usuarios)
// console.log(contador)

// const tarefas = [
//     {nome: 'estudar js', concluida: false},
//     {nome : 'treinar', concluida: true},
//     {nome: 'ler um livro', concluida: false}
// ]

// console.log(tarefas);

// for(let dados of tarefas) {
//     console.log(dados.nome)
//     console.log(dados.concluida)
// }

// for(let dados of tarefas) {
//     if(dados.concluida) {
//         console.log(dados)
//     }
// }

// let contador = 0

// for(let dados of tarefas) {
//     if(dados.concluida === false) {
//         contador++
//     }
// }

// console.log(contador)

// tarefas.push({nome: 'Estudar arrays', concluida: false})

// console.log(tarefas)

// for(let dados of tarefas) {
//     if(dados.nome === 'ler um livro') {
//         dados.concluida = true
//     }
// }

// tarefas.splice(1,1)

// const estoque = [
//     {produtos: 'mouse', quantidade: 10},
//     {produtos: 'teclado', quantidade: 5},
//     {produtos: 'monitor', quantidade: 2},
// ]

// console.log(estoque);

// for(let dados of estoque) {
//     if(dados.quantidade < 6) {
//         console.log(dados)
//     }
// }

// estoque.push({produtos: 'headset', quantidade: 3})

// for(let dados of estoque) {
//     if(dados.produtos === 'monitor') {
//         dados.quantidade = 1
//     }
// }

// estoque.splice(2,1)

// let contador = 0

// for(let dados of estoque) {
//     if(dados.quantidade < 3) {
//         contador++
//     }
// }

// console.log(contador)

// const filmes = [
//     {nome: 'batman', categoria: 'ação', assistido: true},
//     {nome: 'shrek', categoria: 'animação', assistido: false},
//     {nome: 'interestelar', categoria: 'ficção', assistido: true},
//     {nome: 'vingadores', categoria: 'ação', assistido: false}
// ]

// console.log(filmes)

// for(let dados of filmes) {
//     console.log(dados.nome)
//     console.log(dados.categoria)
//     console.log(dados.assistido)
// }

// for(let dados of filmes) {
//     if(dados.assistido) {
//         console.log(dados)
//     }
// }

// filmes.push({nome: 'toy story', categoria: 'animação', assistido: true})

// for(let dados of filmes) {
//     if(dados.nome === 'shrek') {
//         dados.assistido = true
//     }
// }


// filmes.splice(3,1)

// let contador = 0

// for(let dados of filmes) {
//     if(dados.assistido) {
//         contador++
//     }
// }

// console.log(contador)


// const produtos = [
//     {nome: 'mouse', preco: 120, estoque: 10},
//     {nome: 'teclado', preco: 250, estoque: 5},
//     {nome: 'monitor', preco: 900, estoque: 2},
// ]

// console.log(produtos)

// for(let dados of produtos) {
//     console.log(dados.nome)
//     console.log(dados.preco)
//     console.log(dados.estoque)
// }

// for(let dados of produtos) {
//     if(dados.estoque < 6) {
//         console.log(dados)
//     }
// }

// for(let dados of produtos) {
//     if(dados.preco < 200) {
//         console.log(dados)
//     }
// }

// produtos.push({nome: 'headset', preco: 180, estoque: 8})

// console.log(produtos)

// for(let dados of produtos) {
//     if(dados.nome === 'monitor') {
//         dados.estoque = 7
//     }
// }

// produtos.splice(1,1)

// let contador = 0

// for(let dados of produtos) {
//     if(dados.estoque > 5) {
//         contador++
//     }
// }

// console.log(contador)

// let soma = 0

// for(let dados of produtos) {
//     soma += dados.preco * dados.estoque
// }

// console.log(soma)

