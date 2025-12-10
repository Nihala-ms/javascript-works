for(var r=1;r<=5;r++)  //row initializes 
{
    let pattern=" ";  
    for(var i=1;i<=5-r;i++) // it used for space decr to row
    {
        pattern+=" ";  
    }
    for(var c=1;c<=r;c++) // column initilaizes 
    {
    pattern=pattern+"* "; 
    
    }
    console.log(pattern);
}