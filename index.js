const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Version Center! Version 1.0.0');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});