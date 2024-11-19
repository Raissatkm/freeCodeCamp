/*Declare uma variável somente leitura com a palavra-chave const
A palavra-chave letnão é a única maneira nova de declarar variáveis. No ES6, você também pode declarar variáveis ​​usando a constpalavra-chave.

consttem todos os recursos incríveis que lettem, com o bônus adicional de que as variáveis ​​declaradas usando constsão somente leitura. Elas são um valor constante, o que significa que uma vez que uma variável é atribuída com const, ela não pode ser reatribuída:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
O console exibirá um erro devido à reatribuição do valor de FAV_PET.

Você deve sempre nomear variáveis ​​que não deseja reatribuir usando a constpalavra-chave. Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria permanecer constante.

Nota: É comum que os desenvolvedores usem identificadores de variáveis ​​em maiúsculas para valores imutáveis ​​e minúsculas ou camelCase para valores mutáveis ​​(objetos e arrays). Você aprenderá mais sobre objetos, arrays e valores imutáveis ​​e mutáveis ​​em desafios posteriores. Também em desafios posteriores, você verá exemplos de identificadores de variáveis ​​em maiúsculas, minúsculas ou camelCase.

Altere o código para que todas as variáveis ​​sejam declaradas usando letor const. Use letquando quiser que a variável mude e constquando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com constpara estar em conformidade com as práticas comuns. Não altere as strings atribuídas às variáveis.*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line