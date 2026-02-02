// 8. Convert the object where **languages** are the top-level keys, and inside each are **translation strings by key into** an object where **translation keys** are the top-level keys, and inside each you store values per language [HARD**]
//     - Input:
        
//         ```jsx
//         {
//           en: { hello: "Hello", bye: "Goodbye" },
//           fr: { hello: "Bonjour", bye: "Au revoir" },
//           es: { hello: "Hola" }
//         }
//         ```
        
//     - Output:
        
//         ```jsx
//         {
//           hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//           bye: { en: "Goodbye", fr: "Au revoir" }
//         ```


const obj = {
           en: { hello: "Hello", bye: "Goodbye" },
           fr: { hello: "Bonjour", bye: "Au revoir" },
           es: { hello: "Hola" }
         }

const res ={};

for(let lang in obj){
    for(let word in obj[lang]){
        if(!res[word]){
            res[word]={};
        }
        res[word][lang]=obj[lang][word];
    }
}
console.log(res);