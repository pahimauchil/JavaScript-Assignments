// 18. **Convert array of objects to lookup by id**
//     - Input:
        
//         ```jsx
//         [{ id: 1, name: "A" }, { id: 2, name: "B" }]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
//         ```

const aoo = [{ id: 1, name: "A" }, { id: 2, name: "B" }]
const obj={};
aoo.forEach(val=>{
    obj[val.id] = val;
})
console.log(obj);