const {Router} = require('express');
const {productGET, newGET}=require('../controller/product_controller')
const router= Router();



router.get('/product', productGET);
router.get('/product_new',newGET);

module.exports = router;