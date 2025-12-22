let numbers=[12,5,20,8,15,30,7,25,10,18];
//1.square
var sq=numbers.map(num=>num**2);
console.log(`square:${sq}`);
//2.lessthan
var lessthan=numbers.filter(num=>num<10);
console.log("lessthan 10:",lessthan);
//3.avg
var avg=numbers.reduce((n1,n2)=>n1+n2/numbers.length);
console.log("avg:",avg);
//4.smallest num
var min=numbers.reduce((n1,n2)=>n1<n2?n1:n2);
console.log("smallest:",min);
//5.odd numbers
var odd=numbers.filter(n=>n%2!==0);
console.log("odd:",odd);
//6.sort and third smallest number
numbers.sort((n1,n2)=>n1-n2);
console.log(numbers);
console.log("index:",numbers[2]);  //...................
//7.sub-2
var sub=numbers.map(num=>num-2);
console.log("subtracting 2",sub);
//8.sum of even
var even=numbers.filter(n=>n%2==0);
var sum=even.reduce(n=>n+n);
console.log(sum);
//9.count of how many are gt>avg
var avg=numbers.reduce((n1,n2)=>n1+n2/numbers.length)
var count=numbers.filter(n=>n>avg)
console.log(count);
//10.containing numbers divisible by 5
var num=numbers.filter(n=>n%5==0)
console.log(num);
//11.sort array decre and display first element
var num=numbers.sort((n1,n2)=>n2-n1);
console.log(num);
console.log(num[0]);
//12.array by converting each number to string




















