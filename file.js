const fs  = require("fs")
// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.


//sync
//fs.writeFileSync("./test.txt","Hey there");


//async
//fs.writeFile("./test.txt","Hey there Async",(err) =>{})


// it is returniung the result
// const result = fs.readFileSync("./test.txt","utf-8");
// console.log(result); 


// fs.readFile("./test.txt","utf-8",(err,result) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt" , `\n hey there ${Date.now()}`)

// fs.copyFileSync("./test.txt" , "./copy.txt")

// delete the file
fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt"));

fs.mkdirSync("my-docs/a/b",{recursive:true})
