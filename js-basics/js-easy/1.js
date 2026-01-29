// { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// { food: 60, travel: 20, bills: 100 }

const expenses = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

function totalExpense(expenses){
const totalExpenses ={};
for(let key in expenses){
    const  arr = expenses[key];
     let sum=0;
     arr.forEach(val=>{
        sum+=val;
     })
     totalExpenses[key]=sum;
}
return totalExpenses;
}
console.log(totalExpense(expenses));