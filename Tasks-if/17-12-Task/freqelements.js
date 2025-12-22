var arr = [1, 2, 2, 3, 1];
var freq = {};

for (let a of arr) {
    if (freq[a]) {
        freq[a]++;
    } else {
        freq[a] = 1;
    }
}

console.log(freq);
