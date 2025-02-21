const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;
const publicDir = path.join(__dirname, "public");
const dataFile = path.join(__dirname, "data.json");

const routes = {
    "/": "index.html",
    "/about": "about.html",
    "/contact": "contact.html",
    "/style.css": "style.css",
    "/script.js": "script.js"
};

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  //  console.log(req.method, req.url);  
    console.log(routes[req.url]);  
    if (req.method === "GET" && (routes[req.url] || req.url.startsWith("/images/"))) {
        console.log(req.method, req.url);
        const filePath = req.url.startsWith("/images/") ? path.join(__dirname, "../public", req.url) : path.join(__dirname, "../public", routes[req.url]);
        let ext = path.extname(filePath);
        let contentType = mimeTypes[ext] || "application/octet-stream";
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Fichier non trouvé");
                return;
                
            }
console.log(filePath);
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Erreur serveur");
                    return;
                }
                res.writeHead(200, { "Content-Type": contentType });
                res.end(content);
            });
        });

    } else if (req.url === "/data" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            fs.readFile(dataFile, "utf8", (err, data) => {
                let jsonData = [];
                if (!err && data) {
                    jsonData = JSON.parse(data);
                }
                jsonData.push(JSON.parse(body));
                
                fs.writeFile(dataFile, JSON.stringify(jsonData, null, 2), err => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ error: "Erreur d'écriture" }));
                        return;
                    }
                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "Donnée ajoutée avec succès" }));
                });
            });
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route non trouvée");
    }
});

server.listen(port, hostname, () => {
    console.log(`Serveur en fonctionnement à http://${hostname}:${port}/`);
});
