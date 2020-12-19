function reverse(str){
  const strArry = [...str]
  const newStrArry = []
  for(let i =0; i < str.length; i++){
      newStrArry.push(strArry.pop())
  }  
  return newStrArry.join("")
}
console.log(reverse("abimbola"))