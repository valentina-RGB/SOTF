const {Router} = require('express');
const {productGET}=require('../controller/product_controller')
const router= Router();



router.get('/product', productGET);

module.exports = router;