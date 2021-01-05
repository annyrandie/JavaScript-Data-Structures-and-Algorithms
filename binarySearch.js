function binarySearch(list, item) {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    let guess = list[mid];
    if(guess === item) return mid;
    else if (guess > item) {
      high = mid -1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
