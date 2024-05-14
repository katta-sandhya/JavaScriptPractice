const arr = [40, 100, 1, 5, 25, 10];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // Swap arr[i] and arr[j]
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
console.log(arr); // Output: [1, 5, 10, 25, 40, 100]
