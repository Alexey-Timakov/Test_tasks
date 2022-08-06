// На входе дается массив строк. Необходимо определить строки-анаграммы и вывести их в двумерный массив. Строки, которые не являются анаграммами, в итоговый массив не выводятся.

const initialStrings: string[] = ["насос", "ладно", "сосна", "долан", "ладон", "ландо", "оланд", "ндола", "снасо", "ансос", "привет", "ветпри", "тевипр", "ретвип", "подорожник", "хорошо", "хошоро"];

interface WordSymbolsMap {
  [key: string]: number
}

// Функция создания счетчика симовлов в слове. Не учитываются пробелы и регистр:
const makeWordSymbolsMap = (testString: string): WordSymbolsMap => {
  const wordMap = {} as WordSymbolsMap;

  for (let char of testString.trim().toLowerCase().split("").sort()) {
    if (wordMap[char]) wordMap[char]++;
    else wordMap[char] = 1;
  }
  return wordMap;
}

// Проверка массива строк:
const answerStrings: string[][] = [];
let filteredArray: string[] = [];

const checkArrayOfStrings = (arrayOfStrings: string[]) => {
  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    const testString = arrayOfStrings[i];
    if (testString.length) {
      const wordMapForTestString = makeWordSymbolsMap(testString);
      const answerElements: string[] = [];

      for (let j = i + 1; j < arrayOfStrings.length; j++) {
        const stringToCompare = arrayOfStrings[j]
        const wordMapForStringToCompare = makeWordSymbolsMap(stringToCompare);
        if (JSON.stringify(wordMapForTestString) === JSON.stringify(wordMapForStringToCompare)) {
          answerElements.push(stringToCompare);
          arrayOfStrings[j] = "";
          arrayOfStrings[i] = "";
        }
      }

      if (answerElements.length !== 0) {
        answerElements.unshift(testString);
        answerStrings.push(answerElements);
      }
    }
  }

  // Оставшеся элементы без анаграмм для самопроверки:
  filteredArray = arrayOfStrings.filter(Boolean);
}

checkArrayOfStrings(initialStrings);


console.log("Строки анаграммы:");
console.log(answerStrings);
console.log("Строки без анаграмм:");
console.log(filteredArray);