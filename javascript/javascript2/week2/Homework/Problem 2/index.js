/* Filter products
A very normal usecase for a product site is that a user wants to search for some product 
or find products that are cheaper than a set price. Lets implement that functionality for 
a user!

BUT first lets figure out what happens on a conceptual level, when a user filters some 
products:

Some kind of event happens, fx a user searches for a product, we need to listen for that 
event
When that event happens we need to filter the products the user wants
Then we should render those products
Lets get a little closer to javacript:

.addEventListener on an element
.filter on the products array
renderProducts with the filtered array

*/
console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  // your code here
  const ul = document.querySelector("ul");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);

// searching product through product name
const inputSearch = document.querySelector("#searchProduct");
inputSearch.addEventListener("keyup", refreshOutput);
inputSearch.addEventListener("input", refreshOutput);

// searching product through maximum price

const priceSearch = document.querySelector("#searchPrice");
priceSearch.addEventListener("keyup", refreshOutput);
priceSearch.addEventListener("input", refreshOutput);

function filterProducts(products, filterObj) {
  return products.filter((product) => {
    // filter by `name`
    if (filterObj.name !== undefined) {
      if (
        !product.name
          .toLocaleLowerCase()
          .trim()
          .includes(filterObj.name.toLocaleLowerCase().trim())
      ) {
        return false;
      }
    }

    // filter by `minPrice`
    if (filterObj.minPrice !== undefined) {
      if (product.price < filterObj.minPrice) {
        return false;
      }
    }

    // filter by `maxPrice`
    if (filterObj.maxPrice !== undefined) {
      if (product.price > filterObj.maxPrice) {
        return false;
      }
    }

    return true;
  });
}

function getFilters() {
  const currentFilters = {};

  const inputSearch = document.querySelector("#searchProduct");
  if (inputSearch.value && inputSearch.value.trim()) {
    currentFilters.name = inputSearch.value.trim();
  }

  const priceSearch = document.querySelector("#searchPrice");
  if (priceSearch.value && priceSearch.value.trim()) {
    const maxPrice = parseFloat(priceSearch.value.trim());

    if (!isNaN(maxPrice)) {
      currentFilters.maxPrice = maxPrice;
    }
  }

  return currentFilters;
}

function refreshOutput() {
  const output = document.querySelector("div.products ul");
  output.innerHTML = "";

  const filteredProducts = filterProducts(products, getFilters());
  renderProducts(filteredProducts);
}

// initial load
refreshOutput();

function sortProducts(productList, sortValue) {
  // copt the array
  productList = [...productList];

  // sorting cheap products
  if (sortValue === "cheap") {
    return productList.sort((a, b) => a.price - b.price);
  }

  // sorting expensive products
  if (sortValue === "expensive") {
    return productList.sort((a, b) => b.price - a.price);
  }

  // sorting products by their name
  if (sortValue === "name") {
    return productList.sort((a, b) => {
      const nameA = a.name.toLocaleUpperCase();
      const nameB = b.name.toLocaleUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return productList;
}
const sortedProducts = sortProducts(products, sortProducts.value);
