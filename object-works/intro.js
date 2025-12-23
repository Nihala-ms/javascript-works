var student={
    "name":"johnsmith",
    "age":23,
    "weight":59,
    "height":166,
    "dept":"cs",
    "location":"ABC street"
}
console.log(student.age);
var students={
    "rollno":3423,
    "name":"veena pv",
    "course":"mearn stack",
    "email":"veena232@gmail.com",
    "gender":"female"
}
console.log(students.email);
console.log(students["course"]);
//adding a new prperty to this object
students.college="VAST";
students.passout="12-08-1998";
console.log(students);


//product 

var product={
    "code":3424,
    "title":"jewellery",
    "price":499,
    "color":"Rose gold"
}

console.log(product.title);

if("offer" in product)
{
    console.log("exists");
    
}
else{
    console.log("not exists");
    
}

product.offer="25%";
console.log(product);

product.offerprice=product.price-((25/100)*product.price);
console.log(product);

if("quantity" in product)
{
    product.quantity+=10;
}
else{
    product.quantity=10;
}

console.log(product);








