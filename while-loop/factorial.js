var num=5;
var fact=1;
var i=1;
while(i<=num) //1<5 2<5 3<5 4<5 5<5 6<5F
{
    fact=fact*i; //1*1=1 1*2=2 2*3=6 6*4=24 24*5=120
    i++; //2 3 4 5 6
}
console.log(`factorial of a ${num}! : ${fact}`);  //DISPLAY 120
