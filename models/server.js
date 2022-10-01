const express = require('express');
const cors = require('cors');
const conectardatabase = require('./conexion');


class Server{

constructor(){
   this.app = express();  
   this.port = process.env.PORT;
   this.paths = {
              pruebas:'/api/pruebas',
   }
   this.midleware();

   this.routes();
    

  //  this.conectarBD();

    }


    //fin constructor
midleware(){

 //CORS 

 this.app.use(cors());

 //parseo y lectura de body 
 this.app.use(express.json());
 
 this.app.use(express.static('public'));
}
  
// async conectarBD(){
//   await conectardatabase()
// }
   


  routes(){

    this.app.use(this.paths.pruebas, require('../routes/pruebas'));
  }

listen(){

    this.app.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto', process.env.PORT);
    })
}
}


module.exports = Server