/*Espaços em branco de palavras
Você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios. Você então preenche as partes faltantes com palavras de sua escolha de uma forma que a frase completa faça sentido.

Considere esta frase:

It was really ____, and we ____ ourselves ____.
Esta frase tem três partes faltando - um adjetivo, um verbo e um advérbio, e podemos adicionar palavras de nossa escolha para completá-la. Podemos então atribuir a frase completa a uma variável da seguinte forma:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
Neste desafio, fornecemos a você um substantivo, um verbo, um adjetivo e um advérbio. Você precisa formar uma frase completa usando palavras de sua escolha, junto com as palavras que fornecemos.

Você precisará usar o operador de concatenação de strings +para construir uma nova string, usando as variáveis ​​fornecidas: myNoun, myAdjective, myVerb, e myAdverb. Você então atribuirá a string formada à wordBlanksvariável. Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará levar em conta os espaços na sua string, para que a frase final tenha espaços entre todas as palavras. O resultado deve ser uma frase completa.*/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this lin
