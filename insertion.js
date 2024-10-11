function insertionSort(arr) {
  // Iterate through each element in the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // The element to be inserted
    let j = i - 1; // Start from the end of the sorted part

    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--; // Move to the left
    }
    arr[j + 1] = current; // Insert the current element into its correct position
  }

  return arr; // Return the sorted array
}

// Example usage
let array = [5, 2, 9, 1, 5, 6];
let sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
