const nobelModel = require("../model/nobel");
const Sequelizer = require('sequelize');
const Op = Sequelizer.Op;
const db = require('../config/db.config');
const Nobel = nobelModel(db, Sequelizer);
module.exports = class NobelService {
    static async getNobelWinnerWhere(options) {
        try {
            return await Nobel.findAll({
                where: options,
                limit: 100
            })
                .then(function (count) {
                    console.log(count);
                    return count;

                });
        } catch (error) {
            console.log(`Nobel winners not found. ${error}`)
        }
    }

    static async getAllNobelWinners() {
        try {
            return Nobel.findAll();
        } catch (error) {
            console.log(`Could not fetch nobel winners ${error}`);
        }
    }

    static async createNobelWinner(data) {
        try {
            const newNobelWinner = {
                "firstname": data.firstname,
                "surname": data.surname,
                "born_country_code": data.born_country_code,
                "died_country_code": data.died_country_code,
                "gender": data.gender,
                "year": data.year,
                "category": data.category,
                "share": data.share,
                "name_of_university": data.name_of_university,
                "city_of_university": data.city_of_university,
                "country_of_university": data.country_of_university,
                "born_month": data.born_month,
                "age": data.age,
                "age_get_prize": data.age_get_prize
            };
            await Nobel.create(newNobelWinner);
            return "Nobel Winner created";
        } catch (error) {
            console.log(`Could not add nobel winner ${error}`);
            return "failure";
        }
    }

    static async updateNobelWinner(data) {
        try {
            const NobelWinner = {
                "firstname": data.firstname,
                "surname": data.surname,
                "born_country_code": data.born_country_code,
                "died_country_code": data.died_country_code,
                "gender": data.gender,
                "year": data.year,
                "category": data.category,
                "share": data.share,
                "name_of_university": data.name_of_university,
                "city_of_university": data.city_of_university,
                "country_of_university": data.country_of_university,
                "born_month": data.born_month,
                "age": data.age,
                "age_get_prize": data.age_get_prize
            };
            await Nobel.update(NobelWinner, {where: {"id": data.id}});
            return "Nobel Winner updated";
        } catch (error) {
            console.log(`Error updating nobel winner ${error}`);
            return "failure";

        }
    }
}