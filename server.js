const express = require('express');
const app = express();
const port = 3020;
const postsRouters = require('./routers/posts');
const handleServerError = require('./middlewares/handleServerError');
const notFoundError = require('./middlewares/notFoundError');

app.use(express.json());

app.use(express.static('public'));

app.use('/api/posts', postsRouters);

app.get('/', (req, res) => {
    res.send('Welcome to our Bakery');
});


app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

//middleware server error 500
app.use(handleServerError);

//middleware client error 404
app.use(notFoundError);