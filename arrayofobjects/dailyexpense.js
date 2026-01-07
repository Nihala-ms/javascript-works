var expenses = [
  { id: 1,
    title: "Dosa and Tea",
    amount: 40, category: "food",
    owner: "jazeel",
    payment_method: "upi",
    priority: "need" },
  { id: 2,
    title: "Bus Fare",
    amount: 25,
    category: "transport",
    owner: "jazeel",
    payment_method: "cash",
    priority: "need" },
  { id: 3,
    title: "Mobile Recharge",
    amount: 299,
    category: "utilities",
    owner: "jazeel",
    payment_method: "upi",
    priority: "need" },
  { id: 4,
    title: "Movie Ticket",
    amount: 150,
    category: "entertainment",
    owner: "jazeel",
    payment_method: "card",
    priority: "want" },
  { id: 5,
    title: "Snacks", 
    amount: 60, 
    category: "food", 
    owner: "jazeel", 
    payment_method: "cash", 
    priority: "want" },
  { id: 6,
    title: "Gym Membership", 
    amount: 1200, 
    category: "health", 
    owner: "sarah", 
    payment_method: "upi", 
    priority: "need" },
  { id: 7,
    title: "Coffee", 
    amount: 120, 
    category: "food", 
    owner: "sarah", 
    payment_method: "card", 
    priority: "want" },
  { id: 8,
    title: "Books", 
    amount: 450, 
    category: "education", 
    owner: "sarah", 
    payment_method: "upi", 
    priority: "need" },
  { id: 9,
     title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
  { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
  { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
  { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
  { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];

//owner summary

var ownerSummary={};
for(let t of expenses)
{
    let owner=t.owner;
    let amount=t.amount;
    if(owner in ownerSummary)
    {
        ownerSummary[owner]+=amount;
    }
    else
    {
        ownerSummary[owner]=amount;
    }
}

// console.log(ownerSummary);

//expense with highest amount

var maxTransaction=expenses.reduce((t1,t2)=>t1.amount>t2.amount?t1:t2);
// console.log(maxTransaction);


//cash transaction

var cashTransaction=expenses.filter(t=>t.payment_method=="cash");
// console.log(cashTransaction);

//transaction amount>1000

var Amount1=expenses.filter(t=>t.amount>1000);
// console.log(Amount1);

//total expense

var total=expenses.reduce((s,t)=>s+t.amount,0);
// console.log(total);


//most used payment method
var paymentMethodCount={};
for(let t of expenses)
{
    let type=t.payment_method;
    if(type in paymentMethodCount)
    {
        paymentMethodCount[type]+=1;
    }
    else{
        paymentMethodCount[type]=1;
    }

}
// console.log(paymentMethodCount);

//saras expenses for food

var sarasFoodexpense=expenses.filter(t=>t.owner=="sarah" && t.category=="food").reduce((s,t)=>s+t.amount,0);
// console.log(sarasFoodexpense);

//priority summary

var prioritySummary={};
for(let t of expenses)
{
    let priority=t.priority;
    if(priority in prioritySummary)
    {
        prioritySummary[priority]+=t.amount;
    }
    else{
        prioritySummary[priority]=t.amount;
    }
}
// console.log(prioritySummary);

//transactions of jazeel 

var jazeelTransaction=expenses.filter(t=>t.owner=="jazeel");
//console.log(jazeelTransaction);

//highest paid category

var CategorySummary={};
for(let t of expenses)
{
    let category=t.category;
    let amount=t.amount;
    if(category in CategorySummary)
    {
        CategorySummary[category]+=amount;
    }
    else
    {
        CategorySummary[category]=amount;
    }

}

var sorted=Object.entries(CategorySummary).sort((t1,t2)=>t2[1]-t1[1]);
// console.log(sorted);

//priority summary wrt owner

var prioritySummary={};
for(let t of expenses)
{
    let priority=t.priority;
    let amount=t.amount;
    let owner=t.owner;
    
    if(owner in prioritySummary)
    {
        prioritySummary[owner][priority]+=amount;
    }
    else{
      if(priority=="need")
      {
        prioritySummary[owner]={"need":amount,"want":0};
      }
      else{
        prioritySummary[owner]={"need":0,"want":amount};

      }
    }
}

console.log(prioritySummary);





//payment method
var paymentSummary={};
for(let t of expenses)
{
  let payment_method=t.payment_method;
  if(payment_method in paymentSummary)
  {
    paymentSummary[payment_method]+=1;
  }
  else{
    paymentSummary[payment_method]=1;
  }
}
console.log(paymentSummary);










