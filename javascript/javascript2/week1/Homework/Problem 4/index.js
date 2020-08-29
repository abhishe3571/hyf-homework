// Problem 4: hyfBay - get the okay'est products here

/* We have been hired for a company to do a SPA - Single Page App for them. It is a 
   website where a user can search for products. The products can also be filtered and 
   sorted based on what products the user wants to see.

   We are going to be building this website step by step, so have patience :)

   Lets get started!
   In the homework/hyf-bay folder there is a project template you should continue working 
   on. So copy all the files into your hyf-homework/javascript/javascript2/week1 folder.

   The index.html is very basic. It simply loads two javascript files and include some css. 
   The two javascript files are hyfBayHelpers.js and the main.js. hyfBayHelpers.js contains 
   a function (getAvailableProducts) that we can use to get an array of products. In the 
   main.js we will be writing all our code!

   Requirements
    . Using the getAvailableProducts array we will render an html list of products
    . The list should contain name, price and rating
    . The list of products should be generated through calling a function called renderProducts(products)
   So how can i do that?
   Here is a possible way to render the products

   In the html create a ul that will contain all the products. Select that ul using document.querySelector
   For each product in the products array:
    . create an li
    . Set the innerHTML of that li to the contain the name, price and rating
    . Append the li to the ul

*/

console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  const ul = document.querySelector("ul");
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);