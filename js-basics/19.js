// 19. **Check if all values in object are numbers**
//     - Input:
        
//         ```jsx
//         { a: 1, b: "hello", c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         false
        
//         ```

const obj = { a: 1, b: "hello", c: 3 };

function numberCheck(obj){
    for(let key in obj){
        if(typeof obj[key]!=='number')return(false);
    }return true;
}

console.log(numberCheck(obj));
