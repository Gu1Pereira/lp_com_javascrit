//Estruturas de decisão
/*
if --> se
if(condiçâo){
    resposta verdadeira
}

if...else --> se senão
if(condição){
    resposta verdadeira
}else{
    resposta falsa
}
*/
let idade = 19
if(idade >=18){
    console.log("Maior de idade ") // Verdadeiro
}else{
    console.log("Menor de idade ") // Falso
}

console.log("Escolha o suco:\n1 - Laranja\n1 - Uva\n1 - Abacaxi")

let suco = 2
if(suco == 1){
    console.log("🍊")
}else if(suco == 2){
    console.log("🍇")
}else if(suco == 3){
    console.log("🍍")
}else{
    console.log("Opção inválida")
}

switch (suco) {
    case 1:
        console.log("Suco de 🍊")        
        break;
    case 2:
        console.log("Suco de 🍇")
        break
    case 3:
        console.log("Suco de 🍍")
        break
    default:
        console.log("Opção inválida")
        break;
}