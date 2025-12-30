var expenses={
    "john":1000,
    "rahul":1500,
    "shyni":1000,
    "Neha":1000,
    "Arjun":1200
}
console.log("expenses:",expenses);
console.log(".................................");


var totalexpenses=0;
for(let ex in expenses)
{
    totalexpenses+=expenses[ex];
}
console.log("total expenses:",totalexpenses);

console.log(".........................");


//who paid most
var maxpaid=0;
for(let ex in expenses)
{
    let currpaid=expenses[ex];
    if(currpaid>maxpaid)
    {
        maxpaid=currpaid;
    }
}

for(let ex in expenses)
{
    let currpaid=expenses[ex];
    if(currpaid==maxpaid)
    {
        console.log("who paid mostly:",ex,currpaid);
        
    }
}
console.log(".......................");


//split
var split=totalexpenses/Object.entries(expenses).length;
console.log("splitted amount:",split);

console.log(".......................");
//balance expenses
var splitWise={};
for(let user in expenses)
{
    let amount=expenses[user];
    splitWise[user]=split-amount;

}
console.log(splitWise);



