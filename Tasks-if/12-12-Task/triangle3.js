for(let r=1;r<=5;r++)
{
    let pattern = " ";
    for(let i=1;i<=5-r;i++)
    {
        pattern +=" ";
    }
        for(let c=1;c<=r;c++)
        {
            pattern +="* ";
    }
    console.log(pattern);
    

}