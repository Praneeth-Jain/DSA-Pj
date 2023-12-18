// function findOddinLists(arr){
//     let result=[]
//     function helper(helperInput){
//         if(helperInput.length==0){
//             return;
//         }
//         if(helperInput[0]%2!==0){
//             result.push(helperInput[0])
//         }
//         console.log(helperInput);
//         console.log("Result :",result);
//         helper(helperInput.slice(1))
//     }
//     helper(arr);
//     return result;
// }

// console.log(findOddinLists([2,5,6,7,8]));

//By using pure Recursion

function findOddinList(arr){
    let newArr=[]
    if(arr.length===0){
        return newArr;
    }
    if(arr[0]%2!==0){
        newArr.push(arr[0])
    }
    newArr=newArr.concat(findOddinList(arr.slice(1)))
    return newArr;
}

console.log(findOddinList([2,5,6,7,8,0]));