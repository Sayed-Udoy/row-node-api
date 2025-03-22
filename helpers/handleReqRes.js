/*
* Title : Handle Rquest Response;
* Description: Handle Requset and Response 
* Author : Sayed Udoy 
* Date: 21/22/2025
*/


const url  = require("url")
const {StringDecoder} = require("string_decoder")
// Module Scaffholding
const handler = {}


handler.handleReqRes = (req,res)=>{
    // request handle 
    // get the url and parse it 
    const parsedUrl = url.parse(req.url,true)
    const path = parsedUrl.pathname
    const trimedPath = path.replace(/^\/+|\/+$/g,'')
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query
    const headerObject = req.headers

    const decoder = new StringDecoder("utf-8")
    let realData = '' 
    
    req.on("data",(buffer)=>{
        realData += decoder.write(buffer)
    })
    req.on("end",()=>{
        realData += decoder.end()
        res.end(realData)

    })
    // response handle 
}

module.exports = handler