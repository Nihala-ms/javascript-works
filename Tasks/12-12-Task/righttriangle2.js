for(let r=1;r<=5;r++)
{
    let pattern = "";
    for(let i=1;i<=5-r;i++)
    {
        pattern +=" \t";
    }
        for(let c=1;c<=r;c++)
        {
            pattern +="*\t";
    }
    console.log(pattern);
    

}