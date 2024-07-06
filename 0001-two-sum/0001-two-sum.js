/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, target) {
  let originalArr = [...arr];
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      let i = originalArr.indexOf(arr[left]);
      let j = originalArr.indexOf(arr[right]);
      if (i === j) {
        for (let k = 0; k < originalArr.length; k++) {
          if (originalArr[k] === arr[right] && k !== i) {
            j = k;
            break;
          }
        }
      }
      return [i, j];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 
console.log(twoSum([3, 3], 6)); 