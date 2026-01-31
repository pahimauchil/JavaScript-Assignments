// 5. **Transform array of orders into revenue per category**
//     - Input:
        
//         ```jsx
//         [
//           { id: 1, category: "electronics", price: 100 },
//           { id: 2, category: "clothes", price: 50 },
//           { id: 3, category: "electronics", price: 200 }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { electronics: 300, clothes: 50 }
//         ```

const orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];

const revenuePerCat = orders.reduce((acc,order)=>{
    acc[order.category] = (acc[order.category]|| 0)+order.price;
    return acc;
},{});

console.log(revenuePerCat);