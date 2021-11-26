var vec;
var keyword=[];

exports.home_get=function(req,res){
    res.render('test_home');
};

exports.result_get=function(req,res){
    var temp="";
    for(var i=0; i<vec.length; i++){
        if(i!=2 && i!=3 && i!=4 && i!=5 && i!=10 && i!=11)
            temp+=vec[i];
    }
    var fs=require('fs');
    var url="metadata/kart_find"+temp+"/";
    var testFolder="views/metadata/kart_find"+temp;
    fs.readdir(testFolder, function(error, list){
        var rand=Math.floor(Math.random()*list.length);
        res.render('test_result',{url:url,body:list[rand],keyword:keyword});
    });
};

exports.result_post=function(req,res){
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
};