const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I have created my first Continuous Delivery Pipeline and here is the Result'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
