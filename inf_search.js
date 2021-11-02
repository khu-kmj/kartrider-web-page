var key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjAxNjMxMTYzIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYzNDMwMTE0NCwiZXhwIjoxNjQ5ODUzMTQ0LCJpYXQiOjE2MzQzMDExNDR9.EEWMly4HZG_DY-aleMtDFVOOmbWl8uVmG1tHVM3c-BE"
var express = require('express');
var app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함 
app.use(bodyParser.json());                         // json 타입으로 파싱하게 설정

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var chname;
app.post("/inf/result",(req,res)=>{
    chname=encodeURIComponent(req.body.test);
});

app.get("/inf/result",(req,res)=>{
    var api_url='https://api.nexon.co.kr/kart/v1.0/users/nickname/'+chname;
    var request=require('request');
    var options={
        url: api_url,
        headers:{Authorization: key}
    };

    request.get(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var jsbody=JSON.parse(body);
            //res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'}); and res.end(body)
            res.render('inf_search_result', {aid:jsbody.accessId, name: jsbody.name, level: jsbody.level});
          } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
          }
    });
});

app.get("/inf",(req,res)=>{
    res.render('inf_search_home');
});

app.listen(8080,function(req,res){
    console.log('server listening at port no. 8080');
});