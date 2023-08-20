const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('shopping_online','root','riteshrai',{
    dialect:'mysql',
    host:'localhost'
})

async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log('database connection established');
    }
    catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports=sequelize;