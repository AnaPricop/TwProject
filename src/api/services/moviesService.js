const moviesModel = require("../model/movie");
const Sequelizer = require('sequelize');
const Op = Sequelizer.Op;
const db = require('../config/db.config');
const Movie = moviesModel(db, Sequelizer);
module.exports = class NobelService {
    static async getMoviesWhere(options) {
        try {
            return await Movie.findAll({
                where: options,
                // limit: 100
            })
                .then(function (count) {
                    console.log(count);
                    return count;

                });
        } catch (error) {
            console.log(`MOVIES not found. ${error}`)
        }
    }

    static async getAllMovies() {
        try {
            return Movie.findAll();
        } catch (error) {
            console.log(`Could not fetch MOVIES ${error}`);
        }
    }

    static async createMovies(data) {
        try {
            const newMovies = {
                "imdb_title_id": data.imdb_title_id,
                "title": data.title,
                "original_title": data.original_title,
                "year": data.year,
                "date_published": data.date_published,
                "genre": data.genre,
                "duration": data.duration,
                "country": data.country,
                "language": data.language,
                "director": data.director,
                "writer": data.writer,
                "production_company": data.production_company,
                "actors": data.actors,
                "description": data.description,
                "avg_vote": data.director,
                "votes": data.writer,
                "budget": data.production_company,
                "usa_gross_income": data.actors,
                "worlwide_gross_income": data.description,
                "metascore": data.production_company,
                "reviews_from_users": data.actors,
                "reviews_from_critics": data.description
            };
            await Movie.create(newMovies);
            return "Movie created";
        } catch (error) {
            console.log(`Could not add Movie ${error}`);
            return "failure";
        }
    }

    static async updateMovies(data) {
        try {
            const Movies = {
                "imdb_title_id": data.imdb_title_id,
                "title": data.title,
                "original_title": data.original_title,
                "year": data.year,
                "date_published": data.date_published,
                "genre": data.genre,
                "duration": data.duration,
                "country": data.country,
                "language": data.language,
                "director": data.director,
                "writer": data.writer,
                "production_company": data.production_company,
                "actors": data.actors,
                "description": data.description,
                "avg_vote": data.director,
                "votes": data.writer,
                "budget": data.production_company,
                "usa_gross_income": data.actors,
                "worlwide_gross_income": data.description,
                "metascore": data.production_company,
                "reviews_from_users": data.actors,
                "reviews_from_critics": data.description
            };
            await Movie.update(Movies, {where: {"imdb_title_id": data.imdb_title_id}});
            return "Nobel Winner updated";
        } catch (error) {
            console.log(`Error updating nobel winner ${error}`);
            return "failure";

        }
    }

    static async deleteMovies(options) {
        // options = JSON.parse(options);
        // console.log(typeof options);
        try {
            return await Movie.destroy({
                where: options
            });
        } catch (error) {
            console.log(`Could not delete nobel winner ${error}`);
        }

    }

    static async getAllMoviesName(options) {
        try{
            return await Movie.findAll({
                attributes: [
                    [Sequelizer.fn('DISTINCT', Sequelizer.col('title')) ,'title'],
                ]
            })
                .then(function (list){
                    // console.log(list);
                    return list;
                });
        }catch (error){
            console.log(`Could not get states ${error}`);
        }

    }
}