const express = require('express');
const app = express();

app.get('/', function(req,res){
  res.json({git : 'https://github.com/koikera/Projeto_node'})
})


app.get('/users', function(req,res){

  res.json([{firstName: 'Matheus', lastName: 'Comelli'}])

})

app.listen(3000, function(){
  console.log('Server iniciado');
})