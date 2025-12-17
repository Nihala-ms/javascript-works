var total=0;
var max=0;
var expenses=[23000,45000,43000,60000,23000,19000,32000,34090,45900,43050,25500,65000];
var min=expenses[0]; //not use zero bcz didnt compare exp<0 so we can use this way

for(let exp of expenses)
{
    total+=exp;
    if(exp>max)
    {
        max=exp;
    }
   else if(exp<min)
   {
    min=exp;
   }
    
    
}
console.log("max expense:",max);
console.log("min expense:",min);

console.log("total:",total);
