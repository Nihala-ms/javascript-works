var arr=[6,2,4,7,23,54,28];
var min=arr[0];
var max=0;
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
console.log(max);
console.log(min);

