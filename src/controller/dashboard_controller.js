const {response, request}= require('express');

const analyticGET=(req, res=response)=>{
    res.render('dashboard/analytics');
};

module.exports={
    analyticGET
}