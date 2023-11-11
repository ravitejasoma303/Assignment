function bubbleSortDescending(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        // Swap elements if they are in the wrong order
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Example usage:
const unsortedArray = [5, 1, 4, 2, 8];
const sortedArray = bubbleSortDescending(unsortedArray);
console.log(sortedArray); // Output: [8, 5, 4, 2, 1]