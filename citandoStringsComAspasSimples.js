/*Citando strings com aspas simples
Valores de string em JavaScript podem ser escritos com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Ao contrário de algumas outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript.

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
O motivo pelo qual você pode querer usar um tipo de citação em vez do outro é se você quiser usar ambos em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. Outro uso para isso seria salvar uma <a>tag com vários atributos entre aspas, tudo dentro de uma string.

const conversation = 'Finn exclaims to Jake, "Algebraic!"';
No entanto, isso se torna um problema se você precisar usar as aspas mais externas dentro dela. Lembre-se, uma string tem o mesmo tipo de aspas no começo e no fim. Mas se você tiver essa mesma aspa em algum lugar no meio, a string vai parar antes e lançar um erro.

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
Aqui badStrocorrerá um erro.

No goodStr acima, você pode usar ambas as aspas com segurança usando a barra invertida \como caractere de escape.

Nota: A barra invertida \não deve ser confundida com a barra normal /. Elas não fazem a mesma coisa.

Altere a string fornecida para uma string com aspas simples no início e no fim e sem caracteres de escape.

No momento, a <a>tag na string usa aspas duplas em todos os lugares. Você precisará alterar as aspas externas para aspas simples para poder remover os caracteres de escape.

*/

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';