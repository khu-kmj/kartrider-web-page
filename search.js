var key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjAxNjMxMTYzIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYzNDMwMTE0NCwiZXhwIjoxNjQ5ODUzMTQ0LCJpYXQiOjE2MzQzMDExNDR9.EEWMly4HZG_DY-aleMtDFVOOmbWl8uVmG1tHVM3c-BE"
var request=require('request');
var userId=[];
var username=[];
exports.home_get=function(req,res){
    res.render('search_home');
};
exports.home_post=function(req,res){
    var chname=encodeURIComponent(req.body.test);
    var api_url='https://api.nexon.co.kr/kart/v1.0/users/nickname/'+chname;
    var options={
        url: api_url,
        headers:{Authorization: key}
    };
    request.get(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var jsbody=JSON.parse(body);
            userId.push(jsbody.accessId);
            username.push(jsbody.name);
            res.send(JSON.stringify(response.statusCode));
          } 
          else {
            res.send(JSON.stringify(response.statusCode));
          }
    });
}

exports.result_post=function(req,res){

}

exports.result_get = function (req, res) {
    var api_url="https://api.nexon.co.kr/kart/v1.0/users/" + userId[0] + "/matches?start_date=&end_date= &offset=0&limit=10&match_types=7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a";
    userId.splice(0,1);
    var options = {
        //개인전만 검색하는 것임
        url: api_url,
        headers: { Authorization: key }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var match = JSON.parse(body);
            var nickname=username[0];
            username.splice(0,1);
            res.render('search_result', { name: nickname, body: JSON.stringify(match) });
        }
        else{
            res.send("error :" + response.statusCode);
        }
    });
};