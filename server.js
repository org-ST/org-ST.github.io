const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, 'www'); // Your static folder

app.use(serveStatic(staticPath));

const PORT = 5555; // HTTP port

app.listen(PORT, () => {
  console.log(`HTTP Server running at http://localhost:${PORT}`);
});
