// 7. **Chunk object entries into groups of size**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3, d: 4 }, size=2
//         ```
        
//     - Output:
        
//         ```jsx
//         [ [["a",1],["b",2]], [["c",3],["d",4]] ]
//         ```

const obj ={ a: 1, b: 2, c: 3, d: 4 };
const size=2;
const finalArr=[];

const arr = Object.entries(obj);

for(let i=0;i<arr.length;i= size+i){
    finalArr.push(arr.slice(i,size+i))
}

console.log(finalArr);


// 1. **Find longest string among object values**
//     - Input:
        
//         ```jsx
//         { a: "apple", b: "banana", c: "kiwi" }
        
//         ```
        
//     - Output:
        
//         ```
//         banana
        
//         ```

const obj1 = { a: "apple", b: "banana", c: "kiwi" };
let longest="";
for(let key in obj1){
    const word = obj1[key];
    longest = longest.length< word.length? word:longest;
}
console.log(longest);