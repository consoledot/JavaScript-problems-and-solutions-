function reverse(str){
    return [...str].reduce((current, next)=>next+ current, '')
}
console.log(reverse("abimbola"))