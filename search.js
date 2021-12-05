// .env파일을 사용하지 않는 경우 주석처리
require("dotenv").config({path: ".env"});
// var key="ENTER YOUR API KEY"
const key=process.env.API_KEY;
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
        //개인전(그랑프리, 무한 부스터 등) 검색
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