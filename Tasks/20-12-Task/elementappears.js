var arr=[3,4,11,76,2,9,3,6];
var element=3;
var count=0;
for(let a of arr)
{
    if(a==element)
    {
        count++;
    }
}
console.log("the element appears:",count);
