const sha1 = require("sha1");

const config = {
  token: "azhwechat"
};
function confirmWeChat(request, response) {
  const { signature, echostr, timestamp, nonce } = request.query;
  console.log("request data : \n ", request.query);
  const { token } = config;
  const combinedData = [timestamp, nonce, token].sort();
  const str = combinedData.join("");
  const encrypt = sha1(str);
  if (encrypt === signature) {
    console.log("wechat");
    response.send(`${echostr}`);
  } else {
    console.log("nowechat");
  }
}
