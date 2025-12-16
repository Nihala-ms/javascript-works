var word="the quick brown fox jumps over lazy dog";
var alphabets="abcdefghijklmnopqrstuvwxyz";
var ispangram=true;
for(let al of alphabets)
{
    if(word.indexOf(al)==-1)
    {
        ispangram=false;
        break;

    }
}
console.log(ispangram);


