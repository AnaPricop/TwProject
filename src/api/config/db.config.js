const { Sequelize } = require('sequelize');

const db = new Sequelize("nobel",null,null,{
    dialect : "sqlite",
    storage: "C:\\Users\\Ana\\Desktop\\TwProject\\data\\nobel.db"
});

module.exports = db;