var orders={
    "pizza":10,
    "burger":20,
    "pepsi":15,
    "alfham":27
}
var newOrderItem="burger";
var qty=2
if(newOrderItem in orders)
{
    orders[newOrderItem]+=qty;  // in the case of variable used(neworderitem and qty) we use sq brackets in case of add and updates [] else we use . (dot)
}
else{
    orders[newOrderItem]=qty;
}
console.log(orders);




