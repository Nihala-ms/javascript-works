var f0=0; //previous
var f1=1; //current
var limit=10; //limit 
console.log(f0); //display
console.log(f1); //display


for(var i=1;i<=limit-2;i++) // limit-2(2 elements already intialized)   
{
    var f2=f1+f0; //next=prev+curre 1=1+0 f2=1+1=2 1+2=3 3+2=5 3+5=8 8+5=13 13+8=21 21+13
    console.log(f2);//disp 1 2 3 5 8 13 21 34
    f0=f1; //prev=curr f0=1 1 2 3 5 8 13 21
    f1=f2; //curr=next f1=1 2 3 5 8 13 21 34
    
}