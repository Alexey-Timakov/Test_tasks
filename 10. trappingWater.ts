// Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1,
// compute how much water it is able to trap after raining.
// Input: arr[] = {2, 0, 2}
// Output: 2
// Input: arr[]   = {3, 0, 2, 0, 4}
// Output: 7
// Input: arr[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
// Output: 6

const inputArr: number[] = [3, 0, 2, 0, 4];
// 1 approach:
const calculateAmount1st = (arr: number[]): number => {
  let result: number = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let maxLeft = arr[i];
    for (let j = 0; j < i; j++) {
      maxLeft = Math.max(maxLeft, arr[j]);
    }
    let maxRigth = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      maxRigth = Math.max(maxRigth, arr[k]);
    }
    const temp = Math.min(maxLeft, maxRigth) - arr[i];
    result += temp;
  }
  return result;
}

// const amount = calculateAmount1st(inputArr);
// console.log(amount);

//2nd approach:
const calculateAmount2nd = (arr: number[]): number => {
  const leftMax = [] as number[];
  const rigthMax = [] as number[];
  let result: number = 0;

  leftMax[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }
  // console.log(leftMax);


  rigthMax[arr.length - 1] = arr[arr.length - 1];
  for (let j = arr.length - 2; j >= 0; j--) {
    rigthMax[j] = Math.max(rigthMax[j + 1], arr[j]);
  }
  // console.log(rigthMax);

  for (let k = 0; k < arr.length; k++) {
    result += Math.min(leftMax[k], rigthMax[k]) - arr[k];
  }
  return result;
}


const amount = calculateAmount2nd(inputArr);
console.log(amount);
