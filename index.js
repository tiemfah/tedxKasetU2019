var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('pages/index');
})

app.get('/watch', (req, res)=>{
    res.render('pages/watch');
})


app.listen(8100)