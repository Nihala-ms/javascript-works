var numbers=[2,4,6,8,10];
console.log("array of numbers:",numbers);
//add
var addfive=numbers.map(num=>num+5);
console.log("5 added to numbers:",addfive);
//square
var sq=numbers.map(num=>num**2);
console.log("square of numbers",sq);
//cube
var cube=numbers.map(num=>num**3);
console.log("cube of numbers:",cube);
//>13 filter uses
var numberGt=numbers.filter(num=>num>5)
console.log("numbers greaterthan 5:",numberGt);
//even and lessthan 5
var even=numbers.filter(num=>num%2==0 && num<5);
console.log("even numbers in arr:",even);
//odd
var odd=numbers.filter(num=>num%2!=0);
console.log("odd numbers in arr:",odd);






