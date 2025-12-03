var cibilScore = 750;
if(cibilScore>=300 && cibilScore<=579) //false 750 not b/w 300-579
{
    console.log(`${cibilScore} is POOR`);
    
}
else if(cibilScore>=580 && cibilScore<=669) //false 750 not b/w 580-669
{
    console.log(`${cibilScore} is FAIR`);
    
}
else if(cibilScore>=670 && cibilScore<=739) //false 750 not b/w 670-739
{
    console.log(`${cibilScore} is GOOD`);
}
else if(cibilScore>=740 && cibilScore<=799) // true 750 is b/w 740-799
{
    console.log(`${cibilScore} is VERY GOOD`);
}
else if(cibilScore>=800 && cibilScore<=850) //false 750 not b/w 800-850
{
    console.log(`${cibilScore} is EXCELLENT`);
}
else{
    console.log("invalid"); //false it is valid input
    
}