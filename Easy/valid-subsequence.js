function isValidSubsequence(array, sequence) {
  // Write your code here.
 let seqIdx = 0;
 let arrIdx = 0;
while (arrIdx < array.length && seqIdx < sequence.length){
	  if (array[arrIdx] === sequence[seqIdx]){
			seqIdx++;
		}
	arrIdx++;
}
	return seqIdx === sequence.length;
}