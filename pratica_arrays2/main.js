// const numeros = [10, 20, 30, 40]

// console.log(numeros[0])
// console.log(numeros[3])

// console.log(numeros.length);


// const nomes = ['nathan', 'maria', 'joao', 'vitor', 'andre']

// for(let nome of nomes) {
//     console.log(nome)
// }


// const tarefas = []

// tarefas.push('limpar a casa', 'limpar o carro', 'fazer compras')

// console.log(tarefas);

// tarefas.pop()

// console.log(tarefas)

// const filmes = ['batman', 'homem-aranha', 'matrix']

// console.log(filmes.includes('batman'))
// console.log(filmes.includes('shrek'))

// console.log(filmes.indexOf('matrix'))

// filmes.push('shrek', 'superman')

// for(let filme of filmes) {
//     console.log(filme)
// }


const numeros = [5, 10 , 15, 20, 25]

for(let item of numeros) {
    if(item > 10) {
        console.log(item)
    }
}

let soma = 0 

for(let numero of numeros) {
    soma += numero
}

console.log(soma)

console.log(numeros.includes(15))

console.log(numeros.indexOf(20))