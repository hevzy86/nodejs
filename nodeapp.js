const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('scr/views'));


app.get('/',function(req,res){
    res.send('aloha');
})

app.get('/routing',function(req,res){
    res.send('aloha routing');
})
app.listen(port, function(err){
    console.log('Server is running on port '+ port);
});