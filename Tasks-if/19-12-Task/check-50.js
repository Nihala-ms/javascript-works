var arr=[10,20,30,40,50];
var n=50;
isexist=false;
for(let a of arr)
{
    if(a==n)
    {
        isexist=true;
    }
}
console.log(isexist?"50 exist in the array":"50 not exist in the array");
