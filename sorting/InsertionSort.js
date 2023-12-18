function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        var currentVal=arr[i]
        for(j=i-1;j>=0 && arr[j]>currentVal;j--){
            arr[j+1]=arr[j]
        }
        console.log("Before sort",arr);
        arr[j+1]=currentVal
        console.log("after sort",arr);
    }
    return arr;
}

console.log(insertionSort([4,3,6,1]));