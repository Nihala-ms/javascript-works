function replaces(string){
    return string.replace(/[aeiousAEIOUS]/g,"*");

}
console.log(replaces("javascript"));
