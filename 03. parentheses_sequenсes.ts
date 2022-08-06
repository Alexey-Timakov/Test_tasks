// Дано число N. Необходимо найти и вывести в консоль все правильные скобочные последовательности с числом N открывающих и закрывающих скобок:

const parenthesesMaxNumber: number = 3;
const bothParenthesisMaxNumber: number = parenthesesMaxNumber * 2;

const openParenthesis: string = '(';
const closeParenthesis: string = ')';

let openParenthesesCounter: number = 0;
let closeParenthesesCounter: number = 0;

let sequence: string = '';

const generateParanthesisSequence = (parenthesesMaxNumber: number, openParenthesesCounter: number, closeParenthesesCounter: number, sequence: string): void => {
  if (openParenthesesCounter + closeParenthesesCounter === bothParenthesisMaxNumber) {
    console.log(sequence);
    return;
  }

  if (openParenthesesCounter < parenthesesMaxNumber) {
    generateParanthesisSequence(parenthesesMaxNumber, openParenthesesCounter + 1, closeParenthesesCounter, sequence + openParenthesis);
  }

  if (openParenthesesCounter > closeParenthesesCounter) {
    generateParanthesisSequence(parenthesesMaxNumber, openParenthesesCounter, closeParenthesesCounter + 1, sequence + closeParenthesis);
  }
};

generateParanthesisSequence(parenthesesMaxNumber, openParenthesesCounter, closeParenthesesCounter, sequence);