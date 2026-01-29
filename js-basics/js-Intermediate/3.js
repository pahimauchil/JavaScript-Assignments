// 3. **Remove falsy values from object**
//     - Input:
        
//         ```jsx
//         { a: 0, b: null, c: "hello", d: undefined, e: 5 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { c: "hello", e: 5 }
        
//         ```

const values = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
const updatedValues={};

for(let key in values){
    if(values[key]){
        updatedValues[key]=values[key];
    }
}
console.log(updatedValues)