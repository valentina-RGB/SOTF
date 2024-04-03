const {Router} = require('express');
const {pedidosGET, new_orderGET}= require('../controller/order_controller');
const router= Router();

router.get('/order', pedidosGET);
router.get('/newOrder', new_orderGET);

module.exports = router;