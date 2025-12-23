function firstRepeatedChar(str) {
    let res = "";
    for (let ch of str) {
        if (res.includes(ch)) {
            return ch;
        }
        res += ch;
    }
    return "No repeated character";
}

console.log(firstRepeatedChar("javascript"));
