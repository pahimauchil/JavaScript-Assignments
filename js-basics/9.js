// 9. **Unique values across all object arrays**
//     - Input:
        
//         ```jsx
//         { x: [1,2,3], y: [2,3,4], z: [4,5] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [1,2,3,4,5]
//         ```

const obj = { x: [1,2,3], y: [2,3,4], z: [4,5] }
const newArr=[];
for(let key in obj){
    const arr = obj[key]
    arr.forEach(val=>{
        if(!newArr.includes(val))newArr.push(val);
});

}
console.log(newArr);