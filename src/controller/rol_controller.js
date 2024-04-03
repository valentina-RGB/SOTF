const { request, response } = require('express');

const rolGET = (req, res = response)=>{
   res.render('rol.hbs');

};

module.exports={

    rolGET
}