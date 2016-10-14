const heapsort = (arr) => {
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function maxHeapify (start, end) {
    let parant = start;
    let leftson = 2 * start + 1;
    let rightson = leftson + 1;
    let largestson;
    if (leftson >= end) return;
    if (rightson >= end) {
      largestson = leftson;
    } else {
      largestson = arr[leftson] > arr[rightson] ? leftson : rightson;
    }
    if (arr[largestson] > arr[parant]) {
      swap(parant, largestson);
      maxHeapify(largestson, end);
    }
  }

  function buildMaxHeap () {
    for (let i=Math.floor(arr.length/2)-1; i>=0; i--) {
      maxHeapify(i, arr.length)
    }
  }

  buildMaxHeap();
  console.log('builded heap:')
  console.log(arr);
  for (let i=arr.length-1; i>0; i--) {
    swap(0, i);
    maxHeapify(0, i);
  }


}

let data = [4, 7, 0, 2, 82, 1, 9, 40, 193];
console.log('origin:')
console.log(data);
heapsort(data);
console.log('result:')
console.log(data);
