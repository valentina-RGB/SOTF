const { request, response } = require('express');

const listGET =(request, res=response)=>{
    res.render('supplies/supplies-list.hbs')
}
const historyGET =(request, res=response)=>{
    res.render('supplies/history.hbs')
}


module.exports ={
    listGET,
    historyGET
}

