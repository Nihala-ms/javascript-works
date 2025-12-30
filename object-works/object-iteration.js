var berries={
    "strawberry":23,
    "blueberry":50,
    "raseberry":35,
    "cherry":75,

}
console.log("berries:",berries);
console.log(".......................................");


for(let berry in berries)
{
    if(berries[berry]<65)    
    {
        console.log(berry,berries[berry]);
        
        
    }
}
console.log(".............................");

//costly product
var maxprice=0;
for(let berry in berries)
if(berries[berry]>maxprice)
{
    let currentprice=berries[berry];
    if(currentprice>maxprice)
    {
        maxprice=currentprice;
    }

}
    
for(let berry in berries){
    let currentprice=berries[berry];
    if(maxprice==currentprice)
    {
        console.log(berry,currentprice);
        
    }
}

//