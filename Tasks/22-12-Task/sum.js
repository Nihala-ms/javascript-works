var arr=[2,5,7,25,20,35];
var newarr=arr.filter(n=>n>=10).reduce((a,b)=>a+b);
console.log(newarr);
