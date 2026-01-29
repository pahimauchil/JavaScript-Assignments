// 4. Check for permissions from roles
//     - Input:

//         ```jsx
//         roles={ admin:["read","write"], user:["read"], staff: ["write"]}
//         checkRole="user",
//         action="write"
//         ```

//     - Output:

//         ```jsx
//         false
//         ```

const roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
const checkRole = "user"
const action = "write"

if(!roles[checkRole]){
    console.log(false);
}else{
    if(roles[checkRole].includes(action)){
        console.log(true); 
    }else console.log(false); 
}

