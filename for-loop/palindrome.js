var str="malayalam";
var res=""
for(let i=str.length-1;i>=0;i--)
{
    res=res+str[i];
}
console.log(str==res?"palindrome":"not a palindrome");

