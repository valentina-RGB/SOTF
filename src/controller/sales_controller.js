const { request, response } = require('express');

const sales_listGET = (req, res = response)=>{
   res.render('sales/sales-list.hbs');

};

module.exports={
    sales_listGET,
}