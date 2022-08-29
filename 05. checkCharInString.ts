// const input: string[] = ["ahffaksfajeeubsne", "jefaa"]; // Answer: "aksfaje"
// const input: string[] = ["aabdccdbcacd", "aad"]; // Answer: "aabd"
const input: string[] = ["aaffhkksemckelloe", "fhea"];
const stringToCheck: string = input[0];
const charsToCheck: string = input[1];
//

const charLengs = charsToCheck.length;

interface WordSymbolsMap {
  [key: string]: number
}

// Создание карты символов для строк:
const makeWordSymbolsMap1 = (testString: string): WordSymbolsMap => {
  const wordMap = {} as WordSymbolsMap;

  for (let char of testString.trim().toLowerCase().split("").sort()) {
    if (wordMap[char]) wordMap[char]++;
    else wordMap[char] = 1;
  }
  return wordMap;
}

const charsToCheckMap = makeWordSymbolsMap1(charsToCheck);

// Сравнение двух карт символов. Проверяется вхождение искомых символов из одного массива в другой + общее количество разных символов.
// Если в тестовой карте количество вхождения символов >= количества в искомой карте, то тестовую строку считаем валидной.
const compareWordMaps = (testMap: WordSymbolsMap, checkMap: WordSymbolsMap) => {
  let result: string = "";

  Object.entries(checkMap).forEach(([key, value]) => {
    if (testMap[key] && testMap[key] >= checkMap[key]) {
      result = result.concat(key);
    }
  })

  if (result.length >= Object.keys(checkMap).length) {
    return result;
  }
}

// Поиск конечной позиции в тестовой строке:
const findEndPosition = (test: string): number => {
  let result = test.length - 1;
  for (let i = charLengs; i < test.length; i++) {
    const testSubStr = test.slice(0, i);
    const testSubStrMap = makeWordSymbolsMap1(testSubStr);
    if (compareWordMaps(testSubStrMap, charsToCheckMap)) {
      console.log(i, testSubStr);
      result = i;
      findStartPosition(testSubStr)
      break;
    }
  }
  return result;
}

// Поиск начальной позиции в тестовой строке:
function findStartPosition(test: string): number {
  let result = 0;
  for (let i = test.length - charLengs; i > 0; i--) {
    const testSubStr = test.slice(i);
    const testSubStrMap = makeWordSymbolsMap1(testSubStr);
    if (compareWordMaps(testSubStrMap, charsToCheckMap)) {
      console.log(i, testSubStr);
      result = i;
      break;
    }
  }
  return result;
}

const start = () => {
  findEndPosition(stringToCheck);
}

start();