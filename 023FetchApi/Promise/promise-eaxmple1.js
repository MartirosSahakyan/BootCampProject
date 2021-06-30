function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
  });
}
function func2(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(val + 3), 1000);
  });
}
function func3(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(val + 4), 1000);
  });
}
func1()
  .then((res) => func2(res))
  .catch((err) => 5)
  .then((res) => {
    console.log(res); // 5
    throw new Error("oops");
  })
  .then((res) => func3(res))
  .catch((err) => func3(2))
  .then((res) => func2(res))
  .then((res) => console.log(res)); // 9
