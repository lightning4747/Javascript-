let person = {
    firstname : "alice",
    lastname : "wayne",
    age : 35,

    getperson: function() {
      return this.firstname + " is " + this.age + " years old"; 
    }
};

console.log(person);

console.log(person.firstname);
console.log(person["lastname"]);
console.log(person.getperson());

const {firstname, lastname, age} = person;
console.log(firstname);
console.log(lastname);
console.log(age);

console.log(person.firstname);
person.email = "something@gmail.com";
person.age = 36;

console.log(person.email);