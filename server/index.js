

const express = require('express')
const app = express();
const port = 4000;
const mysql = require('mysql');

   let connection = mysql.createConnection({
      host     : 'localhost', //실제로 연결할 데이터베이스의 위치
      user     : 'gusduswk11',
      password : 'akgusFL8-892',
      database : 'mydata' //데이터베이스 이름
   });



module.exports = connection;

app.use(express.json());

app.get('/',(req,res) =>{
   res.send('하이루 이건뭐지')
});

app.post('/api/textvalue',(req,res)=>{
   let data = req.body.text;
   const sql = "INSERT INTO border_list(text) value (?)";
   connection.query(sql,data,function (err,result,fields){
      if(result.affectedRows > 0){
         res.send('true')
      }else if(err){
         console.log(`쿼리 에러${err}`)
      }

   })
})

app.post('/api/delet',(req,res)=>{
   let data = req.body.id;
   const sql = 'DELETE FROM border_list WHERE id = ?';
   connection.query(sql,data,function (err,result,fields){
      if(result.affectedRows > 0){
         res.send('true')
      }else if(err){
         console.log(`쿼리 에러${err}`)
      }
   })
});

app.post('/api/border_detail',(req,res) =>{
   let data = req.body.value;
   const sql = 'select(text) from border_list where id= ?';
   connection.query(sql,data,function (err,result,fields){
      if(result.length === 1){
         res.send(result)
      }else if(err){
         console.log(`쿼리 에러 ${err}`);
      }
   });
});


app.get('/api/test',function (req,res){
   const sql = 'select * from border_list';
   connection.query(sql,function (err,result,fields){
      if(err){
         console.log(`쿼리 에러${err}`)
      }
      res.send(result)
   })
});



app.get('/api/border',function (req,res){
   res.json([
      { id: 1, name: '가' ,text:'월요일입니다',text_2:'화요일입니다',text_3:'수요일입니다',text_4:'목요일입니다',text_5:'금요일입니다',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 2, name: '나' ,text:'밥',text_2:'옷',text_3:'동네',text_4:'밤',text_5:'성남',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 3, name: '다',text:'점심',text_2:'바지',text_3:'서울',text_4:'아침',text_5:'분당',text_6:'토요일입니다',text_7:'일요일입니다' },
      { id: 4, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 5, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 6, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 7, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 8, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 9, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 10, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'},
      { id: 11, name: '라',text:'저녁',text_2:'티셔츠',text_3:'문정',text_4:'새벽',text_5:'판교',text_6:'토요일입니다',text_7:'일요일입니다'}
   ])
});


//클라이언트에서 url 요청을 보내고 해당하는 라우터 겟 해서 리스폰스 샌드 안녕이라고 클라이언트로 다시보냄
app.get('/api/hello',function (req,res){
   res.send({message:"Weclom 리액트!"})
});
app.listen(port,()=> console.log(`서버켜짐${port}포트`));