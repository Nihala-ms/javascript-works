let arr = [1, 3, 5, 3, 7, 3];
let count = 0;

for (let i of arr) {
    if (i === 3) {
        count++;
    }
}

if (count > 1) {
    console.log("3 appears more than once");
} else {
    console.log("3 does not appear more than once");
}
