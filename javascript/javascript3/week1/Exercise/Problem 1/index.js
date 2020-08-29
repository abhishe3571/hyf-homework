/*Problem1: Meal ordering website

Imagine your are running a meal ordering website. Orders come in from the web and we need
to store them in a json file. Create a json file with two orders that contain at least 
these things:

Order name
Order id
Price
List of drinks
Order extras (fx cheese, lettuce etc.)
Think about what what type the data should be saved as! 
*/

const orderFirst = {
  orderName: ["Butter Chicken", "Roasted chicken", "chicken biryani"],
  orderId: 13,
  price: [400, 200, 300],
  listOfDrinks: ["Water", "soft-drink", "hard-drink"],
  orderExtras: ["cheese", "salad"],
};

console.log(JSON.stringify(orderFirst));

