function anagrams(text1, text2){
    text1 = build(text1)
    text2 = build (text2)
    return text2 === text1
}
function build(word){
    return  word.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("")
}

console.log(anagrams("baba ","ab oab"))