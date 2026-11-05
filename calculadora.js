console.log('calculadora');

let consumo = Number(prompt("Digite o valor total da conta: R$"));
let porcentagem = Number(prompt("Digite a porcentagem da gorjeta:"));
let pessoas = Number(prompt("Em quantas pessoas a conta será dividida?"));
let gorjeta = consumo * (porcentagem / 100);
let total = consumo + gorjeta;
let divisao = total / pessoas;
let resultado = divisao.toFixed(2);

alert(
    "--- Resumo da Conta ---\n" +
    "Consumo: R$ " + consumo.toFixed(2) + "\n" +
    "Gorjeta: R$ " + gorjeta.toFixed(2) + "\n" +
    "Total com Gorjeta: R$ " + total.toFixed(2) + "\n" +
    "Divisão por pessoa (" + pessoas + " pessoas): R$ " + resultado
);