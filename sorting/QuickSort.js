

// function getPivot(arr,start=0,end=arr.length+1){
//     function swap(array,a,b){
//         let temp=0
//         temp=array[a]
//         array[a]=array[b]
//         array[b]=temp
//     }
//     pivotInd=start
//     pivot=arr[start]
//     for(i=start+1;i<arr.length;i++){
//         if(pivot>arr[i]){
//             pivotInd++
//             swap(arr,pivotInd,i)
//         }
//     }
//     swap(arr,pivotInd,start)
//     return pivotInd;
// }


// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//         let p=getPivot(arr,left,right)
//         quickSort(arr,left,p-1)
//         quickSort(arr,p+1,right)
//     }
//         return arr;
// }



function getPivot(arr,start=0,end=arr.length){
    function swap(a,i,j){
        var temp=a[i]
        a[i]=a[j]
        a[j]=temp
    }
    pivotInd=start
    pivot=arr[start]
    for(i=start+1;i<arr.length;i++){
        if(pivot>arr[i]){
            pivotInd++
            swap(arr,pivotInd,i)
        }
    }
    swap(arr,pivotInd,start)
    return pivotInd;
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        var ind=getPivot(arr,left,right)
        quickSort(arr,left,ind-1)
        quickSort(arr,ind+1,right)
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]))