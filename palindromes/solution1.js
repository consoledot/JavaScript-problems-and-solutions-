function palindrome(str){
    const strReverse = [...str].reverse().join("")
   return str == strReverse
   
}
console.log(palindrome("abba"))