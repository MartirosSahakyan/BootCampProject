const users = [
    {
      name: "Vrezh",
      age: 12,
      gender: "m",
    },
    {
      name: "Vrezh1",
      age: 21,
      gender: "m",
    },
    {
      name: "Vrezh2",
      age: 212,
      gender: "m",
    },
    {
      name: "Vrezh3",
      age: 214,
      gender: "m",
      gender1: "m",
    },
  ];

  const adults = users.findIndex(e=> e.age === 21)
 
  const nums = [1,2,3,4,5,6]

  const map = nums.map(el => {
      el * 2
  })
  console.log(map);