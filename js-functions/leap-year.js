function isLeapYear(year)
{
    if((year%100==0 && year%400==0) || (year%100!=0 && year%4==0))
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(`is leap year or not :${isLeapYear(2000)}`);
console.log(`is leap year or not :${isLeapYear(2100)}`);
