function Upperchar(words)
{
    var res="";
    var word=words.split(" ");
    for(let w of word)
    {
        res += w[0].toUpperCase() + w.slice(1) + " ";

    }
    return res;

}
console.log(Upperchar("hi meera"));
