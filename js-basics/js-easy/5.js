// 5. **Flatten object of arrays into one array**
//     - Input:
        
//         ```jsx
//         { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["apple", "banana", "carrot", "pea"]
//         ```

const eatables= { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

const arr=[];

for(let key in eatables){
    eatables[key].forEach(eatable=>{
        arr.push(eatable)
    })
}
console.log(arr)