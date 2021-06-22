const Sequelize = require('sequelize');
const {INTEGER, REAL} = require('sequelize');
const db = require('../config/db.config');

const movieSchema = {
    imdb_title_id: {
        type: String,
        primaryKey: true
    },
    title: {
        type: String,
    },
    original_title: {
        type: String,
    },
    year: {
        type: String
    },
    date_published: {
        type: String,
    },
    genre: {
        type: String,
    },
    duration: {

        type: String,

    },
    country: {
        type: String,
    },
    language: {
        type: String,
    },
    director: {
        type: String,
    },
    writer: {
        type: String,
    },
    production_company: {
        type: String,
    },
    actors: {
        type: String,
    },
    description: {
        type: String,
    },
    avg_vote: {
        type: String,
    },
    votes: {
        type: String,
    },
    budget: {
        type: String,
    },
    usa_gross_income: {
        type: String,
    },
    worlwide_gross_income: {
        type: String,
    },
    metascore: {
        type: String,
    },
    reviews_from_users: {
        type: String,
    },
    reviews_from_critics: {
        type: String,
    }
};

const movieModel = db.define('imdb_movies', movieSchema, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

movieModel.removeAttribute('id');

module.exports = () => movieModel;