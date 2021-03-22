var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // fs.createReadStream(__dirname + "/index.html").pipe(res);
    // var data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    // data = data.replace("{name}", "Do Thanh Tan");
    // res.end(data);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    var object = {
        name: 'Do Thanh Tan',
        age: 23,
        gender: 'Male'
    }
    res.end(JSON.stringify(object));

}).listen(7777);