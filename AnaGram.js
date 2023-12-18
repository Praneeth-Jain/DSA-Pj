// function validAnagram(str1,str2){
//     if(!str1.length==str2.length){
//         return false
//     }
//     let FrequencyCounter1={}
//     let FrequencyCounter2={}
//     for(let val of str1){
//         FrequencyCounter1[val]=(FrequencyCounter1[val]||0)+1
//     }
//     for(let val of str2){
//         FrequencyCounter2[val]=(FrequencyCounter2[val]||0)+1
//     }
//     console.log(FrequencyCounter1);
//     console.log(FrequencyCounter2);
//     for(key in FrequencyCounter1){
//         if(FrequencyCounter1[key]!=FrequencyCounter2[key]){
//             return false
//         }
//     }
//     return true
// }

//Another solution

function validAnagram(str1,str2){
    if(!str1.length==str2.length){
        return false
    }
    const lookup={}
    for(i=0;i<str1.length;i++){
        let letter=str1[i]
        lookup[letter]?lookup[letter]+=1:lookup[letter]=1
    }
    // console.log(lookup);
    for(i=0;i<str2.length;i++){
        let letter=str2[i]
        if(!(lookup[letter])){
            return false;
        }
        else{
            lookup[letter]-=1
        }
    }
    // console.log(lookup);
    return true
}

console.log(validAnagram("cinema","iceman"));