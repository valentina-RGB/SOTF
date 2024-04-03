const { request, response } = require('express');

const pedidosGET = (req, res = response)=>{
   res.render('order/order-list.hbs');

};

const new_orderGET = (req, res = response)=>{
    res.render('order/new_order');
 
 };

module.exports={
    pedidosGET,
    new_orderGET
}