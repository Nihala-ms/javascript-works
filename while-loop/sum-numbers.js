var limit=5;
var sum=0;
var i=1;
while(i<=limit){ //1<=5 2<=5 3<=5 4<=5 5<=5 6!<=5F
    sum=sum+i; //0+1=1 1+2=3 3+3=6 6+4=10 10+5=15
    i++; // 2 3 4 5 6
}
console.log("sum of digits from 1 to",limit,"is:",sum );
