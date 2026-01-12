
const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

//   Q1: Print the names of all programming languages in the array.
var names=programmingLanguages.map(m=>m.name);
console.log("  Q1: Print the names of all programming languages in the array.");
console.log(names);

//   Q2: Print the total number of programming languages in the array.
console.log("Q2: Print the total number of programming languages in the array.");
console.log(programmingLanguages.length);

//   Q3: Print the languages that are popular.
var popularLang=programmingLanguages.filter(p=>p.popular==true);
console.log("Q3: Print the languages that are popular.");
console.log(popularLang);

//   Q4: Print the names of the languages created after the year 2000.
var after2000=programmingLanguages.filter(f=>f.yearCreated>2000).map(a=>a.name);
console.log(" Q4: Print the names of the languages created after the year 2000.");
console.log(after2000);

//   Q5: Print the languages that are both functional and object-oriented.
var bothLang=programmingLanguages.filter(p=>p.paradigms.includes("Functional") && p.paradigms.includes("Object-oriented"));
console.log("Q5: Print the languages that are both functional and object-oriented.");
console.log(bothLang);

//   Q6: Print the names of the creators of the languages.
var creatorName=programmingLanguages.map(p=>p.creator);
console.log("Q6: Print the names of the creators of the languages.");
console.log(creatorName);

//   Q7: Print the names of languages that have "Script" in their name.
var scriptLang=programmingLanguages.filter(p=>p.name.includes("Script")).map(a=>a.name);
console.log("Q7: Print the names of languages that have Script in their name.");
console.log(scriptLang);

//   Q8: Print the names of programming languages that were created before the year 1995.
var before1995=programmingLanguages.filter(p=>p.yearCreated<1995).map(a=>a.name);
console.log("Q8: Print the names of programming languages that were created before the year 1995.");
console.log(before1995);

//   Q9: Print the names of programming languages that support more than two paradigms.
var moreParadigms=programmingLanguages.filter(p=>p.paradigms.length>2).map(a=>a.name);
console.log("Q9: Print the names of programming languages that support more than two paradigms.");
console.log(moreParadigms);

//   Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.
var oldest=programmingLanguages.reduce((p1,p2)=>p1<p2?p1:p2);
console.log("Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.");
console.log(oldest);
