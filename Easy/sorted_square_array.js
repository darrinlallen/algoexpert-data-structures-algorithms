function sortedSquaredArray(array) {
  // Write your code here.
  const sortedSquares = new Array(array.length).fill(0);
  let smallIdx =0;
  let largeIdx = array.length -1;

  for (let idx = array.length -1; idx >= 0;idx--){
    const smallVal = array[smallIdx];
    const largeVal = array[largeIdx];

    if (Math.abs(smallVal) > Math.abs(largeVal)){
      sortedSquares[idx] = smallVal * smallVal;
      smallIdx++
    }
    else {
      sortedSquares[idx] = largeVal * largeVal;
      largeIdx--
    }
  }
  return sortedSquares;
}
