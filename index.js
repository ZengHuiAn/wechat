console.log("服务器开启中....");
function delay() {
    setTimeout(() => {
        console.log("延迟开启");

        delay()
    }, 1000);
}


delay()