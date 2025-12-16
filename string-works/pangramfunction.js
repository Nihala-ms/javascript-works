function ispangram(word)
{
    let pangramword=true;
    var alphabets="abcdefghijklmnopqrstuvwxyz";
    for(let al of alphabets)
    {
        if(word.indexOf(al)==-1)
        {
            pangramword=false;
            break;
        }
    }
    return pangramword;
}

console.log(ispangram("the quick brown fox jumps over lazy dog"));


