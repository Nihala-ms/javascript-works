class student{
    setStudent(id,name,branch){
        this.id=id,
        this.name=name,
        this.branch=branch
    }
    displayStudent()
{
    console.log(this.id,this.name,this.branch);
    
}
}

var studentJhon= new student(); //object created
var studentAnna= new student(); //object created
studentJhon.setStudent(102,"Jhon","CSE");
studentAnna.setStudent(103,"Anna","EEE")
studentJhon.displayStudent();
studentAnna.displayStudent();