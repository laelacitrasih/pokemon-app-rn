function findDisapperared(arrayInput) {
    /**
     * 
     * Constraints:
        * n == nums.length
        * 1 <= n <= 105
        * 1 <= nums[i] <= n

        Examples:
        const nums = [4,3,2,7,8,2,3,1]
        findDisapperared(nums)  ➞ [5,6]

        const nums = [1,1]
        findDisapperared(nums)  ➞ [2]  
     */

        let n = arrayInput.length
        let result = []

        for (let i=1; i<=n; i++){
            if (arrayInput.indexOf(i)<0){
                result.push(i)
            }
        }

        return result
}

let nums = [4,3,2,7,8,2,3,1]
console.log(`nums = [${nums}], findDisapperared(nums) = [${findDisapperared(nums)}]`)

nums = [1,1]
console.log(`nums = [${nums}], findDisapperared(nums) = [${findDisapperared(nums)}]`)
