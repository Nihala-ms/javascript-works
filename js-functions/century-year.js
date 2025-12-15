function centuryYear(year){
    if(year%100==0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(`the year is a  century year:${centuryYear(1901)}`);
