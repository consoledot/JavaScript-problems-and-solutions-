function palindrome(str){
    const strReverse = [...str].reverse().join("")
    if(strReverse !== str) return false
    return true
   
}
console.log(palindrome("abba"))