const jwt = require("jsonwebtoken");
const key = "secret";//密鑰自己設

function signToken(payload, cb){
    jwt.sign(payload, key, cb);
}

//匯出 其他檔案才能引入
module.exports = {
    signToken: signToken
}