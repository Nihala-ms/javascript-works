var arr=[-1,0,-1,0,0,-1,1,0,0,-1];
console.log(arr.sort());
var res=[]
for(let a of arr)
{
    if(a<0)
    {
        res.unshift(-1)
    }
    else{
        res.push(0)
    }

}
console.log(res);








