var arr=[2,5,2,5,7,8,9,0];
var res=[];
for(let a of arr)
{
    if(!res.includes(a))
    {
        res.push(a);

    }
}
console.log(res);
