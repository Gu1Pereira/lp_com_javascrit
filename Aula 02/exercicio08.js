// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.


let dia = 1
switch (dia) {
    case 1:
        console.log("Domingo")        
        break;
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6 :
        console.log("Sexta-feira")
        break
    case 7 :
        console.log("Sábado")
    default:
        break;
}