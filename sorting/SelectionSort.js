 // function selectSort(arr){
//     let min;
//     let minInd;
//     for(i=0;i<arr.length;i++){
//         min=arr[i]
//         minInd=i
//         for(j=i;j<arr.length;j++){
//             console.log(min,arr[j]);
//             if(arr[j]<min){
//                 min=arr[j]
//                 minInd=j
//             }
//                 if(j==arr.length-1){
//                     arr[minInd]=arr[i]
//                     arr[i]=min
//                          }
//             console.log(arr);
//         }
//     }
//     return arr;
// }

// console.log(selectSort([4,6,7,2,3 ]));

//this was my solution anyway following is best pratice

function bubbleSort(arr){

    for(i=0;i<arr.length;i++){
        var lowest=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest=j
            }
        }
            if(i!==lowest){
                temp=arr[i]
                arr[i]=arr[lowest]
                arr[lowest]=temp
            }
        
    }
    return arr;
}

console.log(bubbleSort([4,6,7,2,3]));