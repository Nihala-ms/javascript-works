
var courses = [
  { id: 1, title: "HTML Basics", instructor: "John Doe", price: 999, category: "Web Development", duration: "10 hrs", level: "Beginner" },
  { id: 2, title: "CSS Mastery", instructor: "Jane Smith", price: 1299, category: "Web Development", duration: "12 hrs", level: "Beginner" },
  { id: 3, title: "JavaScript Fundamentals", instructor: "Alex Brown", price: 1799, category: "Web Development", duration: "20 hrs", level: "Beginner" },
  { id: 4, title: "Advanced JavaScript", instructor: "Alex Brown", price: 2499, category: "Web Development", duration: "25 hrs", level: "Advanced" },
  { id: 5, title: "React JS", instructor: "Emily White", price: 2999, category: "Frontend", duration: "30 hrs", level: "Intermediate" },
  { id: 6, title: "Node.js", instructor: "Michael Green", price: 2799, category: "Backend", duration: "28 hrs", level: "Intermediate" },
  { id: 7, title: "Express.js", instructor: "Michael Green", price: 1999, category: "Backend", duration: "18 hrs", level: "Intermediate" },
  { id: 8, title: "MongoDB Basics", instructor: "Sarah Lee", price: 1599, category: "Database", duration: "15 hrs", level: "Beginner" },
  { id: 9, title: "MySQL Complete Guide", instructor: "David Clark", price: 1899, category: "Database", duration: "22 hrs", level: "Beginner" },
  { id: 10, title: "Python for Beginners", instructor: "Rachel Adams", price: 1699, category: "Programming", duration: "20 hrs", level: "Beginner" },
  { id: 11, title: "Data Structures in Python", instructor: "Rachel Adams", price: 2299, category: "Programming", duration: "25 hrs", level: "Intermediate" },
  { id: 12, title: "Java Basics", instructor: "Robert King", price: 1899, category: "Programming", duration: "24 hrs", level: "Beginner" },
  { id: 13, title: "Spring Boot", instructor: "Robert King", price: 2999, category: "Backend", duration: "32 hrs", level: "Advanced" },
  { id: 14, title: "C Programming", instructor: "Linda Scott", price: 1399, category: "Programming", duration: "18 hrs", level: "Beginner" },
  { id: 15, title: "C++ Fundamentals", instructor: "Linda Scott", price: 1599, category: "Programming", duration: "20 hrs", level: "Beginner" },
  { id: 16, title: "Machine Learning", instructor: "Andrew Miller", price: 3999, category: "AI", duration: "40 hrs", level: "Advanced" },
  { id: 17, title: "Deep Learning", instructor: "Andrew Miller", price: 4599, category: "AI", duration: "45 hrs", level: "Advanced" },
  { id: 18, title: "UI/UX Design", instructor: "Sophia Wilson", price: 2499, category: "Design", duration: "26 hrs", level: "Intermediate" },
  { id: 19, title: "Figma Essentials", instructor: "Sophia Wilson", price: 1799, category: "Design", duration: "16 hrs", level: "Beginner" },
  { id: 20, title: "Cyber Security Basics", instructor: "Daniel Perez", price: 2199, category: "Security", duration: "22 hrs", level: "Beginner" },
  { id: 21, title: "Ethical Hacking", instructor: "Daniel Perez", price: 3499, category: "Security", duration: "35 hrs", level: "Advanced" },
  { id: 22, title: "Cloud Computing", instructor: "Emma Turner", price: 2899, category: "Cloud", duration: "28 hrs", level: "Intermediate" },
  { id: 23, title: "AWS Fundamentals", instructor: "Emma Turner", price: 3199, category: "Cloud", duration: "30 hrs", level: "Intermediate" },
  { id: 24, title: "DevOps Basics", instructor: "Oliver Brown", price: 2699, category: "DevOps", duration: "26 hrs", level: "Intermediate" },
  { id: 25, title: "Docker & Kubernetes", instructor: "Oliver Brown", price: 3799, category: "DevOps", duration: "34 hrs", level: "Advanced" }
];

