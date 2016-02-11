var Person = (function(){
    function Person(firstName, lastName){
        this.name = firstName + ' ' + lastName;
        this.firstName = firstName;
        this. lastName = lastName;
    }

    return Person;
})();

var peter = new Person("Peter", "Jackson");

peter.firstName = 'Gosho';
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);

