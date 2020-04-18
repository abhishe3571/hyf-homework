// Problem1: Flight booking fullname function
/*Even for a startup as successful as Smart-ease there needs 
  to be money in the bank. A customer from a flight booking
  website has asked for our help creating a specific part of 
  their application: When a user books a flight they write 
  their firstname and surname, but when the ticket is printed
  a fullname should be displayed. It is our responsibility to 
  create that.

  Create a function called getFullname that returns a fullname. 
  It should have two parameters: firstname and surname.
*/  
/*

function getFullname(firstname, surname) {
    const fullName = firstname + " " + surname;
    return fullName;
  }
  
  const fullname1 = getFullname("Brijesh", "Singh");
  const fullname2 = getFullname("Abhishek", "Kumar");
  
  console.log(fullname1);
  console.log(fullname2);
  */

 function getFullname(firstname, surname, useFormalName) {

    

    let fullname =   firstname + " " +  surname  

    if (useFormalName == true) {
        return   "Lord "  +  fullname ;
    }
    else if(useFormalName == false) {
        return fullname;
    }

    

    


}


    const fullname1 = getFullname("Abhishek", "Singh", true);
    const fullname2 = getFullname("Pappu", "Singh", false);
    
    


console.log(fullname1);
console.log(fullname2);