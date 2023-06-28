class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = {
    price: 50,
    calories: 20
  };

  static SIZE_LARGE = {
    price: 100,
    calories: 40
  };

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20
  };

  static STUFFING_SALAD = {
    price: 20,
    calories: 5
  };

  static STUFFING_POTATO = {
    price: 15,
    calories: 10
  };

  static TOPPING_SAUCE = {
    price: 15,
    calories: 0
  };

  static TOPPING_MAYO = {
    price: 20,
    calories: 5
  };

  static addTopping(hamburger, topping) {
    hamburger.toppings.push(topping);
  }

  static calculatePrice(hamburger) {
    let totalPrice = hamburger.size.price + hamburger.stuffing.price;

    hamburger.toppings.forEach(topping => {
      totalPrice += topping.price;
    });

    return totalPrice;
  }

  static calculateCalories(hamburger) {
    let totalCalories = hamburger.size.calories + hamburger.stuffing.calories;

    hamburger.toppings.forEach(topping => {
      totalCalories += topping.calories;
    });

    return totalCalories;
  }
}


var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
Hamburger.addTopping(hamburger, Hamburger.TOPPING_MAYO);

console.log("Calories: " + Hamburger.calculateCalories(hamburger));
console.log("Price: " + Hamburger.calculatePrice(hamburger));

Hamburger.addTopping(hamburger, Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: " + Hamburger.calculatePrice(hamburger));
