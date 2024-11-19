/*Explore as diferenças entre as palavras-chave var e let
Um dos maiores problemas em declarar variáveis ​​com a varpalavra-chave é que você pode facilmente sobrescrever declarações de variáveis:

var camper = "James";
var camper = "David";
console.log(camper);
No código acima, a campervariável é declarada originalmente como James, e então é substituída para ser David. O console então exibe a string David.

Em um aplicativo pequeno, você pode não encontrar esse tipo de problema. Mas, à medida que sua base de código se torna maior, você pode acidentalmente sobrescrever uma variável que não pretendia. Como esse comportamento não gera um erro, procurar e corrigir bugs se torna mais difícil.

Uma palavra-chave chamada letfoi introduzida no ES6, uma grande atualização do JavaScript, para resolver esse problema potencial com a varpalavra-chave. Você aprenderá sobre outros recursos do ES6 em desafios posteriores.

Se você substituir varpor letno código acima, isso resultará em um erro:

let camper = "James";
let camper = "David";
O erro pode ser visto no console do seu navegador.

Então var, diferentemente de , quando você usa let, uma variável com o mesmo nome só pode ser declarada uma vez.

Atualize o código para que ele use apenas a letpalavra-chave. */

let catName = "Oliver";
let catSound = "Meow!";