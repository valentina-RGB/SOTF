const {Router} = require('express');
const {indexGET,LogGET, HomeGET, contactGET, aboutGET, shopGET, shopsGET, iconosGET, tableGET}= require('../controller/home_controller');
const router= Router();

router.get('/', indexGET);
router.get('/log',LogGET);
router.get('/analytics',HomeGET);
router.get('/contact',contactGET);
router.get('/about',aboutGET);
router.get('/shop',shopGET);
router.get('/shops',shopsGET);
router.get('/icons',iconosGET);
router.get('/tables',tableGET);
router.get('/tablas',tableGET);
module.exports = router;