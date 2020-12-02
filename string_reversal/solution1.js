function reverse(str){
    const strArry = [...str]
    const strRevserse = []
    for(let i = strArry.length -1; i >= 0; i--){
        strRevserse.push(strArry[i])
    }
    return strRevserse.join("")
}
console.log(reverse("abimbola"))