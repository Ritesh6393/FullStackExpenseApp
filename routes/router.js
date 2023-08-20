const express=require('express');
const dataController=require('../controllers/user');
const router=express.Router();

router.post('/signup',dataController.signup);

module.exports=router;