// 14. **Capitalize string values inside object**
//     - Input:
        
//         ```jsx
//         { name: "alice", city: "delhi" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Alice", city: "Delhi" }
        
//         ```
const obj = { name: "alice", city: "delhi" }
const newObj={};
for(let key in obj){
    const keyValue = obj[key];
    const cap = keyValue.charAt(0).toUpperCase()+ keyValue.slice(1)
    newObj[key]=cap;

}

console.log(newObj)