// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

const userInputName: string = "u__hello_world123";

//1. The username is between 4 and 25 characters.
const checkLength = (checkString: string): boolean => {
  if (checkString.length < 4 || checkString.length > 25) return false;
  else return true;
}

//2. It must start with a letter.
const checkIsFirstCharLetter = (checkString: string): boolean => {
  const firstChar = checkString.slice(0, 1);
  if (firstChar.match(/[a-zA-Z]/g) !== null) return true;
  else return false;
}

//3. It can only contain letters, numbers, and the underscore character.
const checkForValidChars = (checkString: string): boolean => {
  const invalidChars = checkString.match(/[^a-zA-Z0-9_]/g);
  if (invalidChars !== null) return false;
  else return true;
}

//4. It cannot end with an underscore character.
const checkIsLastCharNotUnderscore = (checkString: string): boolean => {
  const lastChar = checkString.slice(-1);
  if (lastChar !== "_") return true;
  else return false;
}

const result = checkLength(userInputName)
  && checkIsFirstCharLetter(userInputName)
  && checkForValidChars(userInputName)
  && checkIsLastCharNotUnderscore(userInputName);

console.log(result);