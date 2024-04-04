const {Router}=require('express');
const router= Router();
const { analyticGET }= require('../controller/dashboard_controller');

router.get('/analytic',analyticGET);
module.exports = router;