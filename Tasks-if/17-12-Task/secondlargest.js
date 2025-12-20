var arr=[34,2,43,65,76,70];
var max=0;
var seclargest=0;
for(let a of arr){
    if(a>max)
    {
        max=a;
    }
    arr.pop(max);
    if(let ar of arr){
        if(ar>seclargest)
        {
            seclargest=a;
        }

    }


}

console.log(seclargest);
