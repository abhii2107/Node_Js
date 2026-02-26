const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require("express")

const app = express();

app.get("/",(req,res) => {
    return res.send("hello from Home Page")
})
app.get("/about",(req,res) => {
    return res.send(`Hello ${req.query.name}`)
})



function myHandler(req, res){

    const log = `${Date.now()}:${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, () => {

        switch (myUrl.pathname) {

            case "/":
                res.end("Home Page");
                break;

            case "/about":
                const username = myUrl.query.myname || "Guest";
                res.end(`Hi, ${username}`);
                break;

            case "/search":
                const search = myUrl.query.search_query || "";
                res.end(`Here are your results for: ${search}`);
                break;

            case "/signup":
                if(req.method === "GET"){
                    res.end("This is a signup form")
                }
                else if(req.method === "POST"){
                    res.end("success")
                }    
            default:
                res.end("404 Not Found");
        }
    });
};

// const myServer = http.createServer(app)

//  myServer.listen(8004, () => console.log("Server Started"));

app.listen(8004, () => console.log("server Started"));

 