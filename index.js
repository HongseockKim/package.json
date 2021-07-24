const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
   res.send('하이루')
});

app.listen(port,()=> console.log(`서버켜짐${port}포트`));