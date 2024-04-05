const {request,response}= require('express');

const productGET = (req, res = response) =>{
    res.render('products/list_product')
}

module.exports={
    productGET
}