const router = require('express').Router();
let Anime = require('../models/animeList.model');

router.route('/').get((req, res) => {
    Anime.find()
        .then(animelist => res.json(animelist))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newAnime = new Anime({
        username,
        title,
        description,
        date,
    });

    newAnime.save()
        .then(() => res.json('Anime added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Anime.findById(req.params.id)
        .then(anime => res.json(anime))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Anime.findByIdAndDelete(req.params.id)
        .then(() => res.json('Anime deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Anime.findById(req.params.id)
        .then(anime=> {
            anime.username = req.body.username;
            anime.description = req.body.description;
            anime.duration = Number(req.body.duration);
            anime.date = Date.parse(req.body.date);

            anime.save()
                .then(() => res.json('Anime updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;