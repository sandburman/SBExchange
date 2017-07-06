var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeting(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "Snewin");
document.body.innerHTML = greeting(user);
