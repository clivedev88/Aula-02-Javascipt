
// Atividade 01
// Peça ao usuário para inserir um número e escreva um programa que determine se o número é positivo e par.

var num = prompt('Digite um número: ')
if (num%2 == 0) {
    console.log('O número inserido é par.')
}
else {
    console.log('O número inserido é ímpar.')
}


// Atividade 02
// Crie um programa que solicite ao usuário seu peso (em kg) e altura (em metros) e calcule o IMC. Em seguida, informe a categoria de acordo com a tabela de IMC (por exemplo, abaixo do peso, peso normal, sobrepeso, etc.).

var peso = prompt('Digite seu peso em Kg: ')

var altura = prompt('Digite sua altura em m: ')
console.log(`Seu peso é ${peso} Kg e sua altura é ${altura} m`)

var imc = peso / (altura ** 2)
console.log (`O seu IMC é ${imc}.`)

if (imc < 16) {
    console.log('Magreza grave')
}
else if (imc >= 16 && imc < 16.9 ) {
    console.log('Magreza moderada')
}
else if (imc >= 17 && imc < 18.5 ) {
    console.log('Magreza leve')
}
else if (imc >= 18.6 && imc < 24.9 ) {
    console.log('Peso ideal')
}
else if (imc >= 25 && imc < 29.9 ) {
    console.log('Sobrepeso')
}
else if (imc >= 30 && imc < 34.9 ) {
    console.log('Obesidade grau I')
}
else if (imc >= 35 && imc < 39.9 ) {
    console.log('Obesidade grau II ou severa')
}
else {
    console.log('Obesidade grau III ou mórbida.')
}


// Atividade 03
// Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

var preco = prompt('Digite o preço do produto: ') 
var idade = prompt('Digite a sua idade: ') 

if (idade < 18) {
    console.log(`Você ganhou um desconto. :) \n O preço do produto é de R$ ${preco- (preco*0.1)}.`)
}

else {
    console.log(`Você tem idade para trabalhar. Não haverá desconto. :) \n O preço do produto é de R$ ${preco}.`)
}


// Atividade 04
// Solicite ao usuário que digite uma letra. Crie um programa que determine se a letra inserida é uma vogal ou uma consoante. Exiba a mensagem correspondente. Utilize estruturas condicionais para realizar essa verificação.

var letra = prompt('Digite uma letra: ')
if (letra == 'a' || letra == 'e' ||letra == 'i' ||letra == 'o' ||letra == 'u') {
    console.log(`A letra digitada '${letra}' é uma vogal.`)
}
else {
    console.log(`A letra digitada '${letra}' é uma consoante.`)
}


// Atividade 05
// Crie um programa que solicite um número de 1 a 7, representando o dia da semana. Use uma estrutura switch (ou equivalente) para imprimir o nome do dia correspondente.

var num = prompt('Digite um número entre 1 e 7.')

switch (num) {
    case '1':
        console.log('Segunda-feira')
        break
    case '2':
        console.log('Terça-feira')
        break
    case '3':
        console.log('Quarta-feira')
        break
    case '4':
        console.log('Quinta-feira')
        break
    case '5':
        console.log('Sexta-feira')
        break
    case '6':
        console.log('Sábado')
        break
    case '7':
        console.log('Domingo')
        break
}


// Atividade 06
// Escreva um programa que solicite um número e determine se ele é um número primo.

var num = prompt("Digite um número:");
num = parseInt(num, 10); 

var resultado = num + " é um número primo.";

if (num < 2) {
    resultado = num + " não é um número primo.";
} else if (num === 2) {
    resultado = num + " é um número primo.";
} else if (num % 2 === 0) {
    resultado = num + " não é um número primo.";
} else if (num % 3 === 0) {
    resultado = num + " não é um número primo.";
} else if (num % 5 === 0) {
    resultado = num + " não é um número primo.";
} else if (num % 7 === 0) {
    resultado = num + " não é um número primo.";
} else if (num % 11 === 0) {
    resultado = num + " não é um número primo.";
} else if (num % 13 === 0) {
    resultado = num + " não é um número primo.";
} else if (num % 17 === 0 && num !== 17) {
    resultado = num + " não é um número primo.";
}

alert(resultado);
// console.log(resultado);