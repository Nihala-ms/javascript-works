var mark1=45;

var mark2=43;

var mark3=44;

var total=mark1+mark2+mark3;

console.log("Total:",total);

if(total>=140 && total<=150) //132 is 132<140 F
{
    console.log("A Grade");
    
}
else if(total>=130 && total<140) //132>130 & 132<140 T
{
    console.log("B Grade");
    
}
else if(total>=120 && total<130) //132>130 but 132!<130 F
{
    console.log("C Grade");
    
}
else if(total<120)  //132 >120 F
{
    console.log("Failed");
    
}
else{
    console.log("Mark is incorrect"); // it is a valid mark
    
}
