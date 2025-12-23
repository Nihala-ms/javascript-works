var arr=[3,1,43,23,76,58,95,6];
var max=0;
var min=arr[0];
for(let a of arr)
{
    if(a>max)
    {
        max=a;
    }
    else if(a<min)
    {
        min=a;
    }
}
console.log(`largest element in array:${max}`);
console.log(`smallest element in array:${min}`);

