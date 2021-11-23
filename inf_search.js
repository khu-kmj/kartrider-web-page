var key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjAxNjMxMTYzIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYzNDMwMTE0NCwiZXhwIjoxNjQ5ODUzMTQ0LCJpYXQiOjE2MzQzMDExNDR9.EEWMly4HZG_DY-aleMtDFVOOmbWl8uVmG1tHVM3c-BE"
var express = require('express');
var app=express();

const bodyParser=require('body-parser');
const { fileURLToPath } = require('url');
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함 
app.use(bodyParser.json());                         // json 타입으로 파싱하게 설정
app.use('/inf/result',express.static('metadata'));
app.use('/',express.static('views'));
app.use('/game/result',express.static('metadata'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var chname;
var vec=[];

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
            var option2={
                url: "https://api.nexon.co.kr/kart/v1.0/users/"+jsbody.accessId+"/matches?start_date=&end_date= &offset=0&limit=10&match_types=",
                headers:{Authorization: key}
            };
            request.get(option2, function(error, response, body){            
                var match=JSON.parse(body);
                res.render('inf_search_result',{name: jsbody.name, level: jsbody.level,body:JSON.stringify(match)});
            });
          } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
          }
    });
});

app.post("/game/result",(req,res)=>{
    vec=req.body.test;
    var item=["empty", "추억", "empty", "신중함","안정적","empty","열정","책임감","아이템","스피드","믿음직","호기심","헌신적","자유로움"];
    keyword=[];
    for(var i=1; i<vec.length; i++){
        if(i%2!=0){
            if(vec[i]=="1"){
                keyword.push(item[i-1]);
            }
            else{
                keyword.push(item[i]);
            }
        }
    }
})

app.get("/game/result",(req,res)=>{
    var temp="";
    for(var i=0; i<vec.length; i++){
        if(i!=2 && i!=3 && i!=4 && i!=5 && i!=10 && i!=11)
            temp+=vec[i];
    }
    var fs=require('fs');
    var url="kart_find"+temp+"/";
    var testFolder="metadata/kart_find"+temp;
    fs.readdir(testFolder, function(error, list){
        var rand=Math.floor(Math.random()*list.length);
        res.render('game_result',{url:url,body:list[rand],keyword:keyword});
    });
});

app.get("/game",(req,res)=>{
    res.render('game_home');
});
app.get("/inf",(req,res)=>{
    res.render('inf_search_home');
});

app.get("/",(req,res)=>{ 
    res.render('main_home');
});

app.listen("8080",function(req,res){
    console.log('server listening at port no. 8080');
});
