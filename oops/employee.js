class Employee{
    setEmployee(id,name,designation,salary)
    {
        this.emp_id=id,
        this.emp_name=name,
        this.emp_designation=designation,
        this.emp_salary=salary
    }

    displayEmployee(){
        console.log(this.emp_id,this.emp_name,this.emp_designation,this.emp_salary);
        
    }
}

var emp=new Employee();
emp.setEmployee("emp001","Akshay","Manager",50000);
emp.displayEmployee();

var emp1=new Employee();
emp.setEmployee("emp002","Venu","Sales Executive",25000);
emp.displayEmployee();


