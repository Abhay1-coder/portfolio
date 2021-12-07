const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url=='/home' || req.url === '/'){
        let data = fs.readFileSync('Static/index.html');
        res.write(data);
    }
    else if(req.url==='/contact'){
        let data = fs.readFileSync('Static/contact.html');
        res.write(data);
    }
    else{
        let data = fs.readFileSync('Static/err.html');
        res.write(data);
    }
    res.end();
}).listen(8080, ()=>{console.log("server is  running on port 8080")});