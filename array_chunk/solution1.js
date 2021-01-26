function chunk(array, size){
    const chuncked = []
    for(let element of array){
        const last = chuncked[chuncked.length - 1]
        if(!last || last.length === size){
            chuncked.push([element])
        }else{
            last.push(element)
        }
    }
    return chuncked
} 

console.log(chunk([1,2,3,4,5,6,7],3))