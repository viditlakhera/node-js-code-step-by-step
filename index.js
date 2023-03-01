// 


const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
   res.send('Welcome, to home page');
   res.end();
})

app.listen(PORT,()=>{
   console.log(`port is running on ${PORT}`)
})