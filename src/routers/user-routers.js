const {Router} = require('express');
const {userGET}= require('../controller/user_controller');
const router= Router();

router.get('/user',userGET);

module.exports=router;
