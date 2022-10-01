const { json } = require('express');
const mysql = require('mysql');
const {consulta, actualizar} = require('../models/conexion')



let resultsql='';

const obtenerProductos = async(req, res)=>{
   
  //  let query = "insert into personas (persona, apellido, correo) values('pedro','Urriola','pedroUrrriola@gmail.com')";
    const query = " select * from personas";
    const resultado = consulta(query).then(data =>{ res.json(data)}
    );
    

}


const obtenerProducto = (req,res)=>{
  const query = `select * from personas where id = ${req.params.id}`
  
  const resultado = consulta(query).then(data => {res.json(data)})
}



const actualizarPersona = (req,res)=>{
  const query = `UPDATE personas SET apellido  = "${req.body.apellido}" where id = ${req.params.id}`
 
  const resultado = actualizar(query).then(data =>{res.json(data)})
}






module.exports= {
    obtenerProductos,
    obtenerProducto,
    actualizarPersona
}