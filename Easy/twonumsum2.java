  //function twoNumberSum(array, targetSum) {
 Write your code here.
const nums ={};
	for (const num of array){
		const potentialMatch = targetSum - num;
		if (potentialMatch in nums) {
			return [potentialMatch, num]
		}
		else {
			nums[num] = true;
		}
	}
	return [];
}
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
