var express = require('express');
var app=express();
var test=require('./test.js');
var search=require('./search.js');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함 
app.use(bodyParser.json());                         // json 타입으로 파싱하게 설정
app.use('/',express.static('views'));
app.use('/test/result',express.static('views'));
app.use('/search/result',express.static('views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/* kart recommendation */
app.get('/test',test.home_get);
app.get('/test/result',test.result_get);
app.post('/test/result',test.result_post);

/* inf */
app.get('/search',search.home_get);
app.get('/search/result',search.result_get);
app.post('/search/result',search.result_post);

/* home page */
app.get("/",(req,res)=>{ 
    res.render('main_home');
});

/* server */
app.listen("8080",function(req,res){
    console.log('server listening at port no. 8080');
});
