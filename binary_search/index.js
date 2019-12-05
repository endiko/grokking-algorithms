function binarySearch(arr, num) {
  let start = 0;
  let len = arr.length - 1;
  let count = 0;

  while (start <= len) {
    let mid = Math.floor((start + len) / 2);
    let guessNum = arr[mid];

    if (guessNum > num) {
      len = mid - 1;
    } else if (guessNum < num) {
      start = mid + 1;
    } else if (guessNum === num) {
      return {
        index: mid,
        count: count + 1
      };
    }
    count++;
  }

  return {
    message: 'Nothing found',
    count: count
  };
}

let arr = [1, 4, 7, 8, 19, 28, 67, 89, 99];

console.log(binarySearch(arr, 77));