// 1. Create a new array containing only course titles.
var titles=courses.map(c=>c.title);
console.log("1.Titles:");
console.log(titles);
// 2. Find all courses taught by "Alex Brown".
var alexbrowncourses=courses.filter(c=>c.instructor.toLowerCase()=="alex brown");
console.log("2.all courses taught by Alex Brown:");
console.log(alexbrowncourses);
// 3. Find all courses whose duration is more than 25 hrs.
var durations=courses.filter(c=>parseInt(c.duration)>25);
console.log("3. all courses whose duration is more than 25 hrs:");
console.log(durations);
// 4. Create a new array with title and duration only.
var newArray=courses.map(m=>({title:m.title,duration:m.duration}));
console.log("4.title and duration:");
console.log(newArray);
// 5. Find all courses where the level is "Beginner".
var beginnerCourse=courses.filter(c=>c.level.toLowerCase()=="beginner");
console.log("5.courses where the level is Beginner:");
console.log(beginnerCourse);
// 6. Sort the courses by duration (ascending order).
var sorted=courses.sort((c1,c2)=>parseInt(c1.duration)-parseInt(c2.duration));
console.log("6.courses by duration (ascending order):");
console.log(sorted);
// 7. Sort the courses by level (Beginner → Intermediate → Advanced).
var levelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
courses.sort(function (a, b) {
  return levelOrder[a.level] - levelOrder[b.level];
});
console.log("7.courses by level (Beginner → Intermediate → Advanced):");
console.log(courses);
// 8. Find all courses in the "Backend" category.
var BackendCourses=[];
for(let c of courses)
{
  let category=c.category;
  if(category=="Backend")
  {
    BackendCourses.push(c);
  }
  
}
console.log("8.courses in the Backend category:");
console.log(BackendCourses);
// 9. Find the average price of all courses.
var total=courses.reduce((s,n)=>s+n.price,0);
var avg=total/courses.length;
console.log("9.average price of all courses:");
console.log(avg);
// 10. Count how many courses belong to each level.
var levels={};
for(let c of courses)
{
  let level=c.level;
  if(level in levels)
  {
    levels[level]+=1;
  }
  else
  {
    levels[level]=1;
  }
}
console.log("10.courses belong to each level:");
console.log(levels);

// 11. Find the most expensive course price.
var highest=courses.reduce((c1,c2)=>c1>c2?c1:c2);
console.log("11.most expensive course price:");
console.log(highest);

// 12. Create a new array with title and price of each course.
var newArray=courses.map(m=>({Title:m.title,Price:m.price}));
console.log("12.title and price of each course:");
console.log(newArray);

// 13. Find the total number of courses in each category.
var CategoryTotal={};
for(let c of courses)
{
  let category=c.category;
  if(category in CategoryTotal)
  {
    CategoryTotal[category]+=1;
  }
  else{
    CategoryTotal[category]=1;
  }
}
console.log("13.total number of courses in each category:");
console.log(CategoryTotal);

// 14. Sort the courses by price (low to high).
var lowestTohighest=courses.sort((p1,p2)=>p1.price-p2.price);
console.log("14.courses by price (low to high):");
console.log(lowestTohighest);

// 15. Find the total price of all courses.
var totalprice=courses.reduce((s,p)=>s+p.price,0);
console.log("15.total price of all courses:");
console.log(totalprice);

// 16. Sort the courses by price (high to low).
var highestTolowest=courses.sort((p1,p2)=>p2.price-p1.price);
console.log("16.courses by price (high to low)");
console.log(highestTolowest);
// 17. Create a new array showing title and instructor name.
var newArr=courses.map(m=>({Title:m.title,instructor:m.instructor}));
console.log("17. title and instructor name");
console.log(newArr);

// 18. Find all courses with price greater than 2500.
var pricegt2500=courses.filter(p=>p.price>2500);
console.log("18.price greater than 2500.");
console.log(pricegt2500);

// 19. Create a new array of course titles in uppercase.
var newArrayUppercase=courses.map(c=>({Title:c.title.toUpperCase()}));
console.log("19.course titles in uppercase.:");
console.log(newArrayUppercase);

// 20. Sort the courses by title (alphabetical order).
var sorts=courses.sort((c1,c2)=>c1.title.localeCompare(c2.title));
console.log("20.courses by title (alphabetical order):");
console.log(sorts);
