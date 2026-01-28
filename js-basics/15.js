// 15. **Convert object to query string**
//     - Input:
        
//         ```jsx
//         { name: "Alice", age: 25 }
        
//         ```
        
//     - Output:
        
//         ```
//         "name=Alice&age=25"
//         ```

const obj= { name: "Alice", age: 25 }
let str=""
for(let key in obj){
    let s =`${key}=${obj[key]}`
   if (str === "") {
     str = s; 
   } else {
     str = str + "&" + s;
   }
}
console.log(str)