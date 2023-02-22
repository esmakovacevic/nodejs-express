var express = require('express');
var router = express.Router();
let db=require('../database');
/* GET home page. */
router.get('/form', function(req, res, next) {
  res.render('users');
});
router.post('/create',(req,res,next)=>{
  const userDetail=req.body;

  let sql='INSERT INTO users SET ?';
  db.query(sql,userDetail,(err,data)=>{
    if (err) throw err;
    console.log("User data inserted successfully");
  });
  res.redirect('/users/form');
  
});

router.get('/user-list',(req,res,next)=>{
 let sql='SELECT * FROM users';
 db.query(sql,function(err,data){
  if(err) throw err;
  res.render('user-list');//{title:'',userData: data} kao argumenti

 });

});
document.getElementById("show").onclick=()=>{
  window.location.href="http://localhost:3000/users/user-list";
}
module.exports = router;
