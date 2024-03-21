const http = require('http');
const express = require('express');
const app = express(); // gói gọn vào trong app, tạo 1 app
const server = http.createServer(app); // tạo server, thiết kế server nạp app vào
server.listen(3000); // đã xong server, có thể lắng nghe các request 

