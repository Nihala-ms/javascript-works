var arr=[3,2,6,1,4,6];
var element=6;
var index=-1;
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==element)
    {
        index=i;
        break;
    }
}
console.log(index);
