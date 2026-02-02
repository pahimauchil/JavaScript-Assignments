// 10. **Remove deeply nested key from object**
//     - Input:
        
//         ```jsx
//         { a: { b: { c: 1, d: 2 } } }, remove "c"
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { a: { b: { d: 2 } } }
        
//         ```

const obj={ a: { b: { c: 1, d: 2 } } }, remove= "c"

delete obj.a.b.c;
console.log(obj);