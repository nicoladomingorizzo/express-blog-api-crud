const router = require('./routers/posts');
const express = require('express');
const port = 3020;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Welcome to our Bakery');
});
