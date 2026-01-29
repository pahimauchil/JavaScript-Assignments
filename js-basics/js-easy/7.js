// 7. **Filter object by values > 50**
//     - Input:
        
//         ```jsx
//         { a: 20, b: 60, c: 40, d: 90 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { b: 60, d: 90 }
//         ```

const obj = { a: 20, b: 60, c: 40, d: 90 };
const filtered={};
 for(let key in obj){
    if(obj[key]>50){
        filtered[key]= obj[key]
    }
 }
 console.log(filtered)