const {Router} = require('express');
const {rolGET}= require('../controller/rol_controller');
const router= Router();

router.get('/rol',rolGET);

module.exports=router;
