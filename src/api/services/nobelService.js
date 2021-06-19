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
}