var year=1890;
if((year%100==0&&year%400==0)||(year%100!=0&&year%4==0)) //year is a century year it will be divisible by 100 and then also divisible by 400
{         //false its not a laep year                    // the year is non century year it is not divisible by 100 and then it divisible by 4 also
    console.log(`${year} is a Leap year`);               //1890 is not a century year and non century year,  it is not a leap year
    
}
else{    //true
    console.log(`${year} is not a Leap year`);
    
}
