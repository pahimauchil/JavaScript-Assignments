// 17. **Find common keys between two objects**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["b","c"]
        
//         ```

const obj1={ a: 1, b: 2, c: 3 },obj2= { b: 4, c: 5, d: 6 }
const arr=[];
 for(let key in obj1){
    if(key in obj2){
        arr.push(key);
    }
 }
 console.log(arr);