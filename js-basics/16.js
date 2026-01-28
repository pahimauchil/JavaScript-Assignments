// 16. **Count even and odd numbers in array**
//     - Input:
        
//         ```jsx
//         [1,2,3,4,5,6]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { even: 3, odd: 3 }
        
//         ```

const arr = [1, 2, 3, 4, 5, 6];
const obj={};
let even=0,odd=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even++;
    }else{
        odd++;
    }
}
obj.even = even;
obj.odd=odd;

console.log(obj)