class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = owner;

    if (owner.age < 18) {
      console.log(`Власник автомобіля ${owner.name} (${owner.age} років) має бути повнолітнім.`);
      console.log(`###############`);
      this.owner = null;
    }
  }

  getInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
    if (this.owner) {
      console.log('Інформація про власника:');
      this.owner.getInfo();
    } else {
      console.log('Автомобіль не має власника.');
    }
  }
}

const person1 = new Person('Олександр', 25);
const person2 = new Person('Олег', 17);
const person3 = new Person('Іван', 30);

const car1 = new Car('Toyota', 'Camry', 2010, 'АА1234АА', person1);
const car2 = new Car('Honda', 'Civic', 2015, 'АА5678АА', person2);
const car3 = new Car('Ford', 'Focus', 2020, 'АА9999АА', person3);

car1.getInfo();
console.log('-----------------');
car2.getInfo();
console.log('-----------------');
car3.getInfo();