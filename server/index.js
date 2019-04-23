const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//Server files from this path
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => console.log(`Listening on port ${port}`))