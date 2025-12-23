var arr=["apple","banana","blueberry","cherry"];
var longest=arr.reduce((n1,n2)=>n1.length>n2.length?n1:n2);
console.log(longest);
