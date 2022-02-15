const express = require('express');
const app = express();
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, './public/assets/')));

app.get('/', (req, res) => {
    console.log(__dirname + '/views/index.html');
    res.sendFile(path.join(__dirname,'/views/index.html'))});



app.listen(80), () => {
    console.log('Server is running on port 3000');
}

