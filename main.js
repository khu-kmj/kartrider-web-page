const fs = require('fs');
const path = require('path');
const HTTPS = require('https');
const domain = "2019110627.osschatbot.ga";
const sslport = 23023;

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
app.post('/search',search.home_post);
app.get('/search/result',search.result_get);
app.post('/search/result',search.result_post);

/* home page */
app.get("/",(req,res)=>{ 
    res.render('main_home');
});

/* server */
try {
    const option = {
      ca: fs.readFileSync('/etc/letsencrypt/live/' + domain +'/fullchain.pem'),
      key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/cert.pem'), 'utf8').toString(),
    };
  
    HTTPS.createServer(option, app).listen(sslport, () => {
      console.log(`[HTTPS] Server is started on port ${sslport}`);
    });
  } catch (error) {
    console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
    console.log(error);
  }
  
/*local server
app.listen("8080",function(req,res){
    console.log('server listening at port no. 8080');
});
*/
