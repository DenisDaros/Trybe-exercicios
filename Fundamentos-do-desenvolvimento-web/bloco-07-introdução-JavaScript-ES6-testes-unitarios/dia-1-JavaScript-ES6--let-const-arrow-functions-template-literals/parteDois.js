// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const factorial = number => {
    let result = 1;

    for (let index = 1; index <= number; index += 1) {
        result = result * index;
    }

    return result;
}

console.log(factorial(5));

// Outra maneira de resolver
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));



// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
//       longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const retornaMaiorPalavra = frase => {
    let wordArray = frase.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(retornaMaiorPalavra("Antonio foi no banheiro e não sabemos o que aconteceu"));