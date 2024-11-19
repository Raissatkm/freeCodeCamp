/*Entenda a imutabilidade das strings
Em JavaScript, Stringos valores são imutáveis , o que significa que não podem ser alterados depois de criados.

Por exemplo, o código a seguir produzirá um erro porque a letra Bna string Bobnão pode ser alterada para a letra J:

let myStr = "Bob";
myStr[0] = "J";
Note que isso não significa que myStrnão poderia ser reatribuído. A única maneira de mudar myStrseria atribuir a ele um novo valor, como este:

let myStr = "Bob";
myStr = "Job";
Corrija a atribuição para myStrque ela contenha o valor da string Hello Worldusando a abordagem mostrada no exemplo acima.*/

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line