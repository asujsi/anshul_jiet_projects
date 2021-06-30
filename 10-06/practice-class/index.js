let http = require("http");
let date = require("./app");

const server = http.createServer((req, res) => {
    const data = date;
    console.log(data);
    res.end(data); //will not call console.log();
});

server.listen(8080);