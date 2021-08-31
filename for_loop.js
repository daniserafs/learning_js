// estrutura de repetição
//for loop
// declara a variavel que começa no valor de 0 dentro do for; condição de continução do loop, enquanto i<10 for verdadeiro ele vai se repetir; incremento- expressão final que vai acontecer assim que terminar a primeira rodada do loop; condção foi verdaeira? i menor que 10? sim = {codigo dentro dos {} que vai ser executado}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// enquanto i <=10

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// enquanto i > 10

for (let i = 100; i > 10; i--) {
    console.log(i)
}

//break - para a execução do loop

for (let i = 100; i > 0; i--) {
    if (i === 50) {
        break;
    }
    console.log(i)
}

// continue - pula a execução do momento

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        continue;
    }
    console.log(i)
}