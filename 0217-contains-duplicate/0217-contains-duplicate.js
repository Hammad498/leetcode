/**
 * @param {number[]} nums
 * @return {boolean}
 */

  function containsDuplicate(nums) {
    let unique=new Set();

    for(let ele of nums){
    if(unique.has(ele)){
    console.log(true);
    return true;
    }
    unique.add(ele)
    }
    console.log(false);
    return  false;
};

containsDuplicate([1,2,3,1])
containsDuplicate([1,2,3,4])
containsDuplicate([1,1,1,3,3,4,3,2,4,2])