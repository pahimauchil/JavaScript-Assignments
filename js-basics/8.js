// 8. Find student with highest average mark
//     - Input:
        
//         ```jsx
//         { A: [80, 90], B: [70, 75, 85] }
//         ```
        
//     - Output:
        
//         ```jsx
//         A
//         ```

const marks = { A: [80, 90], B: [70, 75, 85] };
let max = 0;
let highAvgStudent = null;
for(let key in marks){
    const arr=marks[key];
    const sum=arr.reduce((a,b)=>a+b,0)
    const avg = sum/arr.length;
    if(avg>max){
        max =avg;
        highAvgStudent = key;
    }
}
console.log(highAvgStudent);