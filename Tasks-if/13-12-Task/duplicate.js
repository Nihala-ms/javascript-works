function duplicate(word){
    var duplicate="";
    for(let ch of word)
    {        
        if(!duplicate.includes(ch))
        {
            duplicate+=ch;

        }
        else{
            break;
        }
    }
    return duplicate;


}
console.log(duplicate("banana"));
