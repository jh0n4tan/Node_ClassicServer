const { read } = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola pendejas');
});

erver.listen(3000,()=>{
    console.log('Server running on port 3000');
})