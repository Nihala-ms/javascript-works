class Bank{
    createAccount(acc_no,customer_name,acc_type,balance)
    {
        this.acc_no=acc_no,
        this.customer_name=customer_name,
        this.acc_type=acc_type,
        this.balance=balance
    }
    depositAmount(amount){
        this.balance+=amount;
        console.log(`${this.acc_no} has been credited with amount ${amount} your avl balance i ${this.balance}`);    
    }
    withdraw(amount){
        if(amount>this.amount)
        {
            console.log(`insufficient balance transaction failed`);
            
        }
        else{
        this.balance-=amount;
        console.log(`${this.acc_no} is debited with amount of ${amount} and your aval balance ${this.balance}`);
        

        }
    }
    balanceEnq(){
        console.log(`your available balance is ${this.balance}`);
    }
}

var Veena=new Bank();
Veena.createAccount(4534256,"Veena george","Saving Account",54300);
Veena.depositAmount(100000);
Veena.withdraw(54000);

