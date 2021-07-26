const express = require('express')
const app = express();
const port = 4000;
app.use(express.json());

app.get('/',(req,res) =>{
   res.send('하이루 이건뭐지')
});



app.get('/api/border',function (req,res){
   res.send([
      {num:'1',text:'test1'},{num:'2',text:'test2'}
   ])
});


//클라이언트에서 url 요청을 보내고 해당하는 라우터 겟 해서 리스폰스 샌드 안녕이라고 클라이언트로 다시보냄
app.get('/api/hello',function (req,res){
   res.send({message:"Weclom 리액트!"})
});
app.listen(port,()=> console.log(`서버켜짐${port}포트`));