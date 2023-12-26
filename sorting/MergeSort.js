function merge(arr1,arr2){
    let i=0
    let j=0
    let result=[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i++])
        }
        else{
            result.push(arr2[j++])
        }}
            while(j<arr2.length){
                result.push(arr2[j++])
            }
            while(i<arr1.length){
            result.push(arr1[i++])
        }
    return result;
}

// console.log(mergeSort([2,4,8],[1,7,11,13,17]));

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2)
    let arr1=mergeSort(arr.slice(0,mid))
    let arr2=mergeSort(arr.slice(mid))
    return merge(arr1,arr2);
}

console.log(mergeSort([4,5,2,1]));