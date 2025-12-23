var arr = [1, 0, 2, 0, 3, 0, 4];
var result = [];
var zeroCount = 0;
for (let a of arr) {
    if (a === 0) {
        zeroCount++;
    } else {
        result.push(a);
    }
}
while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
}
console.log(result);
