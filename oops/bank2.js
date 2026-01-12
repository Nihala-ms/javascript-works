db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false

function validateac(acno){
    return acno in db?true:false;
}
console.log(validateac(1002));

//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

function authenticatedac(acno,pass)
{
if(validateac(acno))
{
    actualpass=db[acno].password;
    if(pass==actualpass)
    {
        return"access granted";
        
    }
    else
    {
        return"invalid password";
        
    }
}
else{
    return"invalid acc";
    
}
}
console.log(authenticatedac(1001,1001));

//deposit amount
function depositamount(acno,amount){

    if(validateac(acno))
    {
        db[acno].balance=db[acno].balance+amount;
        return `${acno} has been credited with amount ${amount} your avl balance is ${db[acno].balance}`;
    }
        else
        {
            return "Access denied";
            }
}
console.log(depositamount(1001,450));

//check balance
function checkbalance(acno){

    if(validateac(acno))
    {
        
        return `${acno} your available balance is:${db[acno].balance}`

    }
}
console.log(checkbalance(1002));

//withdraw amount
function withdrawamount(acno,wdamount){
    if(validateac(acno))
    {
        if(wdamount>db[acno].balance)
        {
            return "insufficient balance";
        }
        else{
            db[acno].balance=db[acno].balance-wdamount;
            return `${acno} has been debited with amount ${wdamount} your avl balance is ${db[acno].balance}`
        }
    }
}
console.log(withdrawamount(1001,500));

//fund transfer b/w two accounts
function fundTransfer(Tacno,Tamount,Racno,){
    if(validateac(Tacno)&&validateac(Racno))
    {
        if(Tamount>db[Tacno].balance)
        {
            return "insufficient balance";
        }
        else{
            db[Tacno].balance=db[Tacno].balance-Tamount;
            db[Racno].balance=db[Racno].balance+Tamount;
            return `${Tacno} has been debited with amount ${Tamount} your avl balance is ${db[Tacno].balance} & ${Racno} has been credited with amount ${Tamount} your avl balance is ${db[Racno].balance}`
        }
    }

}
console.log(fundTransfer(1001,2000,1002));







