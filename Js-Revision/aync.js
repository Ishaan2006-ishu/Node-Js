// console.log("start")
// setTimeout(()=>{
//     console.log("inside timeout")
// })
// console.log("close")

// function fetchData() {
//   setTimeout(() => {
//     const data = { id: 1, name: "Ishaan" };
//     console.log(data);
//   }, 2000);
// }

// fetchData();

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Ishaan" };
//     callback(data);
//   }, 2000);
// }

// fetchData((result) => {
//   console.log("Data received:", result);
// });

// function order(cb){
//     console.log("cooking start")
//     setTimeout(()=>{
//         console.log("cooking done");
//         const address="sector 62";
//         cb(address);
//     },3000);
// }

// order((deliver)=>{
//     console.log(`ordered to ${deliver}`)
// })


// ========================>  Promise   <================
// Promise = "I promise I will give you result later"
// resolve() = "Here is your result"
// reject()  = "Sorry, error happened"
// .then()   = "What to do when success"
// .catch()  = "What to do when error"


function order(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const find=true;
            if(find){
                resolve("order placed")
            }
            else{
                reject("not find")
            }

        },2000)
    })
}

// order()
// .then(find=>{console.log(find)})
// .catch(err=>{console.log(err)})

async function get_order(){
    try{
        const result=await order();
        console.log("async/await result",result)
    }
    catch(err){
        console.log(err);

    }
}

get_order();
