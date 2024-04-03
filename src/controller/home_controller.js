const { request, response } = require('express');

const indexGET = (req, res = response)=>{
   res.render('index');

};
const LogGET = (req, res = response)=>{
   res.render('Log.hbs');

}


const contactGET = (req, res = response)=>{
   res.render('contact.hbs');

}

const aboutGET = (req, res = response)=>{
   res.render('about.hbs');

}
const shopGET = (req, res = response)=>{
   res.render('shop.hbs');

}
const shopsGET = (req, res = response)=>{
   res.render('shop-single.hbs');

}
const HomeGET = (req, res = response)=>{
   res.render('dashboard.hbs');

}
const tableGET = (req, res = response)=>{
   res.render('tables.hbs');

}
const iconosGET = (req, res = response)=>{
   res.render('icons.hbs');

}
const tablasGET = (req, res = response)=>{
   res.render('tablas',{
      estado: true,
   descripcion: "holaaaa"
   });
   

}
 module.exports=  {
LogGET,
  indexGET,
  shopGET,
  shopsGET,
  contactGET,
  aboutGET,
  tableGET,
  iconosGET,
  HomeGET,
  tablasGET

}