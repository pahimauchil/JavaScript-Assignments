// 10. **Pick only given keys from object**
//     - Input:
        
//         ```jsx
//         { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Rahul", city: "Noida" }
        
//         ```

const obj = { name: "Rahul", age: 23, city: "Noida" }
const arr =  ["name","city"]
const newObj={};

arr.forEach(val=>{
    if(val in obj){
        newObj[val]=obj[val];
    }
})
console.log(newObj);