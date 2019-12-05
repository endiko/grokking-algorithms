// 4.1

let arr = [2, 4, 6];

function sumArr(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + sumArr(arr.slice(1));
}

// console.log(`4.1: ${sumArr(arr)}`);

//  4.2

function countElems(arr) {
  if (arr.length === 0) return 0;
  return 1 + countElems(arr.slice(1));
}

// console.log(`4.2: ${countElems([1])}`);

//  4.3

function findMaxValue(arr) {
  if (arr.length === 0) return 0;

  return Math.max(arr[0], findMaxValue(arr.slice(1)));
}

// console.log(`4.3: ${findMaxValue([5, 100, 5686868, -575757, 45, 111])}`);

// 4.4

function binarySearchWithRecursion(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) return 'Вы не задали массив';
  //   if (arr.length === 1) {
  //     let guessNum = arr[0];

  //     if (guessNum === num) {
  //       return `Элемент ${num} присутствует на позиции ${arr[num]}`;
  //     } else {
  //       return `Элемент ${num} отсутствует`;
  //     }
  //   } else {
  let mid = Math.floor((start + end) / 2);
  let guessNum = arr[mid];
  if (guessNum === num) {
    return `Элемент ${num} присутствует на позиции ${arr[mid]}`;
  } else {
    if (guessNum > num) {
      return binarySearchWithRecursion([...arr].splice(start, mid - 1), num);
    } else {
      return binarySearchWithRecursion([...arr].splice(mid + 1, end), num);
    }
  }
  //   }
}

// console.log(`4.4: ${binarySearchWithRecursion([1, 2, 3, 4, 5, 6, 7], 0)}`);

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  const lessArr = [];
  const greaterArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lessArr.push(arr[i]);
    } else {
      greaterArr.push(arr[i]);
    }
  }

  return [...quickSort(lessArr), pivot, ...quickSort(greaterArr)];
}

function quickSort2(arr) {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor((0 + arr.length) / 2);
  let pivot = arr[pivotIndex];

  const lessArr = [];
  const greaterArr = [];

  splitIntoArrays(0, pivotIndex);
  splitIntoArrays(pivotIndex + 1, arr.length);

  function splitIntoArrays(start, end) {
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        lessArr.push(arr[i]);
      } else {
        greaterArr.push(arr[i]);
      }
    }
  }

  return [...quickSort2(lessArr), pivot, ...quickSort2(greaterArr)];
}

console.log(quickSort2([110, 15, 9, 3]));
