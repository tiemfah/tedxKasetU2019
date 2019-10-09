var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('pages/index');
})

var server = app.listen(3000, function (){
    console.log("Calling app.listen's callback function.");
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });