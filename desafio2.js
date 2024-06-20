/*Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/
function olaMundo(){
    console.log('Olá Mundo!');
}

function olaMundo(nome){
    console.log('Olá '+nome);
}

function dobro(numero){
    return numero * 2;
}

function media (num1, num2,num3){
    return (num1 + num2 + num3)/3;
}

function maior(valor1,valor2){
    return valor1 > valor2 ? valor1 : valor2;
}

function multiplicarPorEleMesmo(valor){
     return valor * valor;
}