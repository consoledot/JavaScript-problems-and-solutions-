function obj(word){
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
    text1 = text1.replace(/[^\w]/g,"").toLowerCase()
    text2 = text2.replace(/[^\w]/g,"").toLowerCase()
    const firstobj = obj(text1)
    const secondobj = obj(text2)
    if(Object.entries(firstobj).length !== Object.entries(secondobj).length){
        return "Not an anagram"
    }
    for(let elem in firstobj){
        if(firstobj[elem] !== secondobj[elem]){
            return "Alaye no"
        } else{
            return "Yass"
        }
    }
}
console.log(anagram("Hi there","Bye there"))