function extraSpace(sentence){
    sentence=sentence.trim().replace(/\s+/g, " ");
    return sentence;

}
console.log(extraSpace("I have a     pen  for you"));
