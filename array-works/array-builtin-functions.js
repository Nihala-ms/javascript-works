var snacks=["burger","pizza","nuggets","momos","pizza"];

console.log("length of the snack",snacks.length); //length

console.log(snacks.push("sandwich"));             //inserting element
console.log("after added sandwich:",snacks);


let poped=snacks.pop();                               //deleting
console.log("poped one element:",poped);
console.log("poped after:",snacks);

console.log("index of pizza:",snacks.indexOf("pizza"));  //index

console.log("last index:",snacks.lastIndexOf("pizza"));  //last index

console.log("includes momos:",snacks.includes("momos"));   //includes or not

console.log("sliced from 1 to 3:",snacks.slice(1,3));   //slice 

console.log(snacks.unshift("loaded fries"));   //insert to first unshift
console.log("added one more snack",snacks);

snacks.splice(1,1)  // 1 index iln start aaki 1 apprthe delete aaki
console.log("splice:",snacks);



