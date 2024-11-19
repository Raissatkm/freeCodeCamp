/*Manipular matrizes com o método unshift
Você não só pode shiftadicionar elementos do início de uma matriz, como também pode adicionar unshiftelementos do início de uma matriz, ou seja, adicionar elementos na frente da matriz.

.unshift()funciona exatamente como .push(), mas em vez de adicionar o elemento no final do array, unshift()adiciona o elemento no início do array.

Exemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Depois do shift, ourArrayteria o valor ["J", "cat"]. Depois do unshift, ourArrayteria o valor ["Happy", "J", "cat"].

Adicione ["Paul", 35]ao início da myArrayvariável usando unshift().*/

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])