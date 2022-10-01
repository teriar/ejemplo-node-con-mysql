const { json } = require('express');
const mysql = require('mysql');
const {consulta} = require('../models/conexion')



let resultsql='';

const obtenerProductos = async(req, res)=>{
   
  //  let query = "insert into personas (persona, apellido, correo) values('pedro','Urriola','pedroUrrriola@gmail.com')";
    const query = " select * from personas";
    const resultado = consulta(query).then(data =>{ res.json(data)}
    );
    

}




module.exports= {
    obtenerProductos
}