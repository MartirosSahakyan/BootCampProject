const menu = [
  {
    type: "food",
    name: "free",
    price: 5,
  },
  {
    type: "food",
    name: "hot-dog",
    price: 7,
  },
  {
    type: "food",
    name: "pizza",
    price: 25,
  },
  {
    type: "drink",
    name: "coca-cola",
    price: 3,
  },
  {
    type: "drink",
    name: "water",
    price: 2,
  },
  {
    type: "drink",
    name: "martini",
    price: 40,
  },
];

class CoffeeShop {
  constructor(name, menu = []) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(foodName) {
    let orderedFood;
    this.menu.forEach((el) => {
      if (el.name === foodName) {
        orderedFood = el.name;
      }
    });
    if (orderedFood) {
      this.orders.push(foodName);
    } else {
      console.log("This item is currently unavailable!");
    }
  }

  listOrders() {
    return this.orders;
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    } else {
      return `The ${this.orders.shift()} is ready!.`;
    }
  }

  dueAmount() {
    let due = 0;
    this.orders.forEach((orderItem) => {
      this.menu.forEach((menuItem) => {
        if (orderItem === menuItem.name) {
          due += menuItem.price;
        }
      });
    });
    return due;
  }

  cheapestItem() {
    let prices = [];
    this.menu.forEach((el) => {
      prices = [...prices, el.price];
    });
    let minPrice = Math.min(...prices);
    let cheapestItemIndex = prices.indexOf(minPrice);
    let cheapestItem = this.menu[cheapestItemIndex].name;
    return cheapestItem;
  }

  drinksOnly() {
    let drinks = [];
    this.menu
      .filter((el) => el.type === "drink")
      .forEach((el) => drinks.push(el.name));
    return drinks;
  }

  foodsOnly() {
    let foods = [];
    this.menu
      .filter((el) => el.type === "food")
      .forEach((el) => foods.push(el.name));
    return foods;
  }
}

const tcs = new CoffeeShop("verona", menu);

// tcs.addOrder('coca')
// tcs.addOrder('pizza')
// tcs.addOrder('coca-cola')

// console.log(tcs.listOrders());
// console.log(tcs.dueAmount());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.listOrders());
// console.log(tcs.dueAmount());

// console.log(tcs.cheapestItem());
// console.log(tcs.drinksOnly());
// console.log(tcs.foodsOnly());
