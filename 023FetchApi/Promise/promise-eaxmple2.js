function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
job(true)
  .then(function (data) {
    console.log(data); // "success"
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data); // ----
  })
  .catch(function (error) {
    console.log(error); // "Defeat"
    return job(false);
  })
  .then(function (data) {
    console.log(data); // -----
    return job(true);
  })
  .catch(function (error) {
    console.log(error); // "error"
    return "Error caught";
  })
  .then(function (data) {
    console.log(data); // "Error caught"
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success:", data.message); // "Success undefined"
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });
