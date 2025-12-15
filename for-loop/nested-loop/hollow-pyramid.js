for(var r=1;r<=5;r++)  //row initializes 
{
    let pattern=" ";  
    for(var c=1;c<=9;c++) // column initilaizes 
    {
        if(r+c==6 || r==5 && c%2!=0 || c-r==4)
        {
    pattern=pattern+"*"; 

        }
        else{
                pattern=pattern+" "; 

        }
        
    
    }
    console.log(pattern);
}