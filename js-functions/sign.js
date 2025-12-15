function sign(num){
    if(num>0)
    {
        return "+ve number";
        
    }
    else if(num==0)
    {
        return "number is zero";
    }
    else{
        return "-ve number";

    }
}

console.log(sign(4));
