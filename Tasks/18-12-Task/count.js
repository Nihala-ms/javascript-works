var arr=[2,4,5,8,1];
var evenCount=0;
var oddCount=0;
for(let a of arr)
{
    if(a%2==0)
    {
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log("evencount:",evenCount);
console.log("odd count:",oddCount);

