// 9. **Build index of ids grouped by category**
//     - Input:
        
//         ```jsx
//         [
//           { id: 1, category: "fruit" },
//           { id: 2, category: "veggie" },
//           { id: 3, category: "fruit" }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { fruit: [1,3], veggie: [2] }
        
//         ```


const obj = [
          { id: 1, category: "fruit" },
          { id: 2, category: "veggie" },
          { id: 3, category: "fruit" }
        ]
const output={};

obj.forEach(cat=>{
    if(!output[cat.category]){
    output[cat.category]=[];
    }
    output[cat.category].push(cat.id);
})

console.log(output)