var student={
    "name":"jhonsmith",
    "age":24,
    "course":"MearnStack",
    "phone_number":987654556

}
//display the name property from an object.
console.log("name",student.name);
//Add a new property called email to an existing object.
student.email="jhonsmith34@gmail.com";
console.log(student);
//Update the age value in an object.
student.age=22;
console.log(student);
//Delete the phone number property from an object.
delete student.phone_number;
console.log(student);
//Display all keys present in an object.
console.log(Object.keys(student));
//Display all values present in an object.
console.log(Object.values(student));
//Check whether a property called address exists in an object.
console.log("address" in student);
//Count the total number of properties in an object.
console.log(Object.keys(student).length);
//Loop through an object and display each key and its value.
for (let key in student) {
    console.log(key + " : " + student[key]);
}







