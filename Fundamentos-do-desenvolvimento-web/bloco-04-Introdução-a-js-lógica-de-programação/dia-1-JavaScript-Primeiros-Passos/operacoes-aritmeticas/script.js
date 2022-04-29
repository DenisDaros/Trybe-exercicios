// Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .

let patientId = 50;
// number
let isEnrolled = true;
// boolean
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
// object
const patientEmail = 'ana@email.com';  
// string

console.log(typeof variavel)

// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
const base = 5;
const height = 8;
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
const area  = base * height;
console.log(area);
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const perimeter = (height + base) * 2
console.log(perimeter);