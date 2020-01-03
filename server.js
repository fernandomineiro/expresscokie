const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/cookie',function(req, res){
    res.cookie(cookie_name , 'Bolacha');
    return res.send('Biscoitinhos criado!');
});


res.cookie(cookie_name , 'cookie_value', { HttpOnly: true});

res.cookie(cookie_name , 'cookie_value', { secure: true});

res.cookie(cookie_name , 'cookie_value', {expire : 24 * 60 * 60 * 1000 });

app.get('/clearcookie', function(req,res){
    res.cookies('Recheada');
    res.send('Bolacha deletada');
});

app.get('/clearnew', function(req,res){
    res.clearCookie('Manteiga');
    res.send('Bolacha deletada');
});


app.listen(666, function () {
    console.log('A porta do umbral está aberta em 666!');
  });