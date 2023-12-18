function charCount(str){
    var obj={};
    str=str.toLowerCase()
    for(let char of str){
        if(isAlphaNumeric(char)){
        if (obj[char]>0){
            obj[char]++
        } 
        else{
            obj[char]=1
        }
    }
}

    return obj;
}

function isAlphaNumeric(str){
    code=str.charCodeAt(0);
    if(!(code>46 && code<58)&&
    !(code>64 && code < 91)&&
    !(code >96 && code < 123)){
        return false;
    }
    return true;
}
console.log(charCount("a1zA9Z# @ !"));

// var obj={'h':1}
// console.log(obj['h']);

