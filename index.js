import http from 'http';
import chalk from 'chalk';

http.createServer((req,res)=>{
console.log(chalk.blue("this is blue"))
res.write(JSON.stringify({data:"hello welcome to node js course again"}));
res.end();
}).listen(4700);