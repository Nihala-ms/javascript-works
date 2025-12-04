var n=345;
cube=0;
sum=0;
while(n!=0) //345 34 3 0F
{
    let digit=n%10; //345%10=5 34%10=4 3%10=3
    cube=digit*digit*digit; //125 64 27
    sum=sum+cube; //125 125+64=189 189+27=216
    n=Math.floor(n/10) //345//10=34 34//10=3 3//10=0

}
console.log(sum);
