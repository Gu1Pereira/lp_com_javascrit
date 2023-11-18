// Array

let frutas = ["Laranja", "Abacaxi" ,"Morango"]
//             0          1          2         

//Exibindo array inteiro^
console.dir(frutas)

//Exibindo uma posição do array^
console.log(frutas[1])

//Alterando o valor de uma posição do array
frutas[1] = "Pêra"
console.dir(frutas)

//Adicionar um novo elemento no array, muda a fruta

frutas.push("Melancia")
console.dir(frutas)


//Adicionar um novo elemento no final do array,  LENGHT

frutas[frutas.length] = "maça"
console.dir(frutas)

//Ordenar o array,   FRUTA.SORT

frutas.sort()
console.dir(frutas)

//Ordenar o array em ordem decrescente,   FRUTAS.SORT().REVERSE()

frutas.sort().reverse()
console.dir(frutas)

//Remover o primeiro item do array,    FRUTAS.SHIFT

let Laranja = frutas.shift()
console.dir(Laranja)
console.dir(frutas)

//remover o último item do array,   FRUTAS.POP

let Morango = frutas.pop()
console.dir(Morango)
console.dir(frutas)

