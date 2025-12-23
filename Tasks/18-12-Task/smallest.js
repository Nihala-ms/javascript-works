var arr=[2,4,45,65,67,98,3,7];
var min=arr[0];
for(let a of arr){
    if(a<min)
    {
        min=a;
    }
}
console.log("smallest number:",min);
