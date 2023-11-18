// Faça um Programa que pergunte em que turno você estuda. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
console.log("De qual turno você é:\n1 - matutino\n1 - Vespertino\n1 - Noturno ")

let turno = 1
switch (turno) {
    case 1 :
        console.log("Turno da manhã, Bom Dia")        
        break;
    case 2 :
        console.log("Turno da tarde, Boa Tarde")
        break
    case 3 :
        console.log("Turno da noite, Boa Noite")
        break
    default:
        console.log("Opção invalida")
        break;
}
