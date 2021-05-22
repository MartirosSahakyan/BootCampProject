function myNew(constructor, ...args) {
  const _o = Object.create(constructor.prototype);
  const result = constructor.apply(_o, args);
  const isReference =
    typeof result === "object" || typeof result === "function";
  const isNull = result === null;
  if (isReference && !isNull) {
    return result;
  }
  return _o;
}

function User(name, pass) {
  (this.name = name), (this.pass = pass);
  this.region = "Armenia";
}

const user1 = myNew(User, "John", 123456);
const user2 = myNew(User, "Jane", 47854);
console.log(user1);
console.log(user2);
