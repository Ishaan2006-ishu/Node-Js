// const express=require("express");
// const users=require("./MOCK_DATA.json");

// const app=express();
// const PORT=8000;


// //ROUTES
// app.get('/users', (req,res)=>{
//     const html =`
//     <ul>
//     ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     return res.send(html);

// })
// app.get('/api/users', (req,res)=>{
//     return res.send(users);


// });
// app.get("/api/users/:id",(req,res)=>{
    
//     const id=Number(req.params.id);
//     const user = users.find((user)=>user.id === id);
//     res.json(user);

// })

// app.post("/api/users", (req, res)=>{
//     //create todo: create new user
//     return res.json("status:pending");
// })
// app.patch("/api/users:id", (req, res)=>{
//     //create tood: cedit user id
//     return res.json("status:pending");
// })
// app.delete("/api/users", (req, res)=>{
//     //create tood:delete user with thaat id
//     return res.json("status:pending");
// })



// app.listen(PORT, ()=>console.log(`Server startd at port ${8000}`));

const express = require("express");
const app=express();

const data=require("./Books.json");
app.get("/books",(req,res)=>{
    const html=`
    <ul>
    ${data.map(book=>`<li>${book.name}.</li>`).join("")}
    </ul>
    `
    res.send(html);

});

app.get("/books/:id",(req,res)=>{
    const id=Number(req.params.id);
    const book=data.find(book=>(book.id===id));
    //res.json(book);
    const html=`Available -> ${book.name}`;
    res.send(html);

});



app.listen(8000)