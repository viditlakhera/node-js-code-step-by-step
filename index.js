const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"/files");
//created multiple files inside a folder

for(i=0;i<5;i++){
   fs.writeFileSync(`${dirPath}\\hello.txt${i}`, `this is file hello.txt${i} data`)
}

fs.readdir(dirPath,(err,files)=>{
files.forEach((item)=>{
   console.log(item)
})
});