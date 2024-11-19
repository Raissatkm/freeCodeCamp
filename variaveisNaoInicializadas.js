/*Compreendendo variáveis ​​não inicializadas
Quando variáveis ​​JavaScript são declaradas, elas têm um valor inicial de undefined. Se você fizer uma operação matemática em uma undefinedvariável, seu resultado será , NaNque significa "Não é um Número" . Se você concatenar uma string com uma undefinedvariável, você obterá uma string de undefined.

Inicialize as três variáveis a​​, b, e ccom 5, 10, e "I am a"respectivamente para que elas não sejam undefined.

*/

var a;
a= 5;
var b;
b= 10;
var c;
c= "I am a";


a = a + 1;
b = b + 5;
c = c + " String!";