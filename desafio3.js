/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

let calculadoraIMC = function (altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

let calcularFatorial = function (numero) {
    if (numero < 0) {
        return NaN;  // ou lançar um erro: throw new Error("O fatorial não está definido para números negativos");
    }
    if (numero === 0) {
        return 1;
    }
    return numero * calcularFatorial(numero - 1);
}

let converterDolarEmReais = function (quantidadeDolares) {
    return quantidadeDolares * 4.8;
}

let calculaPerimetroSala = function (altura, largura) {
    let perimetro = (altura * 2) + (largura * 2);
    alert('Perimetro total da sala: ' + perimetro);
}

let calcularPerimetroSalaCircular = function (raio) {
    let perimetro = 2 * Math.PI * raio;
    alert('O perimetro da sala redonda é: ' + perimetro.toFixed(2));
}

let tabuada = function (numero) {
    let multiplicador = 1;
    while (multiplicador <= 10) {
        console.log(`${numero} X ${multiplicador} = ${numero * multiplicador}`);
        multiplicador++;
    }
}