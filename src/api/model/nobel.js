const Sequelize = require('sequelize');
const {INTEGER} = require('sequelize');
const db = require('../config/db.config');

const nobelSchema = {
    firstname: {
        type: String,
    },
    surname: {
        type: String,
    },
    born_country_code: {
        type: String,
    },
    died_country_code: {
        type: String,
    },
    gender: {
        type: String,
    },
    year: {
        type: INTEGER,
    },
    category: {
        type: String,
    },
    share: {
        type: INTEGER,
    },
    name_of_university: {
        type: String,
    },
    city_of_university: {
        type: String,
    },
    country_of_university: {
        type: String,
    },
    born_month: {
        type: String,
    },
    age: {
        type: INTEGER,
    },
    age_get_prize: {
        type: INTEGER,
    }
};

const nobelModel = db.define('nobel_final',nobelSchema,{
    id: false,
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
nobelModel.removeAttribute('id');
module.exports = () => nobelModel;