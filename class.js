
// zen task: write a person class to hold all details:

class Person {
    constructor(name,age,city,email,country) {
        this.name= name;
        this.age= age;
        this.city= city;
        this.email= email;
        this.country= country;
    }

    getDetails() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.email);
        console.log(this.country);
    }
} 

const person_1 = new Person("shyam","23","chennai","shyam@gmail","India");

console.log(person_1);

// getting details: 

person_1.getDetails();
