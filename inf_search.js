var key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjAxNjMxMTYzIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYzNDMwMTE0NCwiZXhwIjoxNjQ5ODUzMTQ0LCJpYXQiOjE2MzQzMDExNDR9.EEWMly4HZG_DY-aleMtDFVOOmbWl8uVmG1tHVM3c-BE"
var express = require('express');
var app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));  // URL 인코딩 안함 
app.use(bodyParser.json());                         // json 타입으로 파싱하게 설정
app.use('/inf/result',express.static('metadata'));
app.use('/',express.static('views'));

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
                url: "https://api.nexon.co.kr/kart/v1.0/users/"+jsbody.accessId+"/matches?start_date=&end_date= &offset=0&limit=1&match_types=",
                headers:{Authorization: key}
            };
            request.get(option2, function(error, response, body){
                var match=JSON.parse(body);
                var tId=match.matches[0].matches[0].trackId;
                var kartId=match.matches[0].matches[0].player.kart;
                var mrank=match.matches[0].matches[0].player.matchRank;
                //한화라고 검색하면 아직 오류존재
                var players=match.matches[0].matches[0].playerCount;        
                var stime=new Date(match.matches[0].matches[0].startTime.split('T')[0]+" "+match.matches[0].matches[0].startTime.split('T')[1]);
                var etime=new Date(match.matches[0].matches[0].endTime.split('T')[0]+" "+match.matches[0].matches[0].endTime.split('T')[1]);
                var diff=etime-stime
                var minute= Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                var second = Math.floor((diff % (1000 * 60)) / 1000);
                var diff_time=minute + " : " + second;
                if(mrank=="99"){
                    mrank="retire";   
                    diff_time="retire";
                }
                var ranking=mrank+" / "+players
                
                if (!error && response.statusCode == 200) {
                    res.render('inf_search_result', {name: jsbody.name, level: jsbody.level, trackId: tId, kart:kartId,rank:ranking,time: diff_time});
                }
                else{
                    res.status(response.statusCode).end();
                    console.log('error = ' + response.statusCode);
                }     
            });
          } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
          }
    });
});
app.post("/game",(req,res)=>{
    vec.push(req.body.test);
    console.log(vec);
})
app.get("/game",(req,res)=>{
    res.render('game_home');
})
app.get("/inf",(req,res)=>{
    res.render('inf_search_home');
});

app.get("/",(req,res)=>{
    res.render('main_home');
});

app.listen("8080",function(req,res){
    console.log('server listening at port no. 8080');
});
