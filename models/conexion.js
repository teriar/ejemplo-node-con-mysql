const { json } = require('express');
var mysql = require('mysql');



    
    const conector =  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'testnode'
    });
    
    
 

 const conectar = ()=>{
    conector.connect(err=>{
        if(err)throw err
        console.log(conectado)
    })
 }





 
   const consulta =async(sentencia )=>{
   return new Promise(function(resolve,reject){

       conector.query (sentencia, (err, result, field)=>{
           if(err) {
            throw error
            reject(new Error('error'))
        }else{

            resolve (result)
        }
           
           
        
        })
    }
)}


  module.exports = {conector, consulta}