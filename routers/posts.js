const posts = require('../data/posts');
const express = require('express');
const router = express();

//index
router.get('/', (req, res) => {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter(p => p.tags.includes(req.query.tag));
    };
    res.json(filteredPosts);
});

//show
router.get('/:id', (req, res) => {
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
});

//destroy
router.delete('/:id', (req, res) => {
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
});

module.exports = router;