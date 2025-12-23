var arr=[34,43,89,0,3,12];
var element=0;
var iselement=false;
for(let a of arr)
{
    if(a==element)
    {
        iselement=true;
        break;
    }
}
console.log(iselement);
