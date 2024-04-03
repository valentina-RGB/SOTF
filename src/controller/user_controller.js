const { request, response } = require('express');

const userGET = (req, res = response)=>{
   res.render('user.hbs');

};

module.exports={

    userGET
}