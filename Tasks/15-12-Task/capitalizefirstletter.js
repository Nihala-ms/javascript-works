function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let w of words) {
        result.push(w[0].toUpperCase() + w.slice(1));
    }
    return result.join(" ");
}

console.log(capitalizeWords("hello world"));
