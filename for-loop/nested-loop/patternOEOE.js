for(var r=1;r<=3;r++)
{
    let pattern="";
    for(var c=1;c<=4;c++)
    {
        if(c%2==0)
        {
            pattern=pattern+"\tE";
        }
        else{

        pattern=pattern+"\tO";
        }

    }
    console.log(pattern);
    
}