const express=require('express');
const cors=require('cors');
const userRoutes=require('./routes/router');
const sequelize=require('./config/database');
const path=require('path');



const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(express.json())
app.use('/user',userRoutes);

sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})

