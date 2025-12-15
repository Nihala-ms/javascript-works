for(var r=1;r<=4;r++)
{
    let pattern ="";
    for(var i=1;i<=4-r;i++)
    {
        pattern +=" ";
    }
        for(var c=1;c<=r;c++)
        {
            if((c==2 && r==3))
            {
                pattern+="2 ";
            }
            else if((c==2 && r==4)||(c==3 && r==4))
            {
                pattern+="3 ";
            }
            else{
                pattern+="1 ";
            }

        }
    console.log(pattern);
    
}