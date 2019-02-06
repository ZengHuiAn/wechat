const express = require("express");
const sha1 = require("sha1");
/**
 *node_1  | { signature: '7be0844bd2e765923c2915393d76c80d4568129c', //加密签名
 *node_1  |   echostr: '1294628588271433567', //微信的随机字符串
 *node_1  |   timestamp: '1549452824', //发送的时间
 *node_1  |   nonce: '1310740436' } //微信随机数字
 */

const config = {
  token: "snake"
};

const port = 8081;
console.log("server start....");

const app = express();

app.get("/", (request, response) => {
  const { signature, echostr, timestamp, nonce } = request.query;

  console.log("request data : \n ", request.query);

  const { token } = config;

  const combinedData = [timestamp, nonce, token].sort();

  const str = combinedData.join("");

  const encrypt = sha1(str);

  console.log("加密后的数据：\n", encrypt);

  if (encrypt === signature) {
    console.log("是微信服务器发来的数据");
    response.send(echostr);
  } else {
    console.log("不是微信服务器发来的数据");
  }
});
app.listen(port, () => console.log(`listen ${port} `));
