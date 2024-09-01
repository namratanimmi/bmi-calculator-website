const express = require('express');
const app = express();
const PORT = 8050;
const path = require('path');

const checkRoute = require('./routes/check');

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));


// const ConnectToMongoDB = require('./connect');
// ConnectToMongoDB(process.env.MONGO_URL)
// .then((e)=>console.log("Connected to mongoDB"))
// .catch((err)=>{
//     console.log(err);
// })

app.use(express.static(path.resolve('./public')));

app.get('/', (req,res)=>{
     return res.render('index',{title:"BMI CALCULATOR" });
 });

app.use('/check',checkRoute);



app.listen(PORT,()=>console.log(`Server started at ${PORT}`));