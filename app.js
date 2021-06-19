const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const fs = require('fs');
const NobelController = require("./src/api/controller/nobelController");
const hostname = '127.0.0.1';
const port = 3000;

/*
* Creating http api and routing
* */
const server = http.createServer(async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    const reqUrl = url.parse(req.url);

    const path = reqUrl.pathname;

    res.statusCode = 200;

    if (path === '/') {
        directHtml(res, "./src/public/index.html");
    } else {
        res.setHeader('Content-Type', 'application/json');
        await routing(path, res, req);
        res.end();
    }
});

function directHtml(res, path) {
    fs.readFile(path, function (err, html) {
        if (err) {
            throw err;
        }
        res.write(html);
        res.end();
    });
}

/**
 * Routes for API
 * */
function routing(path, res, req) {
    switch (path) {
        case '/api/findAll':
            return NobelController.apiGetAllNobelWinners(res, req);
        case '/api/findWhere' :
            return NobelController.apiGetNobelWinnerWhere(res, req);
        case '/api/create':
            return NobelController.apiCreateNobelWinner(res, req);
        case '/api/update':
            return NobelController.apiUpdateNobelWinner(res, req);
        case '/api/delete' :
            return NobelController.apiDeleteNobelWinner(res, req);
    }
    return "Invalid route!";
}

/*
* Starting api
* */
server.listen(port, hostname, () => {
    console.log(`Server running on port ...${port}`);
})