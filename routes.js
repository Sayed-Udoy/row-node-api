/*
* Title : Routes ;
* Description:Aplication Routes
* Author : Sayed Udoy 
* Date: 21/22/2025
*/


// dependecies 
const {sampleHandler} = require("./handlers/routeHandlers/sampleHandlers")
const routes = {
    'sample' : sampleHandler,
}

module.exports = routes