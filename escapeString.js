/*Sequências de escape em strings
Aspas não são os únicos caracteres que podem ser escapados dentro de uma string. Sequências de escape permitem que você use caracteres que você não conseguiria usar em uma string.

Código	Saída
\'	aspas simples
\"	aspas duplas
\\	barra invertida
\n	nova linha
\t	aba
\r	retorno de carro
\b	retrocesso
\f	alimentação de formulário
Observe que a barra invertida em si deve ser escapada para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir à única variável myStrusando sequências de escape.

Primeira linha
    \SegundaLinha
Terceira Linha
Você precisará usar sequências de escape para inserir caracteres especiais corretamente. Você também precisará seguir o espaçamento como aparece acima, sem espaços entre sequências de escape ou palavras.

Observação: o recuo SecondLineé obtido com o caractere de escape de tabulação, não com espaços.

*/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";