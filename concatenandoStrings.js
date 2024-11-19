/*Algoritmos e estruturas de dados JavaScript legados
JavaScript básico
Concatenando Strings com o Operador Mais
Em JavaScript, quando o +operador é usado com um Stringvalor, ele é chamado de operador de concatenação . Você pode construir uma nova string a partir de outras strings concatenando -as.

Exemplo

'My name is Alan,' + ' I concatenate.'
Nota: Cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-los.

Exemplo:

const ourStr = "I come first. " + "I come second.";
A string I come first. I come second.seria exibida no console.

Construa myStra partir das strings This is the start.e This is the end.usando o +operador. Certifique-se de incluir um espaço entre as duas strings.*/

let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";