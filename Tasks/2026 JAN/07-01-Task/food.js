const foods = [
  {
    id: 1,
    name: "Chicken Biriyani",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: false,
    price: 180,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Chicken", quantity: "150g" },
      { item: "Spices", quantity: "20g" }
    ]
  },
  {
    id: 2,
    name: "Veg Biriyani",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: true,
    price: 150,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Vegetables", quantity: "150g" },
      { item: "Spices", quantity: "20g" }
    ]
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "Breakfast",
    cuisine: "South Indian",
    isVeg: true,
    price: 80,
    ingredients: [
      { item: "Rice Batter", quantity: "150g" },
      { item: "Potato", quantity: "100g" }
    ]
  },
  {
    id: 4,
    name: "Idli",
    category: "Breakfast",
    cuisine: "South Indian",
    isVeg: true,
    price: 50,
    ingredients: [
      { item: "Rice Batter", quantity: "120g" }
    ]
  },
  {
    id: 5,
    name: "Vada",
    category: "Snack",
    cuisine: "South Indian",
    isVeg: true,
    price: 40,
    ingredients: [
      { item: "Urad Dal", quantity: "100g" }
    ]
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    cuisine: "North Indian",
    isVeg: true,
    price: 170,
    ingredients: [
      { item: "Paneer", quantity: "150g" },
      { item: "Butter", quantity: "30g" }
    ]
  },
  {
    id: 7,
    name: "Chicken Curry",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: false,
    price: 160,
    ingredients: [
      { item: "Chicken", quantity: "150g" }
    ]
  },
  {
    id: 8,
    name: "Fish Curry",
    category: "Main Course",
    cuisine: "Kerala",
    isVeg: false,
    price: 190,
    ingredients: [
      { item: "Fish", quantity: "150g" }
    ]
  },
  {
    id: 9,
    name: "Veg Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: true,
    price: 120,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Vegetables", quantity: "100g" }
    ]
  },
  {
    id: 10,
    name: "Chicken Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: false,
    price: 150,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },

  {
    id: 11,
    name: "Veg Noodles",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: true,
    price: 110,
    ingredients: [
      { item: "Noodles", quantity: "200g" }
    ]
  },
  {
    id: 12,
    name: "Chicken Noodles",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: false,
    price: 140,
    ingredients: [
      { item: "Noodles", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 13,
    name: "Burger",
    category: "Fast Food",
    cuisine: "American",
    isVeg: false,
    price: 130,
    ingredients: [
      { item: "Bun", quantity: "1 pc" },
      { item: "Patty", quantity: "1 pc" }
    ]
  },
  {
    id: 14,
    name: "Veg Burger",
    category: "Fast Food",
    cuisine: "American",
    isVeg: true,
    price: 110,
    ingredients: [
      { item: "Bun", quantity: "1 pc" },
      { item: "Veg Patty", quantity: "1 pc" }
    ]
  },
  {
    id: 15,
    name: "Pizza",
    category: "Fast Food",
    cuisine: "Italian",
    isVeg: true,
    price: 200,
    ingredients: [
      { item: "Cheese", quantity: "100g" },
      { item: "Flour", quantity: "200g" }
    ]
  },

  {
    id: 16,
    name: "Chicken Pizza",
    category: "Fast Food",
    cuisine: "Italian",
    isVeg: false,
    price: 250,
    ingredients: [
      { item: "Chicken", quantity: "120g" },
      { item: "Cheese", quantity: "100g" }
    ]
  },
  {
    id: 17,
    name: "Pasta",
    category: "Main Course",
    cuisine: "Italian",
    isVeg: true,
    price: 160,
    ingredients: [
      { item: "Pasta", quantity: "200g" }
    ]
  },
  {
    id: 18,
    name: "Chicken Pasta",
    category: "Main Course",
    cuisine: "Italian",
    isVeg: false,
    price: 190,
    ingredients: [
      { item: "Pasta", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 19,
    name: "Samosa",
    category: "Snack",
    cuisine: "Indian",
    isVeg: true,
    price: 20,
    ingredients: [
      { item: "Potato", quantity: "80g" }
    ]
  },
  {
    id: 20,
    name: "Pani Puri",
    category: "Snack",
    cuisine: "Indian",
    isVeg: true,
    price: 40,
    ingredients: [
      { item: "Puri", quantity: "6 pcs" }
    ]
  },

  {
    id: 21,
    name: "Falafel",
    category: "Snack",
    cuisine: "Middle Eastern",
    isVeg: true,
    price: 90,
    ingredients: [
      { item: "Chickpeas", quantity: "100g" }
    ]
  },
  {
    id: 22,
    name: "Shawarma",
    category: "Fast Food",
    cuisine: "Arabic",
    isVeg: false,
    price: 150,
    ingredients: [
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 23,
    name: "Hummus",
    category: "Dip",
    cuisine: "Middle Eastern",
    isVeg: true,
    price: 80,
    ingredients: [
      { item: "Chickpeas", quantity: "150g" }
    ]
  },
  {
    id: 24,
    name: "Grilled Chicken",
    category: "Main Course",
    cuisine: "Continental",
    isVeg: false,
    price: 220,
    ingredients: [
      { item: "Chicken", quantity: "200g" }
    ]
  },
  {
    id: 25,
    name: "Salad",
    category: "Healthy",
    cuisine: "Global",
    isVeg: true,
    price: 90,
    ingredients: [
      { item: "Vegetables", quantity: "150g" }
    ]
  },

];


// 1. Create an array of all food names.
var foodName=foods.map(m=>m.name);
console.log("1. Create an array of all food names.");
console.log(foodName);

// 2. Create an array of food names with price in the format:  "Masala Dosa - ₹80".
var foodNPrice=foods.map(f=>`${f.name}-${f.price}`);
console.log("2. Create an array of food names with price in the format:  Masala Dosa - ₹80.");
console.log(foodNPrice);

// 3. Create an array of all cuisines in uppercase.
var cuisinesUpper=foods.map(f=>f.cuisine.toUpperCase());
console.log("3. Create an array of all cuisines in uppercase.");
console.log(cuisinesUpper);

// 4. Create an array of objects containing id and name only.
var idandName=foods.map(f=>({id:f.id,Name:f.name}));
console.log("4. Create an array of objects containing id and name only.");
console.log(idandName);

// 5. Create an array that shows only the prices of all foods.
var prices=foods.map(f=>f.price);
console.log("5. Create an array that shows only the prices of all foods.");
console.log(prices);

// 6. List all vegetarian foods.
var veg=foods.filter(f=>f.isVeg==true);
console.log("6. List all vegetarian foods.");
console.log(veg);


// 7. List all foods that belong to the "Main Course" category.
var maincourseFood=foods.filter(f=>f.category=="Main Course");
console.log("7. List all foods that belong to the Main Course category.");
console.log(maincourseFood);

// 8. Find all foods with price less than 100.
var foodls=foods.filter(f=>f.price<100);
console.log("8. Find all foods with price less than 100.");
console.log(foodls);

// 9. List all foods whose cuisine is "Indian".
var cuisineIndia=foods.filter(f=>f.cuisine=="Indian");
console.log("9. List all foods whose cuisine is Indian.");
console.log(cuisineIndia);

// 10. Find all foods that contain "Chicken" as an ingredient.
var chickenIn=foods.filter(f=>f.ingredients.item=="Chicken");
console.log("10. Find all foods that contain Chicken as an ingredient.");
console.log(chickenIn);

// 11. Find the total price of all food items.
var total=foods.reduce((s,f)=>s+f.price,0);
console.log("11. Find the total price of all food items.");
console.log(total);

// 12. Find the average price of vegetarian foods.
var sum=foods.reduce((s,f)=>s+f.price,0);
var avg=sum/foods.length;
console.log("12. Find the average price of vegetarian foods.");
console.log(avg);

// 13. Create an object that shows total number of foods by category. Example: { Breakfast: 4, Snack: 6 }
totalCount={};
for(let f of foods)
{
    let category=f.category;
    if(category in totalCount)
    {
    totalCount[category]+=1;
    }
    else{
        totalCount[category]=1;
    }
}
console.log("13. Create an object that shows total number of foods by category. Example: { Breakfast: 4, Snack: 6 }");
console.log(totalCount);

// 14. Create an object that shows total price by cuisine.
var cuisinePrice={};
for(let f of foods)
{
    let cuisine=f.cuisine;
    let price=f.price;
    if(cuisine in cuisinePrice)
    {
        cuisinePrice[cuisine]+=[price];
    }
    else{
        cuisinePrice[cuisine]=[price];
    }
}
console.log("14. Create an object that shows total price by cuisine.");
console.log(cuisinePrice);

// 15. Find the most expensive food item.
var expensivefood=foods.reduce((f1,f2)=>f1.price>f2.price?f1:f2);
console.log("15. Find the most expensive food item.");
console.log(expensivefood);

// 16. Sort all foods by price (ascending order).
var ascsort=foods.sort((f1,f2)=>f1.price-f2.price);
console.log("16. Sort all foods by price (ascending order).");
console.log(ascsort);

// 17. Sort all foods by price (descending order).
var dscsort=foods.sort((f1,f2)=>f2.price-f1.price);
console.log("17. Sort all foods by price (descending order).");
console.log(dscsort);

// 18. Sort foods by name alphabetically (A–Z).
var alpha=foods.sort((f1,f2)=>f1.name.localeCompare(f2.name));
console.log("18. Sort foods by name alphabetically (A–Z).");
console.log(alpha);

// 19. Sort foods by category alphabetically.
var categorySort=foods.sort((f1,f2)=>f1.category.localeCompare(f2.category));
console.log("19. Sort foods by category alphabetically.");
console.log(categorySort);

// 20. Sort foods by cuisine in reverse alphabetical order.
var cuisineSort=foods.sort((f1,f2)=>f2.cuisine.localeCompare(f1.cuisine));
console.log("20. Sort foods by cuisine in reverse alphabetical order.");
console.log(cuisineSort);
