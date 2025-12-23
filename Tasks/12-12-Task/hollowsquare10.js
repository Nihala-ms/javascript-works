for(var r=1;r<=5;r++)
{
    let pattern=" ";
    for(var c=1;c<=5;c++)
    {
        if(r==1 || r==5 || c==1 || c==5)
        {

        pattern+="* \t"
        }
        else{
            pattern+=" \t"
        }
    }
    console.log(pattern);
    
}