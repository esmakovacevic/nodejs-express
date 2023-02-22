const mysql=require('mysql');
const express=require('express');
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database: 'db_form'
})
con.connect((err)=>{
    if(err) throw err;
    console.log('Database is connected successfully');
})
module.exports=con;