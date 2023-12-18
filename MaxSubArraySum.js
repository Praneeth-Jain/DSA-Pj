// function maxSubArraySum(arr,num){
//     let max=-Infinity
//     if(num>arr.length){
//         return null
//     }
//     for(let i=0;i<arr.length-num+1;i++){
//         let temp=0
//         for(let j=0;j<num;j++){
//             temp+=arr[i+j]
//         }
//         if(temp>max){
//             max=temp
//         }
//     }
//     return max;
// }


// console.log(maxSubArraySum([1,5,6,2,3,9,8,5],4));

//This above method has O(n2) almost

function maxSubArraySum(arr,num){
    if(arr.length<num)return null;
    let maxSum=0;
    let tempSum=0
    for(i=0;i<num;i++){
        maxSum+=arr[i]
    }
    // console.log(maxSum);
    tempSum=maxSum;
    for(i=num;i<arr.length;i++){
        tempSum=tempSum-arr[i-num]+arr[i]
        maxSum=Math.max(tempSum,maxSum)
        // console.log(maxSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([1,5,6,2,3,9,8,5],3)); 