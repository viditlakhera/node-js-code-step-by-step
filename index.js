const http = require('http');
http.createServer((req,res)=>{
res.write(JSON.stringify({data:"hello welcome to node js course again"}));
res.end();
}).listen(4500);