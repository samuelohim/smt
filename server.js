const express = require('express');
eo = express();
port = process.env.port || 8080;

eo.get('/', (req, res)=>{
 res.send('Hi from server');
});

eo.listen(port, ()=>{
console.log(`Listening on port: ${port}`);
});
