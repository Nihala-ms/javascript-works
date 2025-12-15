function isPalindrome(text){
    let ispd=true;
    let rev="";
    for(var i=text.length-1;i>=0;i--)
    {
        rev=rev+text[i]; //adding with text[i] i adding it didn't stores everything .so we can use the array of text 
    } 
       
    if(text==rev)
    {
        return ispd=true;

    }
    else
    {
        return ispd=false;
    }
}
console.log(isPalindrome("malayalam"));
