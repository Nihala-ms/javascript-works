var n=123;
console.log("the number is:",n);
while(n!=0) //123 12 1  0F
{
    let digit=n%10; //123%10=3  12%10=2  1%10=1
    console.log(digit); //3 2 1
    n=Math.floor(n/10)  //123//10=12  12//10=1  1//10=0
    
}

