var key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjAxNjMxMTYzIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYzNDMwMTE0NCwiZXhwIjoxNjQ5ODUzMTQ0LCJpYXQiOjE2MzQzMDExNDR9.EEWMly4HZG_DY-aleMtDFVOOmbWl8uVmG1tHVM3c-BE"
var chname;

exports.home_get=function(req,res){
    res.render('search_home');
};


exports.result_post=function(req,res){
    chname=encodeURIComponent(req.body.test);
};

exports.result_get=function(req,res){
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
                //개인전만 검색하는 것임
                url: "https://api.nexon.co.kr/kart/v1.0/users/"+jsbody.accessId+"/matches?start_date=&end_date= &offset=0&limit=10&match_types=7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a",
                headers:{Authorization: key}
            };
            request.get(option2, function(error, response, body){            
                var match=JSON.parse(body);
                res.render('search_result',{name: jsbody.name, level: jsbody.level,body:JSON.stringify(match)});
            });
          } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
          }
    });
};