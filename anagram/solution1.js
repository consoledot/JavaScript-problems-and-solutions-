function build(word){
    word = word.replace(/[^\w]/g,"").toLowerCase()
    const char = {}
    for(let i of word){
        if(!char[i]){
            char[i] = 1
        }else{
            char[i] = char[i] + 1
        }
    }
    return char
}

function anagram(text1, text2){
    const firstobj = build(text1)
    const secondobj = build(text2)
    if(Object.keys(firstobj).length !== Object.keys(secondobj).length){
        return "Not an anagram"
    }
    for(let elem in firstobj){
        if(firstobj[elem] !== secondobj[elem]){
            return "Alaye no"
        }
        return "Yyay"
    }
}
console.log(anagram("baba o","ab oab"))