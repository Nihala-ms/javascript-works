var arr=[2,4,1,6,8,5];
console.log("array:",arr);

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2);
console.log("maximum:",max);

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2);
console.log("minimum:",min);

var sum=arr.reduce((n1,n2)=>n1+n2);
console.log("sum:",sum);

arr.sort((n1,n2)=>n1-n2);
console.log("sorted array:",arr);

