// Shopping cart using Classes
// Let's get a bit more into creating classes!

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class ShoppingCart {
//     constructor() {
//         this.products = [];
//     }

//     addProduct(product) {
//         // Implement functionality here
//     }

//     removeProduct(product) {
//         // Implement functionality here
//     }

//     searchProduct(productName) {
//         // Implement functionality here
//     }

//     getTotal() {
//         // Implement functionality here
//     }

//     renderProducts() {
//         // Implement functionality here
//     }

//     getUser() {
//         // Implement functionality here
//     }
// }

// const shoppingCart = new ShoppingCart();
// const flatscreen = new Product('flat-screen', 5000);
// shoppingCart.addProduct(flatscreen);
// So we have two classes. Product represents products. ShoppingCart represents a shopping cart.

// Part 1
// Create the functionality for the ShoppingCart class.

// addProduct should add a product to the products array.
// removeProduct should remove a product from the products array.
// getTotal should get the total price of the products in the shoppingcart.
// renderProducts should render the products to html. You decide what to show and how.
// searchProduct should return an array of product that match the productName parameter
// getUser should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1
// Part 2
// Try and create some products and call the addProduct and the removeProduct functions to see if they work.

// Call the getUser function to get a user. When the user has been fetched. Render the products using the renderProducts method. Also render the username and the
// total price of the products in the shoppingcart.

// Optional and a little tricky! Create a searchbar where a user can search for a product. Matching
// product are shown as an autocomplete. Clicking a product in the autocomplete opens a modal with
// product information.

// Part 3
// The Product class should get a method called convertToCurrency. The function should have currency
// as a parameter. Depending on the provided currency return the correct price for the product. Add 3
// or more curriencies. Or use an api for getting the price dependent on a currency that
// convertToCurrency uses.

// // Assuming dkr as default currency
// const plant = new Product('plant', 50);
// console.log(plant.convertToCurrency('dollars')) // 7.5
// Part 4, optional
// Be creative! Create some cool/weird/quirky functionality of either the Product class or the
// ShoppingCart class.

// Feedback giving time!
// Find a student to give feedback using this site: https://hyf-peer-review.herokuapp.com/ The
// feedback should be given after the homework has been handed in preferably latest two days after.

// To help you get started we have created some ressources about giving feedback. Find them
// here: https://github.com/HackYourFuture-CPH/curriculum/tree/master/review

const url = "https://jsonplaceholder.typicode.com/users/1";

// fetch(url)
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.name);
//   });

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    return this.products.push(product);
  }

  removeProduct(product) {
    const pos = this.products.indexOf(name);
    this.products.splice(pos, 1);
  }

  searchProduct(productName) {
    return this.products.filter((product) => {
      if (
        product.name
          .toLocaleLowerCase()
          .includes(productName.toLocaleLowerCase())
      ) {
        return product.name;
      }
    });
  }

  getTotal() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  renderProducts() {
    const productUl = document.querySelector(".productUl");
    productUl.innerHTML = "";

    this.products.forEach((product) => {
      const cartList = document.createElement("li");
      productUl.appendChild(cartList);
      cartList.textContent = `${product.name}`;

      const priceUl = document.querySelector(".priceUl");
      const priceList = document.createElement("li");
      priceUl.appendChild(priceList);
      priceList.textContent = `${product.price}`;
    });

    const paraTotal = document.querySelector(".total");
    paraTotal.textContent = `${this.user.name}'s total product cost is ${this.getTotal()}`;
  }

  getUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data.name);
        this.user = data;
        this.renderProducts();
      });
  }
}

class CurrencyConverter {
  constructor(baseCurrency) {
    if (!baseCurrency) {
      if (!baseCurrency) {
        throw Error(
          "You need to pass a valid currency as base currency, e.g. INR, GBP, DKK"
        );
      }
    }
    this.baseCurrency = baseCurrency;
    this.conversionRates = {};
  }

  async getConversionRate(outputCurrency) {
    if (this.conversionRates[outputCurrency] === undefined) {
      this.conversionRates[outputCurrency] = await this.fetchConversionRate(
        outputCurrency
      );
    }
    return this.conversionRates[outputCurrency];
  }

  async convertToCurrency(baseValue, outputCurrency) {
    const conversionRate = await this.getConversionRate(outputCurrency);
    return Math.round(conversionRate * baseValue * 100) / 100;
  }

  async fetchConversionRate(outputCurrency) {
    const url = `https://api.exchangeratesapi.io/latest?symbols=${outputCurrency}&base=${this.baseCurrency}`;
    const data = await (await fetch(url)).json();
    const conversionRate = data.rates[outputCurrency];
    return conversionRate;
  }
}

const currencyConverter = new CurrencyConverter("INR");

currencyConverter.convertToCurrency(1000, "DKK").then((convertedValue) => {
  console.log(convertedValue);
});

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(new Product("Gehun atta", 100));
shoppingCart.addProduct(new Product("Mobile", 1000));
shoppingCart.addProduct(new Product("Laptop", 50000));
shoppingCart.addProduct(new Product("TV", 20000));
console.log(shoppingCart);

// shoppingCart.removeProduct("laptop");
// console.log(shoppingCart);

console.log(shoppingCart.getTotal());
shoppingCart.searchProduct("TV");
console.log(shoppingCart);

shoppingCart.getUser();

//product.addProduct(gehunAtta, 25);
// const shoppingCart = new ShoppingCart();
// const flatscreen = new Product("flat-screen", 5000);
// shoppingCart.addProduct(flatscreen);
