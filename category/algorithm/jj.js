/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let result = [];
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    maxIndex = getMaxIndex(arr);
    if (maxIndex > 0) {
      result.push(maxIndex + 1);
    }
    reverse(arr, maxIndex);
    reverse(arr, arr.length - 1);
    console.log('arr', arr)
    result.push(arr.length);
    console.log('arr', arr)
    arr.pop();
  }
  return result;
};

function getMaxIndex(arr) {
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function reverse(arr, k) {
  if (k < 1) return;
  let i = 0;
  let j = k;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j--;
    i++;
  }
}
const arr = [3,2,4,1]
pancakeSort(arr)
console.log(arr)
