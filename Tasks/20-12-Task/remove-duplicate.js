var arr=[2,4,2,6,8,10,10,12];
var duplicate=[];
for(let a of arr)
{
    
    if(!duplicate.includes(a))
    {
        duplicate.push(a);
        
    }
}
console.log(duplicate);
