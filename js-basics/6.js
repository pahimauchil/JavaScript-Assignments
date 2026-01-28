// 6. **Group people by city**
//     - Input:

//         ```jsx
//         [
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]

//         ```

//     - Output:

//         ```jsx
//         { Delhi: ["A", "C"], Mumbai: ["B"] }
//         ```

const cityList = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];

const obj = {};
cityList.forEach((person) => {
  const city = person.city;
  const name = person.name;
  if (!obj[city]) {
    obj[city] = [];
  }
  obj[city].push(name);
});

console.log(obj);