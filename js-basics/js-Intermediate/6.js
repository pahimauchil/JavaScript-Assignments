// ```jsx

// ```

// 6. **Remove duplicate objects by id**
//     - Input:
        
//         ```jsx
//         [
//           { id: 1, name: "A" },
//           { id: 2, name: "B" },
//           { id: 1, name: "A" }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [
//           { id: 1, name: "A" },
//           { id: 2, name: "B" }
//         ]
        
//         ```

const data=[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

let set = new Set();

const dupliRemoved =[];


data.forEach(obj=>{
  if(!set.has(obj.id)){
    dupliRemoved.push(obj);
    set.add(obj.id);
  }
})

console.log(dupliRemoved)