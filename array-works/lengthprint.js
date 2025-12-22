var words=["carrot","parrot","beetroot","apple"];
var index=words.map(w=>w.length);
console.log(index);

var toUpper=words.map(w=>w.toUpperCase());
console.log(toUpper);

var word=words.filter(w=>w.includes("rr"));
console.log("rr:",word);

var longest=words.reduce((w1,w2)=>w1.length>w2.length?w1:w2);
console.log(longest);

words.sort((w1,w2)=>w1.length-w2.length);
console.log(words);




