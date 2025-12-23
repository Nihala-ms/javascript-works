var arr=[4,2,6,8,1];
var newarr=arr.reduce((sum,n,i)=>{
    return i%2==0?sum+n:sum; 
},0);
console.log(newarr);

