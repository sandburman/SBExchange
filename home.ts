class Student {

  fullName : string;

  constructor (public firstName, public middleName, public lastName) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
firstName : string;
lastName : string;
}

function greeting(person: Person) {
return "Hello, " + person.firstName + " " + person.lastName;
}


var user = new Student("Jane", "M.", "Snewin");

document.body.innerHTML = greeting(user);
