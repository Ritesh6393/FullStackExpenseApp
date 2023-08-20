const Users=require('../models/users');

function isStringValid(string){
    if(string==undefined || string.length===0){
        return true;
    }
    else{
        return false;
    }
}

exports.signup= async(req,res)=>{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;
        if(isStringValid(name) || isStringValid(email) || isStringValid(password)){
            return res.status(400).json({err:"Bad parameters,something went wrong"})
        }

        const newData=await Users.create({name:name,email:email,password:password});
        res.json(newData);
    }
    catch(error){
        res.status(403).json({ error: 'Server Error' });
    }
}