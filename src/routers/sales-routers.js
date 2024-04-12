
const {Router} = require('express');
const {sales_listGET}= require('../controller/sales_controller');
const router= Router();

router.get('/sales', sales_listGET);


module.exports = router;