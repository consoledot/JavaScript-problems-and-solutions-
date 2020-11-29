function revserse(str){
    const strArry = [...str]
    const strRevserse = []
    for(let i = strArry.length; i >= 0; i--){
        strRevserse.push(strArry[i])
    }
    return strRevserse.join("")
}
console.log(revserse(""))