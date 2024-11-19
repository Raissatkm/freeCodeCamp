/*Passando valores para funções com argumentos
Parâmetros são variáveis ​​que agem como marcadores de posição para os valores que devem ser inseridos em uma função quando ela é chamada. Quando uma função é definida, ela é tipicamente definida junto com um ou mais parâmetros. Os valores reais que são inseridos (ou "passados" ) em uma função quando ela é chamada são conhecidos como argumentos .

Aqui está uma função com dois parâmetros, param1e param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Então podemos chamar testFunassim: testFun("Hello", "World");. Passamos dois argumentos string, Helloe World. Dentro da função, param1será igual à string Helloe param2será igual à string World. Note que você poderia chamar testFunnovamente com argumentos diferentes e os parâmetros assumiriam o valor dos novos argumentos.

Crie uma função chamada functionWithArgsque aceita dois argumentos e envia a soma deles para o console de desenvolvimento.
Chame a função com dois números como argumentos.*/


function functionWithArgs(argumento1, argumento2){
    console.log(argumento1 + argumento2)
  
  
  
  }
  functionWithArgs(2, 3);