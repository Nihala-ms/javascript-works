var dbpin=3456;
var userPin=3456;
var balanceAmount=45329;
var amount=1000;

console.log("Balance Amount:",balanceAmount);
console.log("Withdrawal Amount:",amount);


if(dbpin==userPin) //T 3456=3456
{
    if(amount%100==0) // T 1000 multiple of 100
    {
        if(amount<=balanceAmount) // T 1000<45329
        {
            console.log("Withdrawal Successfully"); //Display
            
        }
        else{ //F
            console.log("Insufficient balance");
            
        }
    }
    else //F
    {
        console.log("enter the multiple of 100");
        
    }
}
else //F
{
    console.log("incorrect pin");
    
}