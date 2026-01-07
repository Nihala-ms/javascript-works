function appendWord(string1,string2)
{
     var append=string1.concat(string2);
     return append;
}

function replacex(append){
    var maskedstring="";
    var count=1;
    for(let i=0;i<append.length;i++)
    {
        if((i+1)%3==0)
        {
            maskedstring+="X";
        }
        else{
            maskedstring+=append[i];
        }
    }
    count++;
    return maskedstring;
}

console.log(appendWord("ABCD","123"));
console.log(replacex(appendWord("ABCD","123")));





