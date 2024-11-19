/*Acessar matrizes multidimensionais com índices
Uma maneira de pensar em um array multidimensional é como um array de arrays . Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se refere às entradas no array mais externo (o primeiro nível), e cada par adicional de colchetes se refere ao próximo nível de entradas dentro.

Exemplo

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
Neste exemplo, subarraytem o valor [[10, 11, 12], 13, 14], nestedSubarraytem o valor [10, 11, 12]e elementtem o valor 11.

Nota: Não deve haver espaços entre o nome do array e os colchetes, como array [0][0]e even isso array [0] [0]não é permitido. Embora o JavaScript consiga processar isso corretamente, isso pode confundir outros programadores que leem seu código.

Usando a notação de colchetes, selecione um elemento de myArraytal que myDataseja igual a 8.

 */

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];