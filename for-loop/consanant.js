var str="helloworld"; //string
var count=0; //count initalizes to 0
for(let ch of str) // string takes one by one
{
if(ch!="a" && ch!="e" && ch!="i" && ch!="o" && ch!="u") //
{
    
    count++;

}
}
console.log(count);