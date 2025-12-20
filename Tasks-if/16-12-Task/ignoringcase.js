function ignorWord(sentence,word){
    testsen=sentence.toLowerCase();
    testword=word.toLowerCase();
    return testsen.includes(testword);

}

console.log(ignorWord("Hii good morning john","hii"));
