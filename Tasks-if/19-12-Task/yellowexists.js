var arr=["red","green","blue"];
var word="yellow";
isexists=false;
for(let a of arr)
{
    if(word==a)
    {
isexists=true;
        
    }
}
console.log(isexists?"yellow exists":"yellow not exists");
