// Ana: C:\Users\Ana\Desktop\TwProject\data\nobel.db
// Andreea: C:\Users\Andreea\Documents\Github\TwProject\data\nobel.db
const { Sequelize } = require('sequelize');

const db = new Sequelize("movies",null,null,{
    dialect : "sqlite",
    storage: "C:\\Users\\Ana\\Desktop\\TwProject\\data\\movies.db"
});

module.exports = db;