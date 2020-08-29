//console.log(generateListings(37));

//ForEach
//Create 37 listings and log out every listings size

const listings = generateListings(37);
console.log(listings);

listings.forEach((m) => console.log(m.size));

const listSize = listings.forEach((m) => m.size);

//Map
//Create an array that contains all the 37 listing prices.

console.log(listings.map((m) => m.price));

//Filter
//Using the 37 listings from the previous tasks
/* 
  Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
  Create an array of expensize listings prices. Each item in this array should be of type number
  Create an array of listings that have parking. Each item in this array should be of type object
*/

console.log(listings.filter((m) => m.price < 2000));

console.log(listings.filter((m) => m.price > 2000).map((m) => m.price));

console.log(listings.filter((m) => m.parking));



/// Filter listings
/*
If a user fx click on a button indicating that the user only wants listings that are of 
the type farm. Lets try and imagine how we would use a function to create this functionality:

const listings = generateListings(20);

const filter = {
    type: 'farm',
};

const farmListings = filterListings(listings, filter);
Okay, so the filterListings function takes a filter which is an object. Say the user wants
farm listings that cost more than 1.500.000.

const filter2 = {
    type: 'farm',
    minPrize: 1500000,
};

const cheapFarmListings = filterListings(listings, filter2);
Your job is to create the filterListings function. The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!
*/



function filterListings(listings, filterObj) {
  return listings.filter((house) => {
    // filter by `type`
    if (filterObj.type !== undefined) {
      if (
        house.type.toLocaleLowerCase().trim() !==
        filterObj.type.toLocaleLowerCase().trim()
      ) {
        return false;
      }
    }
    // filter by `hasGarden`
    if (filterObj.hasGarden !== undefined) {
      if (house.hasGarden !== filterObj.hasGarden) {
        return false;
      }
    }

    // filter by `minPrice`
    if (filterObj.minPrice !== undefined) {
      if (house.price < filterObj.minPrice) {
        return false;
      }
    }

    //  filter by `maxPrice`
    if (filterObj.maxPrice !== undefined) {
      if (house.price > filterObj.maxPrice) {
        return false;
      }
    }
    return true;
  });
}

const myFilters = {
  type: "farm",
  hasGarden: true,
  minPrice: 700,
  maxPrice: 2000,
};

const houseListings = generateListings(20000);
const farmListings = filterListings(houseListings, myFilters);

console.log(farmListings);


// Render listings
/*
Now create a function called renderListings. It should have one parameter: listings. 
When called the function should render the listings in an html list. How it should be 
rendered is up to you, but you could take inspiration from https://danskebank.dk/bolig/sogning?sorter=hoejt-forbrug
*/

function renderHouseListings(houseListings) {
    const ul = document.createElement('ul');
    houseListings.forEach((house) => {
      const li = document.createElement('li');
      li.innerHTML = `<h2>${house.type}</h2><span>Price: ${house.price}</span></br><span>Facilities: ${house.facilities}</span>`;
      ul.appendChild(li);
    });
    document.querySelector('div').appendChild(ul);
  }
  const myButton = document.querySelector('button');
  myButton.addEventListener('click', () => {
      renderHouseListings(houseListings)
    }
      );