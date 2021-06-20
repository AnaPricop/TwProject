// Ana: C:\Users\Ana\Desktop\TwProject\data\movies.db
// Andreea: C:\Users\Andreea\Documents\Github\TwProject\data\movies.db
const { Sequelize } = require('sequelize');

const db = new Sequelize("nobel",null,null,{
    dialect : "sqlite",
    storage: "C:\\Users\\Andreea\\Documents\\Github\\TwProject\\data\\movies.db"
});

module.exports = db;