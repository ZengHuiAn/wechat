const express = require("express")

const port = 8081
console.log("server start....");

const app = express()


app.get("/",(request, response) =>{
        console.log(request.query);
        
    // response.send("Hello, world");
});
app.listen(port,()=>console.log(`listen ${port} `)
)