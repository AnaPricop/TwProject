const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const fs = require('fs');
const NobelController = require("./src/api/controller/nobelController");
const AdminController = require("./src/api/controller/AdminController");
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

    if (path === '/' || path === '/index.html') {
        directHtml(res, "./src/public/html/index.html");
    }
    else if(path === '/report.html'){
        directHtml(res,"./src/public/html/report.html");
    }else if(path === '/contact.html') {
        directHtml(res, "./src/public/html/contact.html");
    }else if (path === '/api/loginAdmin' || path === '/loginAdmin.html') {
        directHtml(res, "./src/public/html/loginAdmin.html");
    }
    else if(path === '/css/report.css'){
        fs.readFile('./src/public/css/report.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/css/header.css') {
        fs.readFile('./src/public/css/header.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }else if (path === '/css/navbar.css') {
        fs.readFile('./src/public/css/navbar.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/css/layout.css') {
        fs.readFile('./src/public/css/layout.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else {
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
        case '/api/login' :
            return AdminController.apiLoginAdmin(res, req);
    }
    return "Invalid route!";
}

/*
* Starting api
* */
server.listen(port, hostname, () => {
    console.log(`Server running on port ...${port}`);
})