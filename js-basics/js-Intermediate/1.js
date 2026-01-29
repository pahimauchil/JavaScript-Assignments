// 1. **Sum all transactions per user**
//     - Input:
        
//         ```jsx
//         [
//           { user: "A", amount: 100 },
//           { user: "B", amount: 200 },
//           { user: "A", amount: 50 }
//         ]
//         ```
        
//     - Output:
        
//         ```jsx
//         { A: 150, B: 200 }
//         ```

const userDetails=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];

const sumUser={};


userDetails.forEach(person=>{
    if(!sumUser[person.user]){
        sumUser[person.user] = person.amount;
    }else{
        sumUser[person.user]+= person.amount;
    }
})
console.log(sumUser);