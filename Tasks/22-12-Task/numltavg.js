var arr=[34,23,6,3,87,19];
var avg=arr.reduce(n=>(n+n/arr.length));
var newarr=arr.filter(n=>n<avg);
console.log(newarr);
