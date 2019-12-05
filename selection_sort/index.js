// Написать функцию сортировки выбором, которая должна отсортировать массив по возрастанию

function findMinIndex(arr) {
  let minIndex = 0;
  let minElement = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}

function selectionSort(arr) {
  let copyArray = [...arr];
  let sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = findMinIndex(copyArray);
    let minElement = copyArray[minIndex];

    copyArray.splice(minIndex, 1);
    sortedArray.push(minElement);
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // Result: [2, 3, 5, 6, 10]

console.log(selectionSort([-23, 30, 106, 20, 109]));
