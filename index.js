const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 3000 || process.env.PORT;

app.set('view engine','ejs');
app.get('/',(req,res)=>{
   const user = {
      name:"vidit",
      email:"lakheravidit@gmail.com",
      city: "Srinagar",
      skills:["nodejs","mongodb","mongoose"]
   }
   res.render('index',{user})
});

app.listen(PORT,()=>{
   console.log(`server is running on port ${PORT}`)
});