const SIZE_SMALL = {
  price: 50,
  calories: 20
};

const SIZE_LARGE = {
  price: 100,
  calories: 40
};

const STUFFING_CHEESE = {
  price: 10,
  calories: 20
};

const STUFFING_SALAD = {
  price: 20,
  calories: 5
};

const STUFFING_POTATO = {
  price: 15,
  calories: 10
};

const TOPPING_SAUCE = {
  price: 15,
  calories: 0
};

const TOPPING_MAYO = {
  price: 20,
  calories: 5
};

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;

    this.toppings.forEach(topping => {
      totalPrice += topping.price;
    });

    return totalPrice;
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;

    this.toppings.forEach(topping => {
      totalCalories += topping.calories;
    });

    return totalCalories;
  }
}


var hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addTopping(TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());