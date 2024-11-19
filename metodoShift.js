/*Manipular matrizes com o método shift
pop()sempre remove o último elemento de um array. E se você quiser remover o primeiro?

É aí que .shift()entra. Funciona exatamente como .pop(), exceto que remove o primeiro elemento em vez do último.

Exemplo:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArrayteria um valor de string Stimpsone ourArrayteria ["J", ["cat"]].

Use a .shift()função para remover o primeiro item myArraye atribuir o valor "deslocado" a uma nova variável, removedFromMyArray.

*/

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

console.log("Removed Element:", removedFromMyArray);