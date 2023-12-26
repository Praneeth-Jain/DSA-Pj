function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

// console.log(getDigit(123,1));

function maxDigitCount(arr){
    function digitCount(num){
        if(num===0) return 1;
        return Math.floor(Math.log10(Math.abs(num))+1)
    }
    var max=digitCount(arr[0])
    for(i=1;i<arr.length;i++){
        if(digitCount(arr[i])>max){
            max=digitCount(arr[i])
        }
    }
    return max;
}

// console.log(maxDigitCount([1,22777777,43467]));

function radixSort(nums){
    let maxCount=maxDigitCount(nums)
    for(k=0;k<maxCount;k++){
        let bucketList=Array.from({length:10} ,()=>[])
        for(i=0;i<nums.length;i++){
            bucketList[getDigit(nums[i],k)].push(nums[i])
        }
        nums=[].concat(...bucketList)
    }
    return nums;
}

console.log(radixSort([22,1,5555,4443,8976,333,98]));