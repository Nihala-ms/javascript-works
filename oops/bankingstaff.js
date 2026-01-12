class Employee{
    constructor(id,name,designation)
    {
        this.emp_id=id,
        this.emp_name=name,
        this.emp_designation=designation
    }
    displayEmployee() //user defined function
    {
        console.log(this.emp_id,this.emp_name,this.emp_designation);
        
    }
}

emp1=new Employee("emp001","Akash","Manager");//after creation of object constructor involkes automatically
emp1.displayEmployee();
emp2=new Employee("emp002","Veena","Accounts");
emp2.displayEmployee();
emp3=new Employee("emp003","varun","Cashier");
emp3.displayEmployee();