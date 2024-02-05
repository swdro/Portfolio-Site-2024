const express = require('express');
const path = require('path');

const PORT = 8080;
const PATH_TO_ASSETS = path.join(__dirname, '../');

const app = express();
app.use(express.static(path.join(PATH_TO_ASSETS)));
app.get('*', (req,res) => {
    res.sendFile(path.join(PATH_TO_ASSETS, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});