var arr=[7,3,2,9,1,4];
var oddCount=0;
var evenCount=0;
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
console.log("even count:",evenCount);
console.log("odd count:",oddCount);


