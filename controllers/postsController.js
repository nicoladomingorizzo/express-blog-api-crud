const posts = require('../data/posts');

//funzione per index
function index(req, res) {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter(p => p.tags.includes(req.query.tag));
    };
    res.json(filteredPosts);
};

//funzione show
function show(req, res) {
    const id = parseInt(req.params.id);
    const detailPost = posts.find(p => p.id === id);
    //se non trovasse il prodotto
    if (!detailPost) {
        // Imposto lo status 404 e restituisco un JSON con le altre informazioni
        return res.status(404).json({
            error: "Not Found",
            message: "Prodotto non trovato"
        });
    };
    res.json(detailPost);
};

//store
function store(req, res) {
    console.log(req.body);
    //creo un id univoco prendendo come riferimento la lunghezza dell'array
    const newPostId = posts[posts.length - 1].id + 1;
    //costruisco l'oggetto prendendo i dati da req.body
    const newPostObj = {
        id: newPostId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };
    //controllo con un log il prodotto nuovo quando lo invio
    console.log(newPostObj);
    //pusho nell'array di posts
    posts.push(newPostObj);
    //provide status 201
    //restituisco ciò che ho creato
    res.status(201).json(newPostObj);
};

//update
function update(req, res) {
    const id = parseInt(req.params.id);
    const detailPost = posts.find(p => p.id === id);
    //se non trovasse il prodotto
    if (!detailPost) {
        // Imposto lo status 404 e restituisco un JSON con le altre informazioni
        return res.status(404).json({
            error: "Not Found",
            message: "Prodotto non trovato"
        });
    };
    //recupero le i valori dalla req.body
    detailPost.title = req.body.title;
    detailPost.content = req.body.content;
    detailPost.image = req.body.image;
    detailPost.tags = req.body.tags;
    //faccio un console log dell'array modificata
    console.log(posts);
    //restituisco ciò che ho modificato
    res.json(detailPost);
};

//funzione destroy
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const detailPost = posts.find(p => p.id === id);
    //se non trovasse il prodotto
    if (!detailPost) {
        // Imposto lo status 404 e restituisco un JSON con le altre informazioni
        return res.status(404).json({
            error: "Not Found",
            message: "Prodotto non trovato"
        });
    };
    //slice per eliminare post
    posts.splice(posts.indexOf(detailPost), 1);
    //log lista posts aggiornata
    console.log(posts);
    //rest con status 204
    res.status(204);
};


module.exports = { index, show, store, update, destroy };