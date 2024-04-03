const { request, response } = require('express');
const listGET =(request, res=response)=>{
    res.render('supplies/supplies-list.hbs')
}
module.exports ={
    listGET
}