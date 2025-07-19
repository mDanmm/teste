// Exercicio 1  - Imprimir os Numero de 0 a 10 no console

/*for (let contadora =0; contadora<10; contadora++){
    console.log(contadora)
    alert(contadora)
}

// Exercicio 2  - Imprimir os Numero de 0 a 20 no console

for (let i = 1; i<20; i++){
    if (i % 2 ==1) {
    console.log(i)
    alert(i)
    }
}

// Exercicio 3  - Imprimir a soma dos Numero de 0 a 100 no console

for (let i = 1; i<=100; i++){
    console.log(i+1)
}

// Exercicio 4  - Fazer a Tabuada do 5 até o 10
for (let i = 0; i<=10; i++){
    let resultado = i*6
    console.log(resultado)
    alert(resultado)
}

// Exercicio 5  - Fazer a Tabuada do 5 até o 10
let NumeroTB = Number (prompt( 'Digite o numero da tabuada'))
for (let i = 0; i<=10; i++){
    let resultado = i*NumeroTB
    console.log(resultado)
    alert(resultado)
}*/

let numero = Number (prompt( 'Digite o numero da tabuada'))
for (let i = 0; i<=10; i++){
    console.log(`${numero}x${i}=${numero*i}`)
}