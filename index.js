/*
* Title : Uptime Monitoring Application ;
* Description: A Restfull Api to monitor up or down time of user difined links
* Author : Sayed Udoy 
* Date: 21/22/2025
*/
const http = require('http');

// app object - module scaffolidng

const app = {};

// Configaration
app.config = {
    port:3000,
};

// Create Server 
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRep)
    server.listen(app.config.port,()=>{
        console.log("Listing to port number " + app.config.port)
    })
}

// Handle Request Response 

app.handleReqRep = (req,res)=>{
    // res.send("hello world")
    res.end("hello programmer")
}
app.createServer()