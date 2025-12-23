var arr=[45,23,8,65,12,34];
issorted=true;
for(var i=0;i<arr.length-1;i++)
{
    if(arr[i]>arr[i+1])
    {
        issorted=false;
        break;
    }
}
console.log(issorted);
