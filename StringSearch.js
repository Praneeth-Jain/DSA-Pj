function stringSearch(str,findStr){
    let count=0;
    for(i=0;i<str.length;i++){
        for(j=0;j<findStr.length;j++){
            if(str[i+j]!==findStr[j]){
                break;
            }
            if(j==findStr.length-1){
                count++;
            }
        }
    }
    return count;
}

console.log(stringSearch("Hellololololol","lol"));