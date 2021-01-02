function arrReversal(arr){
    const newArr = []
    for(let i=0,len = arr.length; i<len; i++){
        newArr.push(arr.pop())
    }
    return newArr
}
console.log(arrReversal([1,2,3,4,5,6,7,8]))