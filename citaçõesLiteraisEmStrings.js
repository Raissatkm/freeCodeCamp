/*Escapando Citações Literais em Strings
Ao definir uma string, você deve começar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma aspa literal: "or 'dentro da sua string?

Em JavaScript, você pode evitar que uma aspa seja considerada uma aspa de fim de string colocando uma barra invertida ( \) antes da aspa.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
Isso sinaliza ao JavaScript que a citação a seguir não é o fim da string, mas deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você obteria:

Alan said, "Peter is learning JavaScript".
Use barras invertidas para atribuir uma string à myStrvariável para que, se você a imprimisse no console, você veria:

*/

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
