function maxChars(chars){
    const charMap ={}
    let max = 0
    let maxChar={}
    for(let char of chars){
        charMap[char] = charMap[char] + 1 || 1
        for(let char in charMap){
            if(charMap[char] > max){
                max = charMap[char]
                maxChar[char] = charMap[char]
                for(let cha in maxChar){
                    if(maxChar[cha] < max){
                        delete maxChar[cha]
                    }
                }
            }
        }
    }
   
 
    return maxChar
}
console.log(maxChars("abimbcccccbbola"))