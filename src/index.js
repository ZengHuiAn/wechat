const express = require("express");
const confirmObject = require("./confirmWechat");
// import {}
/**
 *node_1  | { signature: '7be0844bd2e765923c2915393d76c80d4568129c', //加密签名
 *node_1  |   echostr: '1294628588271433567', //微信的随机字符串
 *node_1  |   timestamp: '1549452824', //发送的时间
 *node_1  |   nonce: '1310740436' } //微信随机数字
 */

const port = 8081;

const app = express();

app.get("/", (request, response) => {
  confirmObject.confirmWeChat(request, response);
});
app.listen(port, () => console.log(`listen ${port} `));
