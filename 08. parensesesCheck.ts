// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched
// and each one is accounted for. Otherwise return 0.
// For example: if str is "(hello (world))", then the output should be 1,
//but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up.
//Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

// Examples
// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1

const inputString: string = "(c(oder)) b(yte)";

const parensesesStack: string[] = [];

const checkParenseses = (str: string): number => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      parensesesStack.push("(");
    }
    if (str[i] === ")") {
      if (parensesesStack.length === 0) {
        return 0;
      } else {
        parensesesStack.pop();
      }
    }
  }
  return parensesesStack.length === 0 ? 1 : 0; 
} 

console.log(checkParenseses(inputString));