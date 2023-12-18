function sumZero(arr){
    let a=[]
    let i=0
    let j=arr.length-1
            while(i<j){
                if(arr[i]+arr[j]==0){
                    console.log("Solution found");
                    a.push(arr[i])
                    a.push(arr[j])
                    return a;
                }
            
                else if(arr[i]+arr[j]>0){
                    j--
                }
                else{
                    i++
                }
        }
        return;
}

console.log(sumZero([-3,-2,-1,0,1,4,5]));