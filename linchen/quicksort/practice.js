function quicksort(arr) {
  function sort(arr, head, tail) {
    if (tail - head == 1) {
      if (arr[head] > arr[tail]) {
        let temp = arr[head];
        arr[head] = arr[tail];
        arr[tail] = temp;
      }
    }
    if (tail - head > 1) {
      let over = false;
      let direction = 'left';
      let flag = arr[head];
      let index = head;
      let i = head, j=tail;

      function left() {
        // console.log('left')
        direction = 'right';
        for (; j>index; j--) {
          // console.log(`${arr[j]}`)
          if (arr[j] < flag) {
            // console.log(`!!: ${j} ${arr[j]}`)
            arr[index] = arr[j];
            index = j;
            return;
          }
        }
        over=true;
      }

      function right() {
        // console.log('right')
        direction = 'left';
        for (; i<index; i++) {
          // console.log(`${arr[i]}`)
          if (arr[i] > flag) {
            // console.log(`!!: ${i} ${arr[i]}`)
            arr[index] = arr[i];
            index = i;
            return;
          }
        }
        over=true;
      }

      while (!over) {
        if (direction == 'left') {
          left()
        } else {
          right()
        }
      }
      // console.log('over')

      arr[index] = flag;
      sort(arr, head, index-1);
      sort(arr, index+1, tail);

    }
  }

  sort(arr, 0, arr.length-1);
}

var data = [4,7,0,2,8,1,9,4];
quicksort(data);
console.log(data);
