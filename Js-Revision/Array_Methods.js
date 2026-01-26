// map()    → transform data                          map() =    Take each item → change it → return new array 
// find()   → get one item                            find() =   Loop until condition is true → return FIRST match 
// filter() → get many items                          filter()=  Return ALL items that match condition  

// forEach()→ loop without return                      Loop but DON’T return anything


const users = [
  { id: 1, name: "Aman", age: 17 },
  { id: 2, name: "Riya", age: 22 },
  { id: 3, name: "Karan", age: 19 },
  { id: 4, name: "Neha", age: 16 },
  { id: 5, name: "Ishaan", age: 20 }
];

// let names=users.map(user=>{
//     return user.name;
// });
// let isAdult=users.map(user=>user.age>18);

// console.log(names);
// console.log(isAdult);

// const update_user=users.map(user=>{
//     return {
//         ...user,
//         isAdult:user.age>18
//     }

// }


// )
// console.log(update_user);

const user3=users.find(user=>{
    return user.id===3
})

const user_name=users.find(user=>{
    return user.name==="Neha";
})

const isAdult=users.filter(user=>{
    return user.age>=18;
})

console.log(user3);
console.log(user_name);
console.log(isAdult);

users.forEach(user=>{
    console.log(`user_najme= ${user.name}`);
})