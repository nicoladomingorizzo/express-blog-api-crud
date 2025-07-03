const express = require('express');
const app = express();
const port = 3020;
const postsRouters = require('./routers/posts');
const handleServerError = require('./middlewares/handleServerError')

app.use(express.json());

app.use(express.static('public'));

app.use('/api/posts', postsRouters);

app.get('/', (req, res) => {
    res.send('Welcome to our Bakery');
});


app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

app.use(handleServerError);