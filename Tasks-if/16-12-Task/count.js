function count(sentence,word)
{
    var words=sentence.split(" ");
    var count=0;
    for(let w of words){
        if(w==word)
        {
            count++;
        }


    }
    return count;

}
console.log(count("hii all good morning all","all"));
