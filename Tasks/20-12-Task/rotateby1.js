var arr=[2,5,1,6,7,3];
var last=arr[arr.length-1];
for(let i=arr.length-1;i>0;i--)
{
    arr[i]=arr[i-1];
}
arr[0]=last;
console.log(arr);
