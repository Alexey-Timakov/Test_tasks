// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
// the first element will represent a list of comma-separated numbers sorted in ascending order,
// the second element will represent a second list of comma-separated numbers (also sorted).
// Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
// If there is no intersection, return the string false.

// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10
const inputStrings: string[] = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function FindIntersection(strArr: string[]): string {
  let result: string = "";
  const firstArr: number[] = strArr[0].split(",").map(i => +i);
  const secondArr: number[] = strArr[1].split(",").map(i => +i);
  
  firstArr.forEach(itemA => {
    secondArr.forEach(itemB => {
      if (itemA === itemB) {
        if (result.length !== 0) result = result.concat(",");
        result = result.concat(itemB.toString());
      }
    })
  })
  return result.length === 0 ? "false" : result; 
}
   
console.log(FindIntersection(inputStrings));