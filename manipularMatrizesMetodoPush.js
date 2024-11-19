/*Manipular matrizes com o método push
Uma maneira fácil de acrescentar dados ao final de uma matriz é por meio do push()método .

O push()método pega um ou mais argumentos e os anexa ao final do array, na ordem em que aparecem. Ele retorna o novo comprimento do array.

Exemplos:

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1agora tem o valor [1, 2, 3, 4, 5]e arr2tem o valor ["Stimpson", "J", "cat", ["happy", "joy"]].

Empurre ["dog", 3]até o final da myArrayvariável.

 */

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])