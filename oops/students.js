class Student{
    setStudent(id,name,dept)
    {
        this.stud_id=id,
        this.stud_name=name,
        this.stud_dept=dept
    }
    displayStudent()
    {
        console.log(this.stud_id,this.stud_name,this.stud_dept);
        
    }
}

var student1=new Student();
student1.setStudent("TL23CSE0001","Neha","CSE");
student1.displayStudent();

var student2=new Student();
student2.setStudent("TL23MCA0003","Arjun","MCA");
student2.displayStudent();
