
var movies = [
  {
    id: 1,
    title: "Drishyam",
    director: "Jeethu Joseph",
    price: 250,
    genre: "Thriller",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Premam",
    director: "Alphonse Puthren",
    price: 200,
    genre: "Romance",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    price: 450,
    genre: "Science Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Interstellar",
    director: "Christopher Nolan",
    price: 500,
    genre: "Sci-Fi/Drama",
    language: "English"
  },
  {
    id: 5,
    title: "Bangalore Days",
    director: "Anjali Menon",
    price: 300,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 6,
    title: "Lucifer",
    director: "Prithviraj Sukumaran",
    price: 350,
    genre: "Action/Thriller",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "Charlie",
    director: "Martin Prakkat",
    price: 280,
    genre: "Romance/Drama",
    language: "Malayalam"
  },
  {
    id: 8,
    title: "Joker",
    director: "Todd Phillips",
    price: 420,
    genre: "Psychological Thriller",
    language: "English"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    price: 550,
    genre: "Action/Fantasy",
    language: "English"
  },
  {
    id: 10,
    title: "KGF: Chapter 1",
    director: "Prashanth Neel",
    price: 380,
    genre: "Action",
    language: "Kannada"
  },
  {
    id: 11,
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    price: 480,
    genre: "Epic/Fantasy",
    language: "Telugu"
  },
  {
    id: 12,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    price: 400,
    genre: "Drama",
    language: "English"
  },
  {
    id: 13,
    title: "Titanic",
    director: "James Cameron",
    price: 370,
    genre: "Romance/Drama",
    language: "English"
  },
  {
    id: 14,
    title: "Uyare",
    director: "Manu Ashokan",
    price: 260,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 15,
    title: "Minnal Murali",
    director: "Basil Joseph",
    price: 320,
    genre: "Superhero/Fantasy",
    language: "Malayalam"
  }
];



// 1. Display all movie titles using map().
var titles=movies.map(m=>m.title);
console.log("1.Titles:");
console.log(titles);
// 2. Find all movies where the language is "Malayalam".
var malayalamMovies=movies.filter(m=>m.language=="Malayalam");
console.log("2.Movies in Malayalam Language:");
console.log(malayalamMovies);
// 3. Find all movies with a price greater than 300.
var moviesCost=movies.filter(m=>m.price>300);
console.log("3.Movies price greaterthan 300:");
console.log(moviesCost);
// 4. Display the title and director of all English movies.
var moviesTitleDirector=movies.filter(l=>l.language=="English").map(m=>({title:m.title,director:m.director}));
console.log("4.Titles and Director of English movies:");
console.log(moviesTitleDirector);
// 5. Find the total price of all movies using reduce().
var total=movies.reduce((s,m)=>s+m.price,0);
console.log("5.total price of all movies using reduce():");
console.log(total);
// 6. Find the average price of all movies.
var avg=movies.reduce((s,m)=>(s+m.price)/movies.length,0);
console.log("6.Average price of all movies:");
console.log(avg);
// 7. Find the movie with the highest price.
var max=movies.reduce((m1,m2)=>m1.price>m2.price?m1:m2);
console.log("7.highest price movie");
console.log(max);
// 8. Find the movie with the lowest price.
var min=movies.reduce((m1,m2)=>m1.price<m2.price?m1:m2);
console.log("8.lowest price movie");
console.log(min);
// 9. Find all movies directed by Christopher Nolan.
var Christophermovies=movies.filter(m=>m.director=="Christopher Nolan");
console.log("9.Movies of christopher nolan");
console.log(Christophermovies);
// 10. Count how many movies are in English and how many are in Malayalam.
var movieCount={ English: 0, Malayalam: 0};
console.log("10.Movies in english and malayalam:");
for(let m of movies)
{ 
  if(m.language=="Malayalam" || m.language=="English")
  {
    movieCount[m.language]++;
  }
}
console.log(movieCount);
// 11. Sort the movies by price in ascending order.
var sorted=movies.sort((p1,p2)=>p1.price-p2.price);
console.log("11.movies by price in ascending order:");
console.log(sorted);
// 12. Sort the movies by title in alphabetical order.
var order=movies.sort((m1,m2)=>m1.title.localeCompare(m2.title));
console.log("12.movies by title in alphabetical order:");
console.log(order);
// 13. Find the first movie that belongs to the genre "Thriller".
var firstMovie=movies.find(m=>m.genre=="Thriller");
console.log("13.first movie that belongs to the genre Thriller:");
console.log(firstMovie);

// 14. Create a new array containing only movie titles and prices.
var MovieTitlePrice=movies.map(m=>({title:m.title,price:m.price}));
console.log("14.new array containing only movie titles and prices:");

console.log(MovieTitlePrice);

// 15. Check whether any movie price is below 200 (use some()).
var checkPrice=movies.some(m=>m.price<200);
console.log("15.whether any movie price is below 200 (use some()):");

console.log(checkPrice);


