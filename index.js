const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Olá Artur Azambuja da Silvagit")
})
app.get('/mensagem', function(req,res){
    res.send("Mensagem enviada")
})
app.listen(3000,function(){
    console.log("Conexão inicializada")
})