// Problem1: Create a user class
// The class should have 2 properties: firstName and lastName. Hint: Use this and constructor.

// Create an instance of the class
// Use the new keyword and assign the instance in a variable.

// Try to log out the instance of the User to the console.
// Try to log out the users firstName

// Create a class method
// The method should be called getFullName, and should return the combined first name and last name
//   of the user. Use string concatenation or template literals. Remember to use the this keyword to
// access the attributes on the class instance.

// Call the getFullName method and log the result to the console.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
      return `${this.firstName}  ${this.lastName}`;
  }
}

const user1 = new User("Abhishek", "Singh");
console.log(user1);
console.log(user1.firstName);

console.log(user1.getFullName());
