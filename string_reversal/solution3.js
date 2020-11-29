function reverse(str){
    let strReverse =''
    for(let string of str){
        strReverse = string + strReverse
    }
    return strReverse
}
console.log(reverse("abimbola"))