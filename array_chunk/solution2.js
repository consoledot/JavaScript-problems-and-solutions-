function chunk(array,size){
    const chuncked = []
    let index = 0;
    while(index < array.length){
        chuncked.push(array.slice(index, index +size))
        index += size
    }
    return chuncked
}
console.log(chunk([1,2,3,4,5,6,7],3))  