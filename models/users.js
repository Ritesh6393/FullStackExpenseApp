const {Sequelize}=require('sequelize');

const db=require('../config/database');


const User=db.define('expense',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,

    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User;