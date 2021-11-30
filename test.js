var vectemp=[];
var keytemp=[];
exports.home_get=function(req,res){
    res.render('test_home');
};
exports.result_post = function (req, res) {
    var vec = req.body.test;
    if (vec == null) {
        res.status(404).send("Not Found");
    }
    else {
        var item = ["empty", "추억", "empty", "신중함", "안정적", "empty", "열정", "책임감", "아이템", "스피드", "믿음직", "호기심", "헌신적", "자유로움"];
        var keyword = [];
        for (var i = 1; i < vec.length; i++) {
            if (i % 2 != 0) {
                if (vec[i] == "1") {
                    keyword.push(item[i - 1]);
                }
                else {
                    keyword.push(item[i]);
                }
            }
        }
        vectemp.push(vec);
        keytemp.push(keyword);
        res.send("success");
    }
};

exports.result_get=function(req,res){
    var temp="";
    for(var i=0; i<vectemp[0].length; i++){
        if(i!=2 && i!=3 && i!=4 && i!=5 && i!=10 && i!=11)
            temp+=vectemp[0][i];
    }
    vectemp.splice(0,1);
    var fs=require('fs');
    var url="metadata/kart_find"+temp+"/";
    var testFolder="views/metadata/kart_find"+temp;
    fs.readdir(testFolder, function(error, list){
        var rand=Math.floor(Math.random()*list.length);
        var keyw=keytemp[0];
        keytemp.splice(0,1);
        res.render('test_result',{url:url,body:list[rand],keyword:keyw});
    });
};