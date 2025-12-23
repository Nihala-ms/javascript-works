let numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];
let sorted = [...numbers].sort((a, b) => a - b);
let mid = sorted.length / 2;
let median = (sorted[mid - 1] + sorted[mid]) / 2;
let result = numbers.filter(n => n > median);
console.log("Median:", median);
console.log("Numbers greater than median:", result);


