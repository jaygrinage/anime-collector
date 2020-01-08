const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeListSchema = new Schema({
    username: { type: String, required: true },
    title: {type: String, required:true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const AnimeList= mongoose.model('AnimeList', animeListSchema);

module.exports = AnimeList;