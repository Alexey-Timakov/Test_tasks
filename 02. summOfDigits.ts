// На вход даны числа N и К. Необходимо найти все K-значные числа, сумма цифр которых будет равна N

const summOfDigitsInNumber: number = 15; // N
const digitsCount: number = 3; // K
const answers: number[] = [];

// Ищем диапазон значенийЖ
const minValue: number = 10 ** (digitsCount - 1);
const maxValue: number = (10 ** digitsCount) - 1;


// 
const findSummOfDigits = (num: number): number => {
  const summOfDigits = num
    .toString()
    .split("")
    .map(item => +item)
    .reduce((total, current) => total + current);
  return summOfDigits;
}

// Здесь конечно лучше было бы придумать какой-то более умный метод перебора значений:
for (let i = minValue; i <= maxValue; i++) {
  const testValue = findSummOfDigits(i);
  if (testValue === summOfDigitsInNumber) {
    answers.push(i);
  }
}

console.log("Find summ of digit for values from ", minValue, "to", maxValue, ":");
console.log(answers);