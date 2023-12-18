function bubbleSort(arr){
    var noSwap;
    for(i=arr.length;i>0;i--){
        noSwap=true;
        let temp;
        for(j=0;j<i-1;j++){
            console.log(arr[j],arr[j+1]);
            if(arr[j]>arr[j+1]){
                noSwap=false
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([1,7,2,3,4,5]));

