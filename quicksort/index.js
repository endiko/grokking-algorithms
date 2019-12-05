function quicksort(arr, left = 0, right = arr.length - 1) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  function getPivotIndex(arr, left = 0, right = arr.length) {
    let pivot = arr[left];
    let swapIndex = left;
    for (let i = left + 1; i <= right; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
    swap(arr, left, swapIndex);
    return swapIndex;
  }
  let pivotIndex = getPivotIndex(arr, left, right);
  if (left < right) {
    quicksort(arr, left, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quicksort([9, 3, 7, 6, 1, 11, 5, 5, 8, 19]).join(' '));
console.log(quicksort([2, 1, 4, 5, 6, 1, 5, 6]).join(' '));
