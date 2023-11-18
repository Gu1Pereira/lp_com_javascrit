/*
OPERADORES RELACIONAIS
+ --> adição ou concatenação
- * /
% --> módulo, pega o resto da divição
= --> atribuição
** --> exponenciação
++ --> incrementar/aumentar 1 (i)
-- --> decrementar/diminuir 1
*/
let i = 0
console.log(i)
i++ // i = i+ 1
console.log(i)

/*
OPERADORES RELACIONAIS
== --> igual
!= --> diferente
> < >= <=
*/

/*
OPERADORES LÓGICOS
&& --> E
|| --> OU
! --> NÂOO
*/

let usuario = "admin", senha = 123
// U: admin S:123
if(usuario == "admin" && senha == 123){
    console.log("Pode entrar")

}else{
    console.log("Usuário ou senha inválido")
}

let a = 60, b = 5, c = 50

if(a > b && a > c){
    console.log("A é maior")
}else if(b > a && b > c){
    console.log("B é maior")
}else if(c > a && c > b){
    console.log("C é maior")
}

let meia_entrada = ""
if(meia_entrada == "estudante" || meia_entrada == "idoso" || meia_entrada == "pcd" || meia_entrada == "baixa renda" ){
    console.log("Você possui meia etrada")
}else{
    console.log("Você paga inteira")
}