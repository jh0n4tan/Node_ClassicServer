const { read } = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola pendejas');
});

http.Server.listener(3000,()=>{
    console.log('Server running on port 3000');
})