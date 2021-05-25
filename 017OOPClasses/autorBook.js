class Author {
  constructor({ name, email, gender }) {
    this._name = name;
    this.email = email;
    this._gender = gender;
  }
  toString() {
    return `Ms ${this.name}`;
  }
  get gender() {
    return this._gender.toLowerCase();
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new Error("name must be only string");
    }
    this._name = value;
  }
  get name() {
    return this._name;
  }
}
const author1 = { name: "Jhon", email: "aaa@mail.ru", gender: "fmAle" };

class Book extends Author {
  constructor({ name, email, gender }, title, price, quantity) {
    super({ name, email, gender });
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  getProfit() {
    return this.price * this.quantity;
  }
}

const book1 = new Book(author1, "love story", 10, 50);
// console.log(book1.gender);
book1.name = 17;
// console.log(book1.name);
// console.log(book1.toString());
// console.log(book1.getProfit());
