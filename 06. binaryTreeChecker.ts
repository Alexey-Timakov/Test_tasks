// Have the function TreeConstructor(strArr) take the array of strings stored in strArr,
// which will contain pairs of integers in the following format:
// (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1.

// Your program should, in this case, return the string true because a valid binary tree can be formed.
// If a proper binary tree cannot be formed with the integer pairs, then return the string false.
// All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true

// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false

const inputArray: string[] = ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];

const modifyInputStrToNum = (stringArray: string[]): number[][] => {
  const modifiedStrArr = stringArray.map(item => {
    return item
      .replace(/[()]/gm, "")
      .split(",")
      .map(item => +item)
  })
  return modifiedStrArr;
}

const modifiedInputNum = modifyInputStrToNum(inputArray);

const sortedChildElements = (numberArray: number[][]): number[] => {
  return numberArray.map(item => item.shift()!).sort();
}

const childElements = sortedChildElements(modifiedInputNum);

const sortedParentElements = (numberArray: number[][]) => {
  return numberArray.map(item => item.pop()!).sort();
}

const parentElements = sortedParentElements(modifiedInputNum);

const isChildElementsUnique = (numberArray: number[]): boolean => {
  // console.log(numberArray);
  let result = true;
  let i = 1;
  while (i <= numberArray.length) {
    if (numberArray[i - 1] === numberArray[i]) {
      result = false;
      break
    };
    i++;
  }
  // console.log(result);
  return result;
}

const isParentElementsTwoOrLess = (numberArray: number[]): boolean => {
  // console.log(numberArray);
  let result = true;
  let i = 1;
  while (i < numberArray.length - 1) {
    if (numberArray[i - 1] === numberArray[i] && numberArray[i] === numberArray[i + 1]) {
      result = false;
      break;
    };
    i++
  }
  // console.log(result);
  return result;
}
console.log(isChildElementsUnique(childElements) && isParentElementsTwoOrLess(parentElements));