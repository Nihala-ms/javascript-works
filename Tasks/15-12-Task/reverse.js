function reverseEachWord(str) {
    let words = str.split(" ");
    let result = [];

    for (let w of words) {
        let rev = "";
        for (let i = w.length - 1; i >= 0; i--) {
            rev += w[i];
        }
        result.push(rev);
    }
    return result.join(" ");
}

console.log(reverseEachWord("Hello World"));
