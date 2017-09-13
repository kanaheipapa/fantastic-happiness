const express =require("express");
const app=express();
const path =require("path");
//在最上方引入
const bodyParser = require("body-parser");
//註冊 body parser middleware
const signToken = require("./utils/jwt.js").signToken;
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req,res,next){
  console.log(new Date());
  next();
})

app.get("/",function(req, res)
{
  res.send("hello word!");
});
app.get("/login",function(req,res){
  res.sendFile(path.resolve(__dirname,"./views/login.html"))
});
app.post("/login", function(req, res){
  let username=req.body.username;
  let password=req.body.password;
  if(username=="abc"&&password=="abc")
  {
    signToken({username:"abc"}, function(err, token){
      res.json({
          login: true,
          token: token
      });
  })
  }else{
    //錯誤
    res.json({
        login: false
    });
}
  //傳入資料會存在 req.body 中
  console.log(req.body);
});
app.listen(3000,function(){
    console.log("server start!!");
});
