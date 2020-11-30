function palindrome(str){
    return [...str].every((char,i)=>{
        return char == str[str.length - i - 1]
    })
}
console.log(palindrome("abba"))