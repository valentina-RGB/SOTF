const {request,response}= require('express');

const productGET = (req, res = response) =>{
    res.render('products/list_product')
}
const newGET=(req, res = response) =>{
    res.render('products/new_product')
}

module.exports={
    productGET,
    newGET
}