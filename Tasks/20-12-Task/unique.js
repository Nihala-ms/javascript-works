var arr = [1, 2, 3, 4, 5];
var isUnique = true;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            isUnique = false;
            break;
        }
    }
    if (!isUnique) break;
}
console.log(isUnique);
