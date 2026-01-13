const fs=require("fs");

//fs.writeFileSync("./test.txt","hey iam suri");

// fs.writeFile("./test.txt","ishaan is the enterpreneur",(err)=>{});

//const result=fs.readFileSync("./test.txt","utf-8");

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("error");
//     } else {
//         console.log(data);
//     }
// });
//console.log(result);

fs.appendFileSync("./test.txt","hello")
fs.copyFileSync("./test.txt","./copy.txt")
fs.unlinkSync("./copy.txt");

console.log( fs.statSync("./test.txt"))


