const http = require("http");
const url = require("url");
const fs = require("fs");

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New Request Received\n`;
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

            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(8004, () => console.log("Server Started"));