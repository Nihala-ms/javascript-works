function FirsttoLast(sentence,char){
    first=sentence.indexOf(char);
    last=sentence.lastIndexOf(char);  
    return {first,last};
}
console.log(FirsttoLast("hii good morning","i"));
