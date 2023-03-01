const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);

// make file 
// fs.writeFileSync(`data.txt`,'this is main data');


//read file
// fs.readFile('data.txt','utf-8',(err,data)=>{
//    console.log(data)
// })


//update file
// fs.appendFile('data.txt'," this is update data added",(err)=>{
//    if(!err) console.log('file is updated')
// })


//rename file
// fs.rename('data.txt','main.txt',(err)=>{
//    console.log('renamed')
// });


//delete file
// fs.unlinkSync('main.txt');