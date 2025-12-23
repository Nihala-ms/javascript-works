function palindrome(word){
    var rev="";
    for(var i=word.length-1;i>=0;i--)
    {
        rev+=word[i];
    }
    if(rev==word)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome("malayalam"));
