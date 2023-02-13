import http from 'http';
import users from './user.js';

http.createServer((req,res)=>{
   res.writeHead(200,{"Content-Type":"application/json"});
   res.write(JSON.stringify(users));
   res.end();
}).listen(8000);