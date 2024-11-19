/*Manipular matrizes com o método pop
Outra maneira de alterar os dados em uma matriz é com a .pop()função.

.pop()é usado para retirar um valor do final de um array. Podemos armazenar esse valor retirado atribuindo-o a uma variável. Em outras palavras, .pop()remove o último elemento de um array e retorna esse elemento.

Qualquer tipo de entrada pode ser extraído de uma matriz: números, strings e até mesmo matrizes aninhadas.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
O primeiro console.logexibirá o valor 6e o segundo exibirá o valor [1, 4].

Use a .pop()função para remover o último item myArraye atribuir o valor retirado a uma nova variável removedFromMyArray. */

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);
