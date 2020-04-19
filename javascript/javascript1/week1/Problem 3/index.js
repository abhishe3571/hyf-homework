// Problem3: Housey pricey (A house price estimator)


/* Two of your friends are considering buying a house,
   but cannot figure out what the right price should 
   be. Your friends know the width, the height and the
   depth of the house and the garden size. Lets help 
   them figure out if they paid too much: 
*/

/*  We have made our own formula for calculating the 
    price of a house. This formula is VERY simplified 
    and not at all close to the real calculation which 
    can get quite complicated:

     
    formula for calculating the price of a house:
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

    Your friend Peter is considering a house that is 8m wide, 10m 
    deep and 10m high. The garden size is 100m2. The house costs 
    2.500.000. Your friend Julia is considering a house that is 
    5m wide, 11m deep and 8m high. The garden size is 70m2. 
    This house costs 1.000.000.


    Figure out if Peter and Julia are paying too much or too little 
    using Javascript and the formula specified above.



*/

const widthOfPeterHouse = 8; //in meter
const deepOfPeterHouse = 10; //in meter
const heightOfPeterHouse = 10; //in meter
const gardenAreaOfPeterHouse = 100; // in square meter
const houseCostOfPeterHouse = 2500000;
const volumeOfPeterHouseInMeters = widthOfPeterHouse * deepOfPeterHouse * heightOfPeterHouse; //volume in meter cube
const housePriceOfPeterHouse = volumeOfPeterHouseInMeters * 2.5 * 1000 + gardenAreaOfPeterHouse * 300;

console.log("House price of Peter's House:", housePriceOfPeterHouse);

console.log(housePriceOfPeterHouse < houseCostOfPeterHouse);
console.log("Peter is not paying higher than house cost!");


const widthOfJuliyaHouse = 5; //in meter
const deepOfJuliyaHouse = 11; //in meter
const heightOfJuliyaHouse = 8; //in meter
const gardenAreaOfJuliyaHouse = 70; // in square meter
const houseCostOfJuliyaHouse = 1000000;
const volumeOfJuliyaHouseInMeters = widthOfJuliyaHouse * deepOfJuliyaHouse * heightOfJuliyaHouse; //volume in meter cube
const housePriceOfJuliyaHouse = volumeOfJuliyaHouseInMeters * 2.5 * 1000 + gardenAreaOfJuliyaHouse * 300;

console.log("House price of Juliya's House:", housePriceOfJuliyaHouse);

console.log(housePriceOfJuliyaHouse > houseCostOfJuliyaHouse);
console.log("Juliya is paying higher than house cost!");


