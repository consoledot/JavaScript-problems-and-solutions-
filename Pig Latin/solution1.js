
function FirstToLast(str){
    const stringArray = [...str]
    const firstCharacter = stringArray[0]
    const slicedString = stringArray.splice(1)
    return slicedString.join("") + firstCharacter
 }
 function LastToFirst(str){
     const stringArray = [...str]
     const lastString = stringArray[stringArray.length -1]
     const slicedString = stringArray.splice(0, stringArray.length -1)
     return lastString + slicedString.join("")
 }
 
 function TextToPigLatin(string){
     const stringArray = string.toLowerCase().split(" ")
     const newStingArray = []
    stringArray.forEach(r=>{
     newStingArray.push(FirstToLast(r) + "ay")
    })
    const name = newStingArray.join(" ")
    return name.charAt(0).toUpperCase() + name.slice(1)
 }
 function PigLatinToText(string){
     const stringArray = string.toLowerCase().split(" ")
     const newStingArray = []
     stringArray.forEach(r =>{
         const stringArray = [...r]
         stringArray.splice(r.length -2, 2)
         const fixedString = LastToFirst(stringArray)
         newStingArray.push(fixedString)
     })
     const name = newStingArray.join(" ")
    return name.charAt(0).toUpperCase() + name.slice(1)
 }
 
 const PigLatin = TextToPigLatin("The quick brown fox")
 
 console.log(PigLatin)
 
 console.log(PigLatinToText(PigLatin))