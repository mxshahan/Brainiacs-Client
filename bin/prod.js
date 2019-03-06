var express = require('express');
var app = express();
var path = require('path')
var fallback = require('express-history-api-fallback');

const publicPath = path.resolve(__dirname, '../dist');

//setting middleware
app.use(express.static(publicPath)); //Serves resources from public folder

app.use(fallback('index.html', { root: publicPath }));

app.listen(5000, () => {
    console.log("Running at 5000")
});