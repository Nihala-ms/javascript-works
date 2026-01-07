var str = "javascript";
var count = 0;
var vowels=["a","e","i","o","u"]
for (let ch of str) {
    if (vowels.includes(ch)) {
        count++;
    }
}
console.log(count);
