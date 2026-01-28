// 4. **Find the largest value key**
//     - Input:
        
//         ```jsx
//         { a: 10, b: 50, c: 20 }
        
//         ```
        
//     - Output:
        
//         ```
//         b
//         ```

 const obj = { a: 10, b: 50, c: 20 }
let max=0;
for(let key in obj){
    const val = obj[key];
    max = val>max? val:max;
}
for(key in obj){
    if(max===obj[key])console.log(key);
    }
