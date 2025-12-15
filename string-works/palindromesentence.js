function isPalindromeWord(text)
{
    let ispali=true;
    var test=text.toLocaleLowerCase().replaceAll(" ","");
    var rev="";
    for(var i=test.length-1;i>=0;i--)
    {
        rev+=test[i];
    }
    if(rev==test)
    {
        return ispali=true;

    }
    else{
        return ispali=false;
    }

}

console.log(isPalindromeWord("A MAN A plan a canal panama"));
