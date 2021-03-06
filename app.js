const sqlite3 = require('sqlite3').verbose();
const http = require('http');
const url = require('url');
const fs = require('fs');
const MoviesController = require("./src/api/controller/MoviesController");
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
    } else if (path === '/report.html') {
        directHtml(res, "./src/public/html/report.html");
    } else if (path === '/contact.html') {
        directHtml(res, "./src/public/html/contact.html");
    }  else if (path === '/api/adminPanel' || path === '/adminPanel.html' || path === '/api/loginAdmin') {
        directHtml(res, "./src/public/html/adminPanel.html");
    } else if (path === '/api/loginAdmin' || path === '/loginAdmin.html' || path === '/api/loginAdmin') {
        directHtml(res, "./src/public/html/loginAdmin.html");
    }else if (path === '/views/loginAdminView.js') {
        fs.readFile('./src/public/views/loginAdminView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/views/adminPanelView.js') {
        fs.readFile('./src/public/views/adminPanelView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/views/deleteView.js') {
        fs.readFile('./src/public/views/deleteView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/views/updateView.js') {
        fs.readFile('./src/public/views/updateView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if(path === '/css/adminPanel.css'){
        fs.readFile('./src/public/css/adminPanel.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
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
    } else if (path === '/css/navbar.css') {
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
    } else if (path === '/css/login.css') {
        fs.readFile('./src/public/css/login.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    } else if (path === '/css/table.css') {
        fs.readFile('./src/public/css/table.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    } else if (path === '/src/public/scripts/inputScript.js') {
        fs.readFile('./src/public/scripts/inputScript.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/css/tags.css') {
        fs.readFile('./src/public/css/tags.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/src/public/views/movieView.js') {
        // console.log('05')
        fs.readFile('./src/public/views/movieView.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(page);
            res.end();
        });
    }
    else if (path === '/src/public/entities/table.js') {
        console.log('05')
        fs.readFile('./src/public/entities/table.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page);
            res.end();
        });
    }else if (path === '/src/public/exportService/exportCSV.js') {
        console.log('05')
        fs.readFile('./src/public/exportService/exportCSV.js', function (err, page) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
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
            return MoviesController.apiGetAllMovies(res, req);
        case '/api/findWhere' :
            return MoviesController.apiGetMoviesWhere(res, req);
        case '/api/create':
            return MoviesController.apiCreateMovies(res, req);
        case '/api/update':
            return MoviesController.apiUpdateMovies(res, req);
        case '/api/delete' :
            return MoviesController.apiDeleteMovies(res, req);
        case '/api/movies' :
            return MoviesController.apiGetMovies(res, req);
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