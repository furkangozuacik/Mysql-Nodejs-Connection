const express=require('express');
const app=express();


app.use((req,res)=>{
    //hata sayfası yapması
    res.status(404);
    res.send('<h1>Sayfa Bulunamadı</h1>');
   });
   
   app.listen(3000,()=>{
   console.log("listening on port 3000");
   });
   