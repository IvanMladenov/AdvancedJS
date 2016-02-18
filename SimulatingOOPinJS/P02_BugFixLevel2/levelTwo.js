var Person = (function(){
    function Person(firstName, lastName){
        this.firstName = firstName;
        this. lastName = lastName;

        Object.defineProperty(this, 'name', {
            get:function(){
                return this.firstName + ' ' + this.lastName;
            },
            set: function(name) {
                var names = name.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        })

    }

    return Person;
})();

var person = new Person("Peter", "Jackson");
console.log(person.name);
console.log(person.firstName);
console.log(person.lastName);
console.log();

person.firstName = "Ivan";
console.log(person.name);
console.log(person.firstName);
console.log(person.lastName);
console.log();

person.name = 'Donald Duck';
console.log(person.name);
console.log(person.firstName);
console.log(person.lastName);
console.log();

person.lastName = 'Shmruk';
console.log(person.name);
console.log(person.firstName);
console.log(person.lastName);

