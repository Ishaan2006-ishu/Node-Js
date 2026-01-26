let u = [
  { id: 1, name: "Aman", age: 17 },
  { id: 2, name: "Riya", age: 22 },
  { id: 3, name: "Karan", age: 19 },
  { id: 4, name: "Neha", age: 16 }
];

// function getUserById(arr,id){
//     const user=arr.find(user=>{
//         return user.id===id;
//     })
//     if(!user){
//         return "user not find"
//     }
//     else{
//         return user;
//     }
    
    
// }


//console.log(getUserById(u,2 ));

// function addUser(u,newUser){
//     u.push(newUser);
//     return u

// }

// const newUser={id: 5,name:"ishu",age:20};
// console.log(addUser(u,newUser));

// function updateUserId(arr,id,newData){
//     const user=arr.find(user=>{
//         return user.id===id;

//     })
//     if(!user){
//         return "user not find";
//     }
//     if(newData.name){
//         user.name=newData.name;
//     }
//     if(newData.age){
//         user.age=newData.age;
//     }
//     return user;
// }
// let newData = { name: "Rittik", age: 21 }


// console.log(updateUserId(u,4,newData))

// console.log(u)

function deleteUserById(u,id){
    // const ind=u.findIndex(user=>{
    //     return user.id===id
    // })
    // if(ind===-1){
    //     return "user not found"
    // }
    // u.splice(ind,1)
    // // array.splice(startIndex, deleteCount);

    // return u
    const user=u.find(user=>{
        return user.id===id;
    })
    if(!user){
        return "user not find";
    }

    u=u.filter(user=>{
        return user.id!=id
    })
    return u

}

console.log(deleteUserById(u,2));

console.log(u);


