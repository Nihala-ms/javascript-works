var num = 12345;
var temp = num;
var last = num % 10;
while (temp >= 10) {
    temp = Math.floor(temp / 10);
}
var first = temp;

temp = num;
var digits = 0;
while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
}
var middle = Math.floor((num % Math.pow(10, digits - 1)) / 10);
var result = last * Math.pow(10, digits - 1) + middle * 10 + first;
console.log(result); 
