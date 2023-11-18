//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let salario_hora
let numero_hora_trabalhadas
let salario
salario_hora = 37.5
numero_hora_trabalhadas = 180
salario = salario_hora * numero_hora_trabalhadas
console.log("Salário: R$ " + salario.toFixed(2))  //toFixed ao invés de mostrar varios números só vai aparecer só dois