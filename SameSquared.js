// function same(arr1,arr2){
//     let len=0;
//     if(!arr1.length===arr2.length){
//         return false
//     }            
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]**2==arr2[j]){
//                 len++
//             }
//         }
//     }
//     if(len===arr1.length&&len===arr2.length){
//         return true;
//     }
//     return false
//     }

// console.log(same([1,3,6],[9,1,36]));


//method using inbuilt methods

// function same(arr1,arr2){
//     if(!arr1.length===arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         let correctIndex=arr2.indexOf(arr1[i]**2)
//         if(correctIndex==-1){
//             return false
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

//these above solutions are of complexity of o(n^2) so lets use frequency cvounter method

function same(arr1,arr2){
    if(!arr1.length==arr2.length){
        return false;
    }
    let FrequencyCounter1={}
    let FrequencyCounter2={}

    for(let val of arr1){
        FrequencyCounter1[val]=(FrequencyCounter1[val]|| 0)+1
    }
    for(let val of arr2){
        FrequencyCounter2[val]=(FrequencyCounter2[val]|| 0)+1
    }
    console.log(FrequencyCounter1);
    console.log(FrequencyCounter2);
    for(let val in FrequencyCounter1){
        if(!(val**2 in FrequencyCounter2)){
            return false
        }
        if(FrequencyCounter1[val]!==FrequencyCounter2[val**2]){
            return false
        }
    }
return true
}



console.log(same([1,2,1],[1,4,1]));

//This has complexity of O(n) 