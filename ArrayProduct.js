//lets use recursion for this problem

function arrayProduct(arr){
    let sum=1;
    if(arr.length==0){
        return sum;
    }
    sum=arr[0]*arrayProduct(arr.slice(1))
    return sum;
}

//[1,2,3]


console.log(arrayProduct([5,10,90,89]));