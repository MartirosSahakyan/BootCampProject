Function.prototype.customApply = function (context, argsArr) {
  const key = "tempFn";
  context[key] = this;
  const result = context[key](...argsArr);
  delete context[key];
  return result;
};

Function.prototype.customCall = function (context, ...args) {
  const key = "tempFn";
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.customBind = function (context, ...args) {
  const key = "tempFn";
  context[key] = this;
  return function (...restArgs) {
    const result = context[key](...args, ...restArgs);
    delete context[key];
    return result;
  };
};

function greeting(message, country) {
  console.log(`${message} ${this.name} from ${country}`);
}
const obj = {
  name: "John",
  age: 29,
};

// greeting.apply(obj, ['hello', 'Armenia'])
// greeting.customApply(obj, ['hello', 'Armenia'])

// greeting.call(obj, 'hello', 'Armenia')
// greeting.customCall(obj, 'hello', 'Armenia')

// greeting.bind(obj, "hello", "Armenia")();
// greeting.customBind(obj, "hello", "Armenia")();
