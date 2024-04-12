const {Router} = require('express');
const { listGET,historyGET }= require('../controller/supplies_controller');
const routes= Router();

routes.get('/supplies',listGET);
routes.get('/history',historyGET);

module.exports = routes;