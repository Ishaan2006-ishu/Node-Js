const express=require("express");
const users=require("./MOCK_DATA.json");
const fs=require("fs");
//console.log(users);

const app=express();
app.use(express.urlencoded({extended: false}));
const PORT=8000;

app.use((req,res,next)=>{
    fs.appendFile('log.txt',`\n${Date.now()} : ${req.ip} : ${req.path}`,(err,data)=>{
        next();
    });
});


//ROUTES
app.get('/users', (req,res)=>{
    const html =`
    <ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);

})
app.get('/api/users', (req,res)=>{
    return res.send(users);


});
app.get("/api/users/:id",(req,res)=>{
    
    const id=Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    res.json(user);

})

app.post("/api/users", (req, res)=>{
    //create todo: create new user

    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success", id:users.length});
    })
    
})
app.patch("/api/users:id", (req, res)=>{
    //create tood: cedit user id
    return res.json("status:pending");

})
app.delete("/api/users/:id", (req, res)=>{
    //create tood:delete user with thaat id
    const id=Number(req.params.id);
    const user=users.find(user=>{
        return user.id===id;
    })

    if(user){
        // create new array without the deleted user
    const filteredUsers = users.filter(user => user.id !== id);

    // update original array (because users is const)
    users.length = 0;                 // clear array
    users.push(...filteredUsers);     // refill with filtered data

        fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success", id:users.length});
    })

    }
    else{
        return res.json({status:"not find"})
    }


})



app.listen(PORT, ()=>console.log(`Server startd at port ${8000}`));

// const express = require("express");
// const app=express();

// const data=require("./Books.json");
// app.get("/books",(req,res)=>{
//     const html=`
//     <ul>
//     ${data.map(book=>`<li>${book.name}.</li>`).join("")}
//     </ul>
//     `
//     res.send(html);

// });

// app.get("/books/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const book=data.find(book=>(book.id===id));
//     //res.json(book);
//     const html=`Available -> ${book.name}`;
//     res.send(html);

// });



// app.listen(8000)