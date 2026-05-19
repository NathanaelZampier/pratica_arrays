const notas = [7 ,10 ,5 ,8 ,3 ,9 ,6 ,1 ]

console.log(notas)

console.log(notas.sort((a,b) => a -b))

console.log(notas.sort((a,b) => b -a))

for(let i = 0; i < notas.length; i ++) {
    if(notas[i] > 7) {
        console.log(notas[i])
    }

    if(notas[i] < 6) { 
        console.log(notas[i])
    }
}


for(let i = 0; i < notas.length; i++) {
    if(notas[i] % 2 === 0) {
        console.log(notas[i])
    }

    if(notas[i] % 2 === 1) {
        console.log(notas[i])
    }
}

let maiorNota = notas[0]
let menorNota = notas[0]

for(let i = 0; i < notas.length; i ++) {
    if(notas[i] > maiorNota) {
        maiorNota = notas[i]
    }
}

console.log(maiorNota)

for(let i = 0; i < notas.length; i++) {
    if(notas[i] < menorNota) {
        menorNota = notas[i]
    }
}

console.log(menorNota)

let contador = 0 

for(let i = 0; i < notas.length; i++) {
    contador += notas[i]
}

console.log(contador)

let media = 0

for(let i = 0; i < notas.length; i++) {
    media = contador / notas.length
}

console.log(media)

let maiorQue7 = 0

for(let i = 0; i < notas.length; i++) {
    if(notas[i] >= 7) {
        maiorQue7 = notas[i]
        console.log(maiorQue7)
    }
}
console.log(notas.join(' | '))


notas.push(4)

notas.push(11)

console.log(notas)

notas.sort((a,b)=> a -b)

console.log(notas)












