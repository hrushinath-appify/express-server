// Using http module Node.js
// const http = require('http');
// const fs = require('fs');
// const path = require('path');


// const publicFolder = path.join(__dirname, 'public');


// const serveFile = (filePath, contentType, res) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('404: File Not Found');
//     } else {
//       res.writeHead(200, { 'Content-Type': contentType });
//       res.end(data);
//     }
//   });
// };


// const server = http.createServer((req, res) => {
//   let filePath = path.join(publicFolder, req.url === '/' ? 'index.html' : req.url);

 
//   const extname = path.extname(filePath);
//   let contentType = 'text/html';

//   switch (extname) {
//     case '.css':
//       contentType = 'text/css';
//       break;
//     case '.jpg':
//     case '.jpeg':
//       contentType = 'image/jpeg';
//       break;
//     case '.png':
//       contentType = 'image/png';
//       break;
//     case '.js':
//       contentType = 'application/javascript';
//       break;
//     default:
//       contentType = 'text/html';
//   }


//   serveFile(filePath, contentType, res);
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// Using Express
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});