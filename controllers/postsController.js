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
    res.json(detailPost);
    //se non trovasse il prodotto
    if (!detailPost) {
        // Imposto lo status 404 e restituisco un JSON con le altre informazioni
        return res.status(404).json({
            error: "Not Found",
            message: "Prodotto non trovato"
        });
    };
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
    posts.splice(posts.indexOf(p), 1);
    //log lista posts aggiornata
    console.log(posts);
    //rest con status 204
    res.status(204);
};


module.exports = { index, show, destroy };