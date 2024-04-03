const {Router} = require('express');
const { listGET }= require('../controller/supplies_controller');
const routes= Router();

routes.get('/supplies',listGET);

module.exports = routes;