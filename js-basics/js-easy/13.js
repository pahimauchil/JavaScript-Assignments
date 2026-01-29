// 13. **Count number of keys in object**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         3
        
//         ```
const obj  ={ a: 1, b: 2, c: 3 }
let count=0;
for(let key in obj){
    count++;
}
console.log(count)