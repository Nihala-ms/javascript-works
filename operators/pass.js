var mPass=450;

var fPass=530;

var survived=344;

var Total=mPass+fPass;

console.log(`Total Number of Passengers: ${Total}`);

var Unsurvived=Total-survived;

var percent=(survived/Total)*100;

console.log(`Number of Unsurvived Passengers: ${Unsurvived}`);

console.log("Percentage of survival",percent);

var upercent=(Unsurvived/Total)*100;

console.log("Percentage of Unsurvival",upercent);


