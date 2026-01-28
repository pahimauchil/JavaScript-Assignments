// - Input:
    
//     ```jsx
//     ["apple", "banana", "apple", "orange", "banana", "apple"]
    
//     ```
    
// - Output:
    
//     ```jsx
//     { apple: 3, banana: 2, orange: 1 }
//     ```

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
const count = {};
fruits.forEach((fruit) => {
  count[fruit] = (count[fruit] ||0)+1;
});
console.log(count);