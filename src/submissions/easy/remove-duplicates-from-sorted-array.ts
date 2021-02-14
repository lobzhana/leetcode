function removeDuplicates(nums: number[]): number {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] === nums[index + 1]) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }

  return nums.length;
}