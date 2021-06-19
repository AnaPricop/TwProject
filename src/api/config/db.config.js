// Ana: C:\Users\Ana\Desktop\TwProject\data\nobel.db
// Andreea: C:\Users\Andreea\Documents\Github\TwProject\data\nobel.db
const { Sequelize } = require('sequelize');

const db = new Sequelize("nobel",null,null,{
    dialect : "sqlite",
    storage: "C:\\Users\\Andreea\\Documents\\Github\\TwProject\\data\\nobel.db"
});

module.exports = db;