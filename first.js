var express = require('express');
var app = express();
var http = require('http').createServer(app);
http.listen(5000);

app.get("/", function (req, res) {
    // res.send('<font color=red>HELLO WORLD</font>')
    res.sendFile(__dirname + "/index.html");
})
app.get("/about", function (req, res) {
    // res.send('<font color=red>HELLO WORLD</font>')
    res.sendFile(__dirname + "/about.html");
})
app.get("/sum/:num1/:num2", function (req, res) {
    var n = req.params.num1;
    n = parseInt(n);

    var m = req.params.num2;
    m = parseInt(m);

    var sum = n + m;
    res.send("<h1>" + sum + "</h1>")
})