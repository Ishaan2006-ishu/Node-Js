const fs=require("fs");
//console.log(fs);


// fs.writeFile("note.txt","hello World",(err)=>{
//     if(err) throw err;
//     console.log("file written")
// })

// fs.writeFileSync("note2.txt","ishaan");
// fs.readFile("note.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// fs.appendFile("note2.txt","\nishu",(err)=>{
//     if(err) throw err;
// })
// fs.unlink("note.txt",(err)=>{
//     if(err) throw error;
//     console.log("file deleted");
// })

// fs.stat("note2.txt",(err,stats)=>{
//     console.log(stats.isFile());
//     console.log(stats.size);
//     console.log(stats);
// })


// fs.mkdir("uplaods",(err)=>{
//     if(err) throw err;

// });
// fs.mkdirSync("uplods2");

// fs.mkdir("4/6/7/8/9",{recursive:true},(err)=>{
//     if(err) throw err;
// });

// fs.readdir("4",(err,files)=>{
//     if(err) throw err;
//     console.log(files);
// })
// fs.readdir("4",(err,files)=>{
//     if(err) throw err;
//     console.log(files);
// })
// fs.rmdir("4",{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log("folder deleted");
// });

// fs.readFile("note2.txt",{flag:"r"},(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.open("note2.txt","r+",(err,fd)=>{
//     if(err) throw err;
//     console.log(fd);

// })

fs.open("note2.txt","r+",(err,fd)=>{
    if (err) throw err;

    const buf=Buffer.alloc(1024);
    fs.read(fd,buf,0,buf.length,0,(err,bytesread)=>{
        if(err) throw err;
        const content=buf.toString("utf-8",0,bytesread);
        console.log(`old content : ${content}`);
        const update="ishaan"
        fs.write(fd,update,0,"utf-8",()=>{
            fs.close(fd);
        })
        

    })
})
// WHAT R+ DO:
// Before:  HELLO WORLD
// Write:   HI
// After:   HILLO WORLD


//const fs = require("fs");

// fs.open("note2.txt", "w+", (err, fd) => {
//   if (err) return console.error(err);

//   // 1️⃣ Write new data
//   fs.write(fd, "Hello using w+ flag", 0, "utf8", (err) => {
//     if (err) return console.error(err);

//     // 2️⃣ Prepare buffer to read
//     const buffer = Buffer.alloc(1024);

//     // 3️⃣ Move cursor back to start and read
//     fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
//       if (err) return console.error(err);

//       const content = buffer.toString("utf8", 0, bytesRead);
//       console.log("READ:", content);

//       // 4️⃣ Always close file
//       fs.close(fd);
//     });
//   });
// });

//What w+ REALLY DOES (IMPORTANT)

// The moment you open a file with w+, Node.js tells the OS:

// 👉 “DELETE ALL EXISTING CONTENT FIRST”
