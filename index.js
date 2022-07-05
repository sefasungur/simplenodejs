var express = require("express");
var app = express();

app.get("/", function (req, resp) {
    resp.send("Benim Web Sitem"); //kullanıcılara görünecek yazı
});

app.listen(8080); //uygulamamız bu portu dinleyecek. http://localhost:8080 s