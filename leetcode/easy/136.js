/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，
 * 其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 * @testCase [2,2,1] => 1
 * @testCase [4,1,2,1,2] => 4
 * @testCase [1] => 1
 * @testCase [-1,-1,-2] => -2
 * @testCase [1,2,1,2,3] => 3
 * @testCase [1,2,1,2,3,3,4] => 4
 */

const singleNumber = function (nums = []) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap.has(nums[i])) {
      hashMap.set(nums[i], 1);
    } else {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    }
  }
  let end = null
  hashMap.forEach((item,key) => {
    if(hashMap.get(key)=== 1){
        end = key
    }
  });
  return end
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1,2,1,2,3]));
