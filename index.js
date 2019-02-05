console.log("server start....");
function delay() {
    setTimeout(() => {
        console.log("port start");

        delay()
    }, 1000);
}


delay()