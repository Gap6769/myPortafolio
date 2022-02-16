const express = require('express');
const app = express();
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, './public/assets/')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))});

    app.get('/cv', (req, res) => {
    
        res.sendFile(path.join(__dirname,'/views/cv.html'))});
    

app.listen(80), () => {
    console.log('Server is running on port 3000');
}

