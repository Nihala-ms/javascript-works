function vowels(string)
{
    var count=0;
    for (let ch of string){
        if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" )
        {
            count++;
        }
    }
return count;    
    
}

console.log(`the vowel count is:${vowels("javascript")}`);
