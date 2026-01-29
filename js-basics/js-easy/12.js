// 12. **Sort object entries by values (ascending)**
//     - Input:

//         ```jsx
//         { a: 3, b: 1, c: 2 }

//         ```

//     - Output:

//         ```jsx
//         [["b",1], ["c",2], ["a",3]]

//         ```

const obj = { a: 3, b: 1, c: 2 };
const arr = [];

for (let key in obj) {
  arr.push([key, obj[key]]);
}
arr.sort((a, b) => a[1] - b[1]);
console.log(arr);