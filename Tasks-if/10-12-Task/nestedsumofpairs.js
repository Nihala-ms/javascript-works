for (var r = 1; r <= 3; r++)
{
    let pattern="";
    for (var c = 1; c <= 3; c++) 
{

        pattern=pattern+`${c}+${r}=${r + c} `;

}
console.log(pattern);
}
