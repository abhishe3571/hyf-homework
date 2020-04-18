// Problem 3: Weather wear

/* Create a function (that you have to name) that has temperature 
   as parameter. Based on the temperature it should return a string
   with what the user should wear. You decide what the user should 
   wear based on the temperature.
*/
// const clothesToWear = youCreateThisFunctionName(18);
//console.log(clothesToWear); // Logs out: "shorts and a t-shirt" 


function weatherWear(temperature){
    let logOut; 
    if (temperature>=30) {
        logOut = `\"We should wear the short and t-shirt\"`;
    } 
    else if (temperature >=5 && temperature < 30) {
        logOut = `\"We should wear sweater\"`;
    }
    else if (temperature >= 0 && temperature < 5) {
        logOut = `\"We should wear only leather clothes\"`;

    }
    else {
    }

    return logOut;
    
}


console.log(weatherWear(3));
console.log(weatherWear(45));
console.log(weatherWear(15));