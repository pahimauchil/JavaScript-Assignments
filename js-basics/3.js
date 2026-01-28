// - Input:
    
//     ```jsx
//     { a: "x", b: "y", c: "z" }
    
//     ```
    
// - Output:
    
//     ```jsx
//     { x: "a", y: "b", z: "c" }
//     ```

 const obj={ a: "x", b: "y", c: "z" }
const swapped={};
 for(let key in obj){
    swapped[obj[key]]=key;
 }

 console.log(swapped);