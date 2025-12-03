var dbPin=3423;
var balanceAmount=43800;
var Amount=4000;
var userPin=3423;

console.log("balanceAmount:",balanceAmount);
console.log("Withdrawal amount:",Amount);


if(dbPin==userPin)// T pin are Same
{
    if(Amount<=balanceAmount){ //4000<43800 T
        console.log("Withdrawal Successfully"); //dispaly T
        balance=balanceAmount-Amount;
        console.log("current balance:",balance);
        
        
    }
    else{  //false
        console.log("insufficient balance ");
        
    }
}
else{ //false
    console.log("incorrect pin");
    
}